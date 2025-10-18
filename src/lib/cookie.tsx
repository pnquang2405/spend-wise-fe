import { getCookie, setCookie } from 'cookies-next'

import { isLocal } from '@/constant/env'

export const setAuth = (data: any): void => {
  setCookie('token', data?.token, {
    secure: isLocal ? false : true,
    sameSite: 'lax',
  })
  setCookie('refresh_token', data?.refresh_token, {
    secure: isLocal ? false : true,
    sameSite: 'lax',
  })
}

export const getToken = (): string => {
  return (getCookie('token') as string) || ''
}

export const isDebug = (): boolean => {
  return true
}
