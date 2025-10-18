// components/ui/input.tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-auto w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:ring-1 focus:border-sky-500 focus-visible:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
