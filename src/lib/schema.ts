// lib/schemas.ts
import * as z from 'zod'

export const RegisterSchema = z
  .object({
    name: z.string().min(2, {
      message: 'Tên phải có ít nhất 2 ký tự.',
    }),
    email: z.string().email({
      message: 'Vui lòng nhập một địa chỉ email hợp lệ.',
    }),
    password: z.string().min(8, {
      message: 'Mật khẩu phải có ít nhất 8 ký tự.',
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu nhập lại không khớp.',
    path: ['confirmPassword'],
  })
