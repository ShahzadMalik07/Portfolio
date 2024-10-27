"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";



const Nav = () => {
    const path = usePathname()
    const linkStyle = (pathname) => (
        path === pathname ? 'text-blue-500 border-b-2 border-blue-500 font-bold' : ''
      );
  return (
    <div className='hidden xl:flex items-center justify-center p-2 gap-9 w-[50%] '>
        <Link href="/" className={`${linkStyle("/")} hover:text-blue-500 transition-all`}>Home</Link>
        <Link href="/services"className={`${linkStyle("/services")} hover:text-blue-500 transition-all`}>Services</Link>
        <Link href="/resume" className={`${linkStyle("/resume")} hover:text-blue-500 transition-all`}>Resume</Link>
        <Link href="/work" className={`${linkStyle("/work")} hover:text-blue-500 transition-all`}>Work</Link>
        <Link href="/contact" className={`${linkStyle("/contact")} hover:text-blue-500 transition-all`}>Contact</Link>
        <Link href='/contact'><button className="px-5 py-2 bg-blue-500 rounded-full text-black font-medium">Hire me</button> </Link>
        
      
    </div>
  )
}

export default Nav
