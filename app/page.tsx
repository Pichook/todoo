"use client";
import { Button } from '@/components/ui/button'
import { DropdownMenuDemo } from '@/components/ui/dropdown'
import { useRouter } from 'next/navigation'

import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { Menu, Plus } from 'lucide-react'
import Image from 'next/image'
// import { Button } from "@/components/ui/button"

export default function Home() {
  const router = useRouter();
  return (
    <main className='flex flex-col bg-blue-300 min-h-screen'>
      <div className='flex h-16 bg-white items-center '>
        {/* <Image src={'/menu.png'} width={15} height={20} alt={'menu'} /> */}
        <div className='flex px-4 justify-start'>
          <Button onClick={() => router.push("/page1")}>Private</Button>
        </div>

        <div className='flex px-4 ml-auto'>
          <div className='flex items-center px-4'>
            <p className='font-mono font-bold'>Username</p>
          </div>

          <div className="w-9 rounded-full overflow-hidden">
            <img src="/user.png" />
          </div>

        </div>

      
      </div>

      <div className='flex justify-end mx-8 mt-4 '>
        <DropdownMenuDemo />    
        {/* <Button variant="outline" className=' h-8 w-fit flex justify-center'><Plus className='mr-2 h-5 w-fit'/>Create</Button> */}
      </div>

      <div className='flex bg-blue-200 flex-1 mx-8 my-3 px-4 pb-4 rounded-md'>
        <div className='flex flex-col w-full'>

          <div className='p-2 mb-1 mt-2 mx-2 font-bold flex items-center font-sans'>
            <div className='flex w-1/3 text-sm justify-center'>
              <p>Task</p>
            </div>
            <div className='flex w-2/3 text-sm justify-start'>
                <div className='flex w-1/6 text-sm justify-center'>
                  <p>Assigned by</p>
                </div>
                <div className='flex w-2/6 text-sm justify-center'>
                  <p>Given</p>
                </div>
                <div className='flex w-2/6 text-sm justify-center'>
                  <p>Due</p>
                </div>
                <div className='flex w-1/6 text-sm justify-center'>
                  <p>Action</p>
                </div>
            </div>

          </div>
          <div className='p-2 mb-1 mt-2 mx-2 bg-white rounded-md flex items-center font-sans'>
            <div className='flex w-1/3 text-sm justify-start'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className='flex w-2/3 text-sm justify-start'>
                <div className='flex w-1/6 text-sm justify-center'>
                  <p>Admin</p>
                </div>
                <div className='flex w-2/6 text-sm justify-center'>
                  <p>DD/MM/YYYY HH:MM</p>
                </div>
                <div className='flex w-2/6 text-sm justify-center'>
                  <p>DD/MM/YYYY HH:MM</p>
                </div>
                <div className='flex w-1/6 text-sm justify-center '>
                  <p className='bg-green-500 px-4 rounded-md text-white w-28 text-center'>Done</p>
                </div>
            </div>

          </div>
            
          <div className='p-2 mb-1 mt-2 mx-2 bg-white rounded-md flex items-center font-sans'>
            <div className='flex w-1/3 text-sm justify-start'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className='flex w-2/3 text-sm justify-start'>
                <div className='flex w-1/6 text-sm justify-center'>
                  <p>Admin</p>
                </div>
                <div className='flex w-2/6 text-sm justify-center'>
                  <p>DD/MM/YYYY HH:MM</p>
                </div>
                <div className='flex w-2/6 text-sm justify-center'>
                  <p>DD/MM/YYYY HH:MM</p>
                </div>
                <div className='flex w-1/6 text-sm justify-center '>
                  <p className='bg-yellow-400 px-4 rounded-md w-28 text-center'>In Progress</p>
                </div>
            </div>

          </div>
          <div className='p-2 mb-1 mt-2 mx-2 bg-white rounded-md flex items-center font-sans'>
            <div className='flex w-1/3 text-sm justify-start'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className='flex w-2/3 text-sm justify-start'>
                <div className='flex w-1/6 text-sm justify-center'>
                  <p>Admin</p>
                </div>
                <div className='flex w-2/6 text-sm justify-center'>
                  <p>DD/MM/YYYY HH:MM</p>
                </div>
                <div className='flex w-2/6 text-sm justify-center'>
                  <p>DD/MM/YYYY HH:MM</p>
                </div>
                <div className='flex w-1/6 text-sm justify-center '>
                  <p className='bg-red-500 px-4 rounded-md w-28 text-center'>Late</p>
                </div>
            </div>

          </div>
          

        </div>
      </div>
    </main>
  )
}
