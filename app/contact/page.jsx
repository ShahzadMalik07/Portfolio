"use client"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select"
import { motion } from "framer-motion"

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+91-9690426644" },
  { icon: <FaEnvelope />, title: "Email", description: "Shahzadmalik425@gmail.com" },
  { icon: <FaMapMarkedAlt />, title: "Address", description: "New Delhi, 110001, India" }
]

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" }
      }}
    >
      <div className="container mx-auto">
        <div className="flex xl:flex-row flex-col gap-[40px]">
          <div className="h-[55%] order-2 xl:order-none">
            <form action="" className="flex flex-col gap-6 p-10 rounded-xl bg-gray-900">
              <h3 className="text-4xl text-blue-500">Let's Work Together</h3>
              {/* <p className="text-md max-w-[468px]">Lorem ipsum dolor sit amet consectetur asdp purfi adipisicing elit. Eveniet officia sit adipisci?</p> */}
              <div className="grid grid-cols-2 gap-6">
                <Input type="Firstname" placeholder="FirstName"/>
                <Input type="Lastname" placeholder="LastName"/>
                <Input type="Email" placeholder="Email Address"/>
                <Input type="phone" placeholder="Phone Number"/>
              </div>
              <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="mkl">Web Deveploment</SelectItem>
                    <SelectItem value="mklp">DevOps</SelectItem>
                    <SelectItem value="mukl">SEO Services</SelectItem>
                    <SelectItem value="mukl">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
             
              </div>
              <Textarea  className="h-200px" placeholder="Type your text here."/>
              <Button className="xl:max-w-40 ">Send Message</Button>
            </form>
          </div>
          <div className=" pl-8 flex-1 flex items-center justify-start">
            <ul className="flex flex-col gap-10">{info.map((item,index)=>{
              return <li key={index} className="flex  items-center gap-6">
                <div className="h-[70px] w-[70px] text-blue-500 text-xl rounded-md bg-gray-900 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white/60">{item.title}</h3>
                  <p className="text-xl">{item.description}</p>
                </div>
              </li>
            })}</ul>
            </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Contact
