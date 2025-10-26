'use client'

import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { cn, formatNumberVN } from '@/lib/utils'
import { CalendarIcon, Paperclip, Pencil, X } from 'lucide-react'
import { categoriesExpense } from '@/constant/categories-expense'
import { InputUploadForm } from '../ui/input-upload'
import { createTransaction, CreateTransactionDto, TransactionType } from '@/lib/apis/transaction'
import { UserProfile } from '@/store/auth-store'

type ExpenseForm = {
  amount: string
  category: number
  date: string
  note: string
  file?: FileList
}

export function AddExpenseDialog({
  profile,
  open,
  onOpenChange,
}: {
  profile: UserProfile
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const methods = useForm<ExpenseForm>({
    defaultValues: {
      amount: '',
      category: 1,
      date: new Date().toISOString().split('T')[0],
      note: '',
      file: undefined,
    },
  })

  const [selectedCategory, setSelectedCategory] = useState<number>(1)
  const amount = methods.watch('amount')

  useEffect(() => {
    const rawValue = amount?.replace(/[^\d]/g, '')
    if (rawValue && rawValue !== '') {
      const formatted = formatNumberVN(Number(rawValue))
      if (formatted !== amount) {
        methods.setValue('amount', formatted)
      }
    }
  }, [amount, methods])

  const onSubmit = async (data: ExpenseForm) => {
    try {
      const file = data.file?.[0]
      const dto: CreateTransactionDto = {
        user_id: profile?.id,
        category_id: data.category,
        amount: Number(data?.amount.replace(/\D/g, '')),
        type: TransactionType.EXPENSE,
        description: data?.note,
        transaction_date: data.date,
      }

      const result = await createTransaction(dto, file)
      console.log('Transaction created:', result)
      onOpenChange(false)
      methods.reset()
    } catch (err) {
      console.error('Create transaction error:', err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-0 overflow-hidden">
        <DialogHeader className="flex flex-row justify-between items-center p-4 border-b">
          <DialogTitle>Thêm Chi Tiêu Mới</DialogTitle>
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
            <X className="w-5 h-5 text-gray-500" />
          </Button>
        </DialogHeader>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="p-6 space-y-5">
            {/* Số tiền */}
            <div>
              <Label htmlFor="amount">Số tiền</Label>
              <div className="relative mt-1">
                <Input
                  id="amount"
                  placeholder="0"
                  {...methods.register('amount')}
                  className="text-3xl font-bold pr-16"
                  inputMode="decimal"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-2xl font-semibold text-gray-400">
                  VND
                </span>
              </div>
            </div>

            {/* Hạng mục */}
            <div>
              <Label>Hạng mục</Label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-2">
                {categoriesExpense.map((cat) => (
                  <button
                    type="button"
                    key={cat.key}
                    onClick={() => {
                      setSelectedCategory(cat.key)
                      methods.setValue('category', cat.key)
                    }}
                    className={cn(
                      'flex flex-col items-center p-2 rounded-lg transition border',
                      selectedCategory === cat.key
                        ? 'bg-emerald-50 border-emerald-500'
                        : 'border-transparent hover:bg-gray-100',
                    )}
                  >
                    <div className={cn('w-10 h-10 rounded-full flex items-center justify-center', cat.color)}>
                      {cat.icon}
                    </div>
                    <span className="text-xs mt-1 text-gray-700">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Ngày & Ghi chú */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Ngày</Label>
                <div className="relative mt-1">
                  <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input id="date" type="date" className="pl-10" {...methods.register('date')} />
                </div>
              </div>
              <div>
                <Label htmlFor="note">Ghi chú</Label>
                <div className="relative mt-1">
                  <Pencil className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="note"
                    placeholder="Ví dụ: Ăn trưa với đồng nghiệp"
                    className="pl-10"
                    {...methods.register('note')}
                  />
                </div>
              </div>
            </div>

            {/* Upload file */}
            <InputUploadForm />

            {/* Buttons */}
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-4 border-t pt-4">
              <Button
                type="button"
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={() => onOpenChange(false)}
              >
                Hủy
              </Button>
              <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-auto">
                Thêm Chi Tiêu
              </Button>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
