"use client"
import { BsArrowDownRight } from "react-icons/bs"
import { delay, motion } from "framer-motion"
import Link from "next/link"


const services = [
  { num: "01", title: "Frontend Development", desc: "hello this is my joib profievttd dfhhjuj dfdnhdfdddf", href: "/" },
  { num: "02", title: "Backend Development", desc: "hello this is my joib profievttd dfhhjuj dfdnhdfdddf", href: "/" },
  { num: "03", title: "SEO Services", desc: "hello this is my joib profievttd dfhhjuj dfdnhdfdddf", href: "/" },
  { num: "04", title: "Logo Design", desc: "hello this is my joib profievttd dfhhjuj dfdnhdfdddf", href: "/" },

]





const Services = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-2 gap-[60px] "
        >
          {services.map((item, index) => {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-7 group">
              <div className="flex justify-between items-center group">
                <div className="text-5xl font-extrabold group-hover:text-stroke-blue-500 text-transparent text-outline">{item.num}</div>
                <Link className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-blue-500 flex justify-center items-center hover:-rotate-45 transition-all duration-500 " href={item.href}><BsArrowDownRight className="text-3xl text-black"/></Link>
              </div>
              <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-blue-500 transition-all duration-500">{item.title}</h2>
              <p className="text-white/60">{item.desc}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>

    </div>
  )
}

export default Services
