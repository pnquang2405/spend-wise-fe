import { postRequest } from '@/lib/http'

export interface IResponseCommon<T = any> {
  data: T
  code: number
  msg?: string
  errors?: any
  message?: any
  status?: string
  isLoading?: boolean
}

export const trackDataCampaign = async (data: any): Promise<IResponseCommon> => {
  return await postRequest('/campaign/tracking', data)
}
