"use client"
import {PiCaretLeftBold} from "react-icons/pi"
import { useSwiper } from "swiper/react"


const Mybtns = () => {
    const swiper = useSwiper()
  return (
    <div className="flex gap-10 absolute z-20 w-full justify-none">
        <button className="px-2 py-1 bg-red-400"><PiCaretLeftBold/></button>
        <button className="px-2 py-1 bg-red-400" >2</button>    
    </div>
  )
}

export default Mybtns
