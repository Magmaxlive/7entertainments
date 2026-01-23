import { engagement } from "@/app/layout"
import { CalendarDays,Clock9,MapPinCheck,Dot,Music,Armchair,Star,MicVocal,Check  } from 'lucide-react';
import CountDown from "./CountDown";


export default function HeroSection() {
  return (
    <div className="relative w-full bg-center bg-cover bg-no-repeat" style={{backgroundImage:"url('/images/herobg.jpg')"}}>

      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col py-32 px-8 gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">

          {/* left column */}

          <div className="flex flex-col gap-4 lg:justify-self-start justify-center">
              <h4 className="text-[#cfb781] tracking-wide uppercase font-semibold">
                  Seven Entertainment presents
              </h4>
              <h1 className="lg:text-5xl text-3xl font-bold">
                Naresh Iyer Live in Concert
              </h1>
              <h2 className={`${engagement.className} font-bold tracking-widest lg:text-6xl text-5xl text-[#d3bc8d]`}>Raagam 2026</h2>
              <div className="flex flex-col gap-3">
                  <h6 className="lg:text-lg text-sm  font-semibold mt-6 tracking-wider">A magical Valentine's Day Musical evening in Auckland</h6>
                  <p className="lg:text-base text-xs font-normal tracking-wider flex">Live Orchestra <Dot/> Romantic Melodies <Dot/> One-night-Only Concert</p>
              </div>

              <hr className="my-3 opacity-25" />

              <div className="flex flex-col gap-4 text-lg">
                  <div className="flex-col flex lg:flex-row gap-4 lg:gap-6">
                      <div className="flex gap-2 items-center  text-[#d3bc8d]">
                          <CalendarDays /> <p className="font-semibold tracking-wider">Friday, 14 february 2026</p>
                      </div>
                      <div className="flex gap-2 items-center  text-[#d3bc8d]">
                          <Clock9 /> <p className="font-semibold tracking-wider uppercase">7:00 pm - 10:00 pm</p>
                      </div>
                  </div>

                  <div className="flex gap-2 items-center  text-[#e2e0db]">
                          <MapPinCheck /> <p className="font-semibold tracking-wider">7A Alaunia Place, Lynfield, Auckland 1042</p>
                  </div>

                  <div className="mt-8 flex flex-col text-center gap-3">
                    <a href="https://www.eventfinda.co.nz/2026/naresh-iyers-valentine-musical-concert/auckland/manukau-city/tickets" className="rounded-sm lg:w-fit py-3 font-bold px-10  bg-[#d3bc8d] text-[#213a46] uppercase">book tickets now</a>
                    <h6 className="lg:text-sm text-xs flex tracking-wide items-center lg:justify-start justify-center">Limited seats <Dot/> Instant confirmation</h6>
                  </div>
              </div>
          </div>

          {/* left column ends */}

          {/* right column */}

          <div className="flex flex-col justify-end lg:w-[380px] py-4 w-full min-h-[600px] overflow-hidden bg-white shadow-lg rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl lg:justify-self-end justify-self-center bg-cover bg-center gap-2" style={{backgroundImage:"url('/images/Naresh Iyer.png')"}}>
            <div className="flex flex-col items-center justify-center gap-1 py-3 backdrop-blur-xl bg-white/2">
                <h5 className="text-2xl font-semibold text-[#d3bc8d] flex gap-3 items-center"><Music />Valentine's Day Special</h5>
                <h6 className="font-semibold tracking-wider">Naresh Iyer Live in Auckland</h6>
                <p className="flex gap-3 text-sm items-center tracking-wider"><Armchair />Limited seats</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 py-4 ">
                <CountDown/>
            </div>

              <div className="flex justify-center pb-2">
                  <a href="https://www.eventfinda.co.nz/2026/naresh-iyers-valentine-musical-concert/auckland/manukau-city/tickets" className="rounded-sm lg:w-fit py-2 font-bold px-5 border  border-[#d3bc8d] text-[#d3bc8d] uppercase">Get tickets</a>

              </div>
          </div>

          {/* right column ends*/}

        </div>

        <div className="flex lg:flex-row flex-col gap-4 py-6 justify-between">
          <div className="flex gap-4 items-center backdrop-blur-xl bg-white/10 py-6 lg:px-10 px-5 rounded-lg lg:w-[380px] justify-center">
              <Star size={45} className="text-[#d3bc8d]"/>
              <div className="flex flex-col gap-1 items-center">
              <span className="font-bold text-xl">10000+</span>
              <span className="font-semibold text-center">Attendies across New Zeland </span>
            </div>
          </div>

          <div className="flex gap-4 items-center backdrop-blur-xl bg-white/10 py-6 lg:px-10 px-5 rounded-lg lg:w-[380px] justify-center">
              <MicVocal  size={45} className="text-[#d3bc8d]"/>
              <div className="flex flex-col gap-1 items-center">
              <span className="font-bold text-xl">Featuring </span>
              <span className="font-semibold text-center">One of india's most loved playback singers</span>
            </div>
          </div>

          <div className="flex gap-4 items-center backdrop-blur-xl bg-white/10 py-6 lg:px-10 px-5 rounded-lg lg:w-[380px] justify-center">
              <Check  size={45} className="text-[#d3bc8d]"/>
              <div className="flex flex-col gap-1 items-center">
              <span className="font-bold text-xl">Trusted </span>
              <span className="font-semibold text-center">Auckland event organisers</span>
            </div>
          </div>

        </div>
      </div>
      </div>
    
  )
}
