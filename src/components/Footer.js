'use client';

import Image from "next/image"
import { SocialLinks,contactus } from "@/items/SocialMedia"
import {Link} from 'react-scroll'


export default function Footer() {
  return (
    <div id="contact" className="relative w-full bg-cover bg-no-repeat" style={{backgroundImage:"url('/images/probg.jpg')"}}>
            <div className="absolute inset-0 bg-black/85"></div>
          <div className="relative max-w-[1440px] mx-auto flex flex-col py-26 px-8">
                
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between ">
                <div className="flex items-center flex-shrik-0">
                    <Image src='/images/logo.webp' className="h-15 lg:w-full" height={160} width={100} alt="logo"/>
                </div>

                <div className="flex flex-col text-[#d3bc8d] gap-12">
                    <h1 className="lg:text-center font-semibold uppercase">quick links</h1>
                    <div className="flex flex-col gap-4 items-start text-[#d3bc8d]">
        
                         <ul className="flex flex-col gap-3">
                                <li><Link to='hero' offset={-100} smooth={true} duration={500} className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>Home</Link></li>
                                <li><Link to='aboutus' offset={-200} smooth={true} duration={500}  className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>about us</Link></li>
                                <li><Link to='services' offset={-200} smooth={true} className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>Services</Link></li>
                                <li><Link to="events" offset={-200} smooth={true} className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>events</Link></li>
                                <li><Link to="contact" offset={-200} smooth={true} className='cursor-pointer text-[1rem] transition-all duration-300 uppercase font-semibold hover:text-white hover:underline underline-offset-8'>contact</Link></li>
                            </ul>
                    </div>
                </div>

                <div className="flex flex-col text-[#d3bc8d] gap-8">
                    <h1 className="lg:text-center font-semibold uppercase">Connect Us</h1>
                    <div className="flex gap-4 items-center text-[#d3bc8d]">
        
                        {SocialLinks.map((i,index)=>(
                            <a key={index} href={i.link} target="_blank">{i.icon}</a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col text-[#d3bc8d] gap-8">
                    <h1 className="lg:text-center font-semibold uppercase">Contact us</h1>
                    <div className="flex flex-col gap-4 items-start text-[#d3bc8d]">
        
                        {contactus.map((i,index)=>(
                            <div key={index} className="flex gap-4">
                                {i.icon}
                                <a href={i.link} target="_blank">{i.content}</a>
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
                
                
          </div>
        </div>
  )
}
