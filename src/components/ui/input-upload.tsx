'use client'

import { useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { Paperclip } from 'lucide-react'

type ExpenseForm = {
  file?: FileList
}

export function InputUploadForm() {
  const { register } = useFormContext<ExpenseForm>()
  const [preview, setPreview] = useState<string | null>(null)

  const fileRegister = register('file')

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  return (
    <div>
      <Label htmlFor="file-upload">Đính kèm hóa đơn (tùy chọn)</Label>

      <input
        id="file-upload"
        type="file"
        accept="image/*"
        className="hidden"
        {...fileRegister}
        onChange={(e) => {
          fileRegister.onChange(e)
          const files = e.target.files
          if (files && files.length > 0) {
            const previewUrl = URL.createObjectURL(files[0])
            setPreview(previewUrl)
          }
        }}
      />

      <label
        htmlFor="file-upload"
        className="relative cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-md p-3 flex items-center justify-center text-sm text-gray-500 font-medium border border-gray-300 border-dashed mt-1"
      >
        <Paperclip className="mr-2 w-4 h-4" />
        <span>Chọn tệp...</span>
      </label>

      {preview && (
        <div className="mt-3 flex justify-center">
          <img
            src={preview}
            alt="Preview"
            className="max-h-48 rounded-lg border border-gray-200 shadow-sm object-contain"
          />
        </div>
      )}
    </div>
  )
}
