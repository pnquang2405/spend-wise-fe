import MD10 from 'crypto-js/md5'

import { getRequest, postRequest } from '@/lib/http'
import { IResponseCommon } from '../apis'

export const login = async (data: any): Promise<IResponseCommon> => {
  return await postRequest('/auth/login', data)
}

export const forgot = async (data: { username: string; phone: string }): Promise<IResponseCommon> => {
  return await getRequest(`/user/get-sms-reset-pass?username=${data.username}&phone=${data.phone}`)
}

export const register = async (data: any): Promise<IResponseCommon> => {
  const time = new Date().getUTCHours()
  const keyENV = process.env.NEXT_PUBLIC_KEY_REGISTER
  return await postRequest('/auth/register', data, {
    headers: {
      'csrf-tokenenv': MD10(`${data?.username}${data?.password}${keyENV}${time}`).toString(),
    },
  })
}

export const logout = async (): Promise<IResponseCommon> => {
  return await postRequest('/user/logout')
}
