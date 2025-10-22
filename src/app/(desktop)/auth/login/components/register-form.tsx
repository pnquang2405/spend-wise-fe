'use client'

import { useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { RegisterSchema } from '@/lib/schema'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { register } from '@/lib/apis/auth'
import { useAuth } from '@/store/auth-store'

interface RegisterFormProps {
  onLoginSuccess: () => void
  onShowLogin: () => void
}

export function RegisterForm({ onLoginSuccess, onShowLogin }: RegisterFormProps) {
  const [apiError, setApiError] = useState<string | null>(null)
  const setProfile = useAuth((state) => state.setProfile)

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setApiError(null)
    try {
      const response = (await register(values)) || {}
      if (response?.code === 200) {
        setProfile(response?.data?.user)
        onLoginSuccess()
      } else setApiError(response.errors)
    } catch (err: any) {
      setApiError(err.message)
    }
  }

  const isLoading = form.formState.isSubmitting

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Tạo tài khoản mới</h2>
      <p className="text-gray-500 mb-6">Bắt đầu quản lý tài chính và lên kế hoạch vui chơi!</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và Tên</FormLabel>
                <FormControl>
                  <Input placeholder="Nguyễn Văn An" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Xác nhận mật khẩu</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {apiError && <p className="text-sm text-red-600">{apiError}</p>}

          <Button size="xl" type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Đang xử lý...' : 'Đăng ký'}
          </Button>
        </form>
      </Form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Đã có tài khoản?{' '}
        <button onClick={onShowLogin} className="font-bold text-sky-600 hover:underline">
          Đăng nhập
        </button>
      </p>
    </div>
  )
}
