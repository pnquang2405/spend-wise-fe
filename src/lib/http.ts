import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { deleteCookie, getCookie } from 'cookies-next'
import qs from 'qs'

import { getToken } from './cookie'
import { logout } from './apis/auth'

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  metadata?: {
    startTime: Date
  }
}

const defaultCacheTime = 120 // 2m
const isServer = typeof window === 'undefined'
const prefixVersion = '/api/v2'
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL + prefixVersion
const localURL = (process.env.NEXT_PUBLIC_API_BASE_SSR_URL || process.env.NEXT_PUBLIC_API_BASE_URL) + prefixVersion

const allowPath = ['/auth/login', '/user/get-sms-reset-pass', '/auth/register', '/user/logout', '/user/profile']

const IGNORE_AUTH_PATHS = [
  '/c1-2025/game/statistic',
  '/c1-2025/game/total-reward',
  '/lucky-wheel-v2/winning-list',
  '/lucky-wheel-v2/user-spin-history',
]

export const http = axios.create({
  baseURL: baseURL,
  timeout: 40000,
  timeoutErrorMessage: 'Server đang bận, Vui lòng thử lại sau',
  headers: {
    'Content-Type': 'application/json',
  },
})
http.interceptors.request.use(
  async (config: CustomAxiosRequestConfig) => {
    config.metadata = { startTime: new Date() }

    if (!isServer && !IGNORE_AUTH_PATHS.includes(config.url || '')) {
      const token = getCookie('token')
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      const tokenTrial = getCookie('token_trial')
      if (tokenTrial) {
        config.headers['Authorization'] = `Bearer ${tokenTrial}`
      }
    }

    return config
  },
  (err) => {
    throw new Error(err)
  },
)

http.interceptors.response.use(
  (response: any) => {
    return response
  },
  async (error) => {
    // Handle specific error cases here
    if (error.response) {
      const { status, data, config } = error.response

      if (status === 422) {
        const errors = Object.entries(data.data).map(([fieldName, errorMessage]) => {
          return {
            name: fieldName,
            errors: [errorMessage],
          }
        })
        // Perform specific actions for validation errors here
        return Promise.reject({ ...data, errors: errors }) // Reject with validation error data
      }
      if (status === 401 && !allowPath.includes(config?.url) && !getToken()) {
        const { code } = await logout()
        if (code === 200) {
          deleteCookie('token')
          deleteCookie('nicepay')
          deleteCookie('refresh_token')
        }
      }
      // For other errors, return the error response or reject with the error
      return Promise.reject(error.response?.data || error)
    }
  },
)
// Hàm dùng chung để thực hiện yêu cầu HTTP
export async function apiRequest<T>(config: AxiosRequestConfig & { fetchOptions?: RequestInit }): Promise<T | any> {
  try {
    config = {
      ...config,
      headers: {
        ...config?.headers,
      },
    }
    if (isServer) {
      const params = config.params
      const isPreprod = `${process.env.NEXT_PUBLIC_BASE_URL}.includes('pre')`

      // News cache 2h
      const cacheTime = config.url?.indexOf('/news') == -1 ? 7200 : defaultCacheTime
      const url = new URL(`${localURL}${config.url}`)
      if (params && Object.keys(params).length > 0) {
        Object.keys(params).forEach((key) => {
          if (!url.searchParams.has(key)) {
            url.searchParams.append(key, params[key])
          }
        })
      }

      const response = await fetch(url.toString(), {
        next: {
          revalidate: cacheTime,
        },
      })
      // TODO: hard to build preprod env
      if (isPreprod && response.status != 200) {
        return {
          status: 'OK',
          code: 200,
        }
      }
      return await response.json()
    }

    const response: AxiosResponse<T> = await http(config)
    return response?.data
  } catch (error: any) {
    if (error?.message) {
      return { data: error }
    }

    return error
    // return Promise.reject(error);
  }
}

// Phương thức GET
export async function getRequest<T>(url: string, params?: any, headers?: AxiosRequestConfig['headers']): Promise<T> {
  // Thêm params và paramsSerializer nếu được cung cấp
  let config: AxiosRequestConfig = {}
  if (params) {
    config = {
      ...config,
      params, // Đối số tham số truy vấn
      paramsSerializer: (pr: any) => {
        return qs.stringify(pr, { arrayFormat: 'brackets' }) // Sử dụng thư viện querystringify (qs) để tuỳ chỉnh paramsSerializer
      },
      headers,
    }
  }

  return apiRequest<T>({
    ...config,
    method: 'get',
    url,
  })
}

// Phương thức POST
export async function postRequest<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return apiRequest<T>({
    ...config,
    method: 'post',
    url,
    data,
  })
}

// Phương thức PUT
export async function putRequest<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return apiRequest<T>({
    ...config,
    method: 'put',
    url,
    data,
  })
}

export async function deleteRequest<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return apiRequest<T>({
    ...config,
    method: 'delete',
    url,
    data,
  })
}
