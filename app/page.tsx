"use client"

import { TodoList } from './component'
import { Toaster } from 'react-hot-toast'
import { AddTodo } from './component'



export default function Home() {
  return (
    <main className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-h-[80vh] xs:max-h-[90vh] xs:max-w-lg overflow-y-auto cssShadow border-[6px] border-yellow bg-darkBlue rounded-xl py-4'>
      <h1 className='text-3xl text-center font-bold text-yellow border-b-[#eee] border-b-4 mx-5 pb-1'>To Do App</h1>
       
      <Toaster position='bottom-center' />
      <AddTodo />
      <TodoList />
    </main>
  )
}
