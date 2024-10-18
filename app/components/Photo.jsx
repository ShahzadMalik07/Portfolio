"use client"

import Image from "next/image"
import { motion } from "framer-motion"
const Photo = () => {
  return (
    <div className="h-full w-[40%]">
      <div className="h-full w-full mt-8 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" }
          }}

        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeIn" }
          }}



          className="mix-blend-lighten">
          <Image src="/photo.png" alt="" width={300} height={300} className="object-contain rounded-full bg-blue-500" />
        </motion.div>
      </div>
    </div>
  )
}

export default Photo
