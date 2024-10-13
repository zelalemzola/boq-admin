import React from 'react';
import Navbar from './_components/Navbar';
import Sidebar from './_components/Sidebar';

import "@uploadthing/react/styles.css";
import '../globals.css';
export const metadata = {
  title: "BOQ Professional's Admin Dashboard",
  description: "BOQ dashboard for BOQ professionals",
};

const Layout = ({ children }) => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className='flex pt-[53px] z-0'>
        {/* Sidebar is hidden on small screens, but visible on medium screens and larger */}
        <div className="hidden lg:flex h-screen">
          <Sidebar />
        </div>
        <div className='flex-1'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
