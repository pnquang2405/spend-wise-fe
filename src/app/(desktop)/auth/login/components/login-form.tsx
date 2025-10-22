'use client'

import { useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { login } from '@/lib/apis/auth' // Giả sử bạn có hàm login
import { useAuth } from '@/store/auth-store'

// 1. Định nghĩa Schema (đã loại bỏ 'remember')
const LoginSchema = z.object({
  email: z.string().email({ message: 'Email không hợp lệ.' }),
  password: z.string().min(1, { message: 'Vui lòng nhập mật khẩu.' }),
})

interface LoginFormProps {
  onLoginSuccess: () => void
  onShowRegister: () => void
}

export function LoginForm({ onLoginSuccess, onShowRegister }: LoginFormProps) {
  const [apiError, setApiError] = useState<string | null>(null)
  const setProfile = useAuth((state) => state.setProfile)
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    setApiError(null)
    try {
      const response = (await login(values)) || {}
      console.log('response', response)

      if (response?.code === 200) {
        setProfile(response?.data?.user)
        onLoginSuccess()
      } else {
        setApiError(response.errors || 'Email hoặc mật khẩu không chính xác.')
      }
    } catch (err: any) {
      setApiError(err.message || 'Đã xảy ra lỗi. Vui lòng thử lại.')
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Chào mừng trở lại!</h2>
      <p className="text-gray-500 mb-6">Đăng nhập để tiếp tục quản lý chi tiêu của bạn.</p>

      {/* Social login */}
      <div className="flex flex-col gap-3">
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3 font-semibold text-gray-700 hover:bg-gray-50">
          <i className="fab fa-google text-red-500"></i> Đăng nhập với Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3 font-semibold text-gray-700 hover:bg-gray-50">
          <i className="fab fa-facebook text-blue-600"></i> Đăng nhập với Facebook
        </button>
      </div>

      <div className="my-6 flex items-center">
        <hr className="w-full border-gray-300" />
        <span className="px-2 text-sm text-gray-400">HOẶC</span>
        <hr className="w-full border-gray-300" />
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="nhap@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 3. Chỉ giữ lại link "Quên mật khẩu?" */}
          <div className="flex justify-end pt-1">
            <a href="#" className="text-sm font-medium text-sky-600 hover:underline">
              Quên mật khẩu?
            </a>
          </div>

          {/* Hiển thị lỗi API */}
          {apiError && <p className="text-sm text-red-600">{apiError}</p>}

          {/* Submit Button */}
          <Button size="xl" type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </Button>
        </form>
      </Form>
      <p className="text-center text-sm text-gray-600 mt-6">
        Chưa có tài khoản?{' '}
        <button onClick={onShowRegister} className="font-bold text-sky-600 hover:underline">
          Đăng ký ngay
        </button>
      </p>
    </div>
  )
}
