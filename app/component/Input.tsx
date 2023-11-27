import { InputHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      {...rest}
      ref={ref}
      className={cn(
        'bg-white text-black font-bold border-b-4 border-b-[#cca300] rounded-none w-full px-2 py-2 bg-transparent outline-none border-zinc-600 placeholder:text-zinc-700',
        className,
      )}
    />
  )
})