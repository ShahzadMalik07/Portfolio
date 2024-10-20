"use client"
import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  
  return (
    <div className='py-8 '>
        <div className='container mx-auto flex justify-between  items-center '>
          <Link href={"/"}><span className='text-5xl text-blue-500'>Shah</span><span className="text-5xl">zad</span></Link>
          <Nav/>
          <div className="xl:hidden">
            <MobileNav/>
          </div>
          
        </div>
       
    </div>
  )
}

export default Header
