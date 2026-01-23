'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {Menu,X} from 'lucide-react';

export default function Navbar() {
    const [drawerOpen,setDrawerOpen] = useState(false)
    

    const toggleNavbar = () =>{
        setDrawerOpen(!drawerOpen)
    }

  return (
    <>
    <nav className={`sticky top-0 z-50 py-3 backdrop-blur-lg bg-[#213a46]`}>
            <div className="px-4 mx-auto container  text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrik-0">
                        <Image src='/images/logo.webp' className="h-15 lg:w-full" height={160} width={100} alt="logo"/>
                    </div>

                    <ul className="hidden lg:flex  space-x-12">
                        <li><Link href="#" className='cursor-pointer text-[1.1rem] transition-all duration-300 uppercase font-semibold hover:text-[#d3bc8d] hover:underline underline-offset-8'>Home</Link></li>
                        <li><Link href="#"  className='cursor-pointer text-[1.1rem] transition-all duration-300 uppercase font-semibold hover:text-[#d3bc8d] hover:underline underline-offset-8'>about us</Link></li>
                        <li><Link href="#"  className='cursor-pointer text-[1.1rem] transition-all duration-300 uppercase font-semibold hover:text-[#d3bc8d] hover:underline underline-offset-8'>Services</Link></li>
                        <li><Link href="#"  className='cursor-pointer text-[1.1rem] transition-all duration-300 uppercase font-semibold hover:text-[#d3bc8d] hover:underline underline-offset-8'>events</Link></li>
                        <li><Link href="#"  className='cursor-pointer text-[1.1rem] transition-all duration-300 uppercase font-semibold hover:text-[#d3bc8d] hover:underline underline-offset-8'>blog</Link></li>
                        <li><Link href="#"  className='cursor-pointer text-[1.1rem] transition-all duration-300 uppercase font-semibold hover:text-[#d3bc8d] hover:underline underline-offset-8'>contact</Link></li>
                    </ul>

                    <div className="hidden lg:flex justify-center items-center">
                        <Link href="https://www.eventfinda.co.nz/2026/naresh-iyers-valentine-musical-concert/auckland/manukau-city/tickets" className="flex items-center gap-2 border border-[#d3bc8d] text-[#d3bc8d] rounded-sm px-5 py-3  font-bold uppercase text-[1rem] hover:bg-[#d3bc8d] hover:border-[#0a1a1f] hover:text-[#0a1a1f]">Book Tickets</Link>
                    </div>

                    <div className="lg:hidden flex flex-col justify-end">
                        <button onClick={toggleNavbar} className="cursor-pointer relative z-50">
                            {drawerOpen ?<X/> : <Menu/>}
                        </button>
                    </div>

                    {drawerOpen &&
                        <div className="fixed z-20 w-full bg-[#0a1a1f] right-0 top-0 p-12 flex flex-col justify-start items-center lg:hidden gap-3">
                             <ul className="flex flex-col gap-3">
                                <li><Link href="#" className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-[#d3bc8d] hover:underline underline-offset-8'>Home</Link></li>
                                <li><Link href="#"  className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-[#d3bc8d] hover:underline underline-offset-8'>about us</Link></li>
                                <li><Link href="#"  className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-[#d3bc8d] hover:underline underline-offset-8'>Services</Link></li>
                                <li><Link href="#"  className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-[#d3bc8d] hover:underline underline-offset-8'>events</Link></li>
                                <li><Link href="#"  className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-[#d3bc8d] hover:underline underline-offset-8'>blog</Link></li>
                                <li><Link href="#"  className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-[#d3bc8d] hover:underline underline-offset-8'>contact</Link></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </nav>
      
    </>
  )
}
