import { Separator } from '@radix-ui/react-dropdown-menu'
import { Blocks, BriefcaseBusiness, Handshake } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-[100%] sitcky  shadow-xl bg-gray-50'>
    <div className='flex flex-col   pt-8 '>
       <div className=' p-3'>
        <Link href='/dashboard/categories' className='flex items-center justify-start gap-2 text-primary hover:text-white hover:bg-primary/70 p-3 rounded-lg hover:shadow-xl transition duration-500 ease-in'>
        <Blocks/>
         <h1 className='text-bold '>Categories</h1>
        </Link>
        </div>
        
        <div className='  p-3'>
        <Link href='/dashboard/workers' className='flex items-center justify-start gap-2 top-1 text-primary hover:text-white hover:bg-primary/70 p-3 rounded-lg hover:shadow-xl transition duration-500 ease-in'>
        <BriefcaseBusiness/> 
        <h1 className='text-bold  '>Workers</h1>
        </Link>
        </div>
        <div className='p-3'>
        <Link href='/dashboard/partners' className='flex items-center justify-start gap-2 top-1 text-primary hover:text-white hover:bg-primary/70 p-3 rounded-lg hover:shadow-xl transition duration-500 ease-in'>
          <Handshake /><h1 className='text-bold'>Partners</h1>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default Sidebar