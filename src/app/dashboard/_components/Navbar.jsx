import { Blocks, BriefcaseBusiness, Handshake } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { AlignJustify } from 'lucide-react'
import { Button } from '@/components/ui/button'
const Navbar = () => {
  return (
    <div className='p-3 flex items-center justify-between border-b border-b-primary text-primary  text-xl fixed z-50 w-full'>
        <Link href='/dashboard' className='font-bold'>BOQ Dashboard</Link>
         <div className='lg:hidden'>
         <Drawer>
           <DrawerTrigger>
                <AlignJustify  className='font-bold text-lg '/>
           </DrawerTrigger>
           <DrawerContent>
             <DrawerHeader>
               <DrawerTitle>Where are you Headed?</DrawerTitle>
             </DrawerHeader>
             <div className='flex flex-col gap-4 items-center justify-center'>
              <Link href='/dashboard/categories' className='flex items-center justify-start gap-2 text-primary hover:text-white hover:bg-primary p-3 rounded-lg'>
                <Blocks/>
                <h1 className='text-bold '>Categories</h1>
              </Link>
               <Link href='/dashboard/workers' className='flex items-center justify-start gap-2 top-1 text-primary hover:text-white hover:bg-primary p-3 rounded-lg'>
               <BriefcaseBusiness/> 
               <h1 className='text-bold  '>Workers</h1>
               </Link>
               <Link href='/dashboard/partners' className='flex items-center justify-start gap-2 top-1 text-primary hover:text-white hover:bg-primary p-3 rounded-lg'>
                 <Handshake /><h1 className='text-bold'>Partners</h1>
               </Link>
             </div>
             <DrawerFooter>
               <DrawerClose>
                 <Button variant="outline">Cancel</Button>
               </DrawerClose>
             </DrawerFooter>
           </DrawerContent>
         </Drawer>
        </div>
        </div>
  )
}

export default Navbar;