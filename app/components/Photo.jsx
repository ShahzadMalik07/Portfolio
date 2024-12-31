"use client"

import Image from "next/image"
import { motion } from "framer-motion"
const Photo = () => {
  return (
    <div className="h-full w-[45%]">
      <div className="h-full w-full xl:mt-8 mt-0">
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



          className="mix-blend-lighten ">
          <div className=""> <Image src="/myPhoto.png" alt="" width={340} height={300} quality={100} className=" relative rounded-3xl " ></Image>
            <div className="h-[359px] w-[346px] border-8 border-blue-400 rounded-3xl absolute -top-4 left-0 bg-transparent"  ></div>
          </div>


        </motion.div>
      </div>
    </div>
  )
}

export default Photo
