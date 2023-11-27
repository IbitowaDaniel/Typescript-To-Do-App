import type { Metadata } from 'next'
import { Signika_Negative } from 'next/font/google'
import './globals.css'
import { TodoProvider } from './context'

const signika = Signika_Negative({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Typescript To-do App',
  description: 'A typescript and framer motion To Do App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TodoProvider>
      <html lang="en">
        <body className={`text-white bg-blue ${signika.className}`}>{children}</body>
      </html>
    </TodoProvider>
  )
}

