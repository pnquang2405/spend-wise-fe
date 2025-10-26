import { apiRequest, postRequest } from '../http'

export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export type CreateTransactionDto = {
  user_id: number
  category_id?: number
  amount: number
  type: TransactionType
  description?: string
  transaction_date?: string
  meta?: Record<string, any>
}

export async function createTransaction(dto: CreateTransactionDto, file?: File) {
  const formData = new FormData()

  formData.append('user_id', dto.user_id.toString())
  if (dto.category_id !== undefined) formData.append('category_id', dto.category_id.toString())
  formData.append('amount', dto.amount.toString())
  formData.append('type', dto.type)
  if (dto.description) formData.append('description', dto.description)
  if (dto.transaction_date) formData.append('transaction_date', dto.transaction_date)
  if (dto.meta) formData.append('meta', JSON.stringify(dto.meta)) // object -> string

  // File
  if (file) formData.append('file', file)
  for (const [key, value] of formData.entries()) {
    console.log(key, value)
  }

  return await apiRequest({
    url: '/transactions',
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData,
    fetchOptions: { credentials: 'include' },
  })
}
