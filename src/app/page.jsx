
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
 
  return (
      <div className="w-full h-screen flex flex-col md:flex-row items-center">
        <div className="w-full h-[40%] md:w-1/2 md:h-screen bg-primary flex items-center justify-center rounded-b-2xl lg:rounded-r-2xl">
          <h1 className="text-white text-2xl md:text-4xl font-bold">BOQ Workers</h1>
        </div>
        <div className="w-full h-[60%] md:w-1/2 md:h-screen bg-white flex flex-col gap-5 items-center justify-center ">
          <h1 className="text-primary font-bold text-2xl md:text-4xl">Welcome Dear Admin</h1>
          <Button className='bg-primary hover:shadow-lg text-white'><Link href="/dashboard" className="text-white rounded-lg">Go To Dashboard</Link></Button>

        </div>
      </div>
  );
}

{/* <div className='bg-primary w-full h-full '>
      <div className='flex flex-col items-center justify-center gap-10 pt-40 px-[20px] pb-[270px] '>
      <h1 className='text-primary text-4xl text-white'>Welcome, Dear Admin Click the button below to go to the Dashbaord</h1>
      <div className='pt-6'>
         <Button className='bg-white hover:bg-white'><Link href="/dashboard" className="text-primary rounded-lg">Go To Dashboard</Link></Button>
      </div>
      </div>
    </div> */}