"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaAws, FaDocker } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiPostgresql, SiMongodb, } from "react-icons/si"

import { ScrollArea } from '@/components/ui/scroll-area'

const skills = [
  { name: "HTML5", icons: <FaHtml5 /> },
  { name: "CSS", icons: <FaCss3 /> },
  { name: "Tailwind", icons: <SiTailwindcss /> },
  { name: "Javascript", icons: <FaJs /> },
  { name: "React js", icons: <FaReact /> },
  { name: "Next js", icons: <SiNextdotjs /> },
  { name: "Node js", icons: <FaNodeJs /> },
  { name: "Postgres", icons: <SiPostgresql /> },
  { name: "MongoDb", icons: <SiMongodb /> },
  { name: "Git", icons: <FaGitAlt /> },
  { name: "Github", icons: <FaGithub /> },
  { name: "Python", icons: <FaPython /> },
  { name: "AWS", icons: <FaAws /> },
  { name: "Docker", icons: <FaDocker /> },


]

const about = [
  {fieldname:"Name", fieldvalue:"Shahzad Malik"},
  {fieldname:"Phone", fieldvalue:"+91-9690426644"},
  {fieldname:"Experience", fieldvalue:"3+ Years"},
  {fieldname:"Email", fieldvalue:"Shahzadmalik425@gmail.com"},
  {fieldname:"Nationality", fieldvalue:"Indian"},
  {fieldname:"Languages", fieldvalue:"English, Hindi, urdu"},
  {fieldname:"Freelance", fieldvalue:"Available"},


]


const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className='min-h-[80vh] flex items-center justify-center'>
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[398px] gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about me'>About me</TabsTrigger>
          </TabsList>

          {/* content */}

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl'>My Experience</h3>
                <p className='max-w-[450px] text-white/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, possimus natus? Ut odio dolorum sunt!</p>
              </div>
              <ScrollArea className='h-[330px] mt-6'>
                <ul className='grid grid-cols-2 gap-5'>
                  <li className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span className='text-blue-500'>2002 - 2020</span>
                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>Full Stack Developer</h3>
                    <div className='flex items-center gap-2'>
                      <span className='h-[6px] w-[6px] rounded-full bg-blue-500'></span>
                      <p className='text-white/60'>Tech Solution Inc.</p>
                    </div>
                  </li>

                  <li className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span>2002 - 2020</span>
                    <h3>Full Stack Developer</h3>
                    <div>
                      <span></span>
                      <p>Tech Solution Inc.</p>
                    </div>
                  </li>


                  <li className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span>2002 - 2020</span>
                    <h3>Full Stack Developer</h3>
                    <div>
                      <span></span>
                      <p>Tech Solution Inc.</p>
                    </div>
                  </li>


                  <li className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span>2002 - 2020</span>
                    <h3>Full Stack Developer</h3>
                    <div>
                      <span></span>
                      <p>Tech Solution Inc.</p>
                    </div>
                  </li>


                  <li className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span>2002 - 2020</span>
                    <h3>Full Stack Developer</h3>
                    <div>
                      <span></span>
                      <p>Tech Solution Inc.</p>
                    </div>
                  </li>


                  <li className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span>2002 - 2020</span>
                    <h3>Full Stack Developer</h3>
                    <div>
                      <span></span>
                      <p>Tech Solution Inc.</p>
                    </div>
                  </li>
                </ul>

              </ScrollArea>
            </TabsContent>


            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl'>My Education</h3>
                <p className='max-w-[450px] text-white/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, possimus natus? Ut odio dolorum sunt!</p>
              </div>
              <ScrollArea className='h-[330px] mt-6'>
                <ul className='grid grid-cols-2 gap-5'>
                  <li className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span className='text-blue-500'>2002 - 2020</span>
                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>Full Stack Developer</h3>
                    <div className='flex items-center gap-2'>
                      <span className='h-[6px] w-[6px] rounded-full bg-blue-500'></span>
                      <p className='text-white/60'>Tech Solution Inc.</p>
                    </div>
                  </li>

                  <li className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span>2002 - 2020</span>
                    <h3>Full Stack Developer</h3>
                    <div>
                      <span></span>
                      <p>Tech Solution Inc.</p>
                    </div>
                  </li>


                  <li className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span>2002 - 2020</span>
                    <h3>Full Stack Developer</h3>
                    <div>
                      <span></span>
                      <p>Tech Solution Inc.</p>
                    </div>
                  </li>


                  <li className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span>2002 - 2020</span>
                    <h3>Full Stack Developer</h3>
                    <div>
                      <span></span>
                      <p>Tech Solution Inc.</p>
                    </div>
                  </li>


                  <li className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span>2002 - 2020</span>
                    <h3>Full Stack Developer</h3>
                    <div>
                      <span></span>
                      <p>Tech Solution Inc.</p>
                    </div>
                  </li>


                  <li className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span>2002 - 2020</span>
                    <h3>Full Stack Developer</h3>
                    <div>
                      <span></span>
                      <p>Tech Solution Inc.</p>
                    </div>
                  </li>
                </ul>

              </ScrollArea>
            </TabsContent>


            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px]'>
                  <h3 className='text-4xl font-bold'>Skills</h3>
                  <p className='max-w-[450px] text-white/60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus ullam aperiam.</p>
                </div>


                <ScrollArea className='h-[330px]'>
                  <ul className='grid grid-cols-4 gap-[30px] mr-2'>
                    {skills.map((skill, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-gray-900 rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-blue-500'>
                                {skill.icons}
                              </div>

                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}



                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='about me'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px]'>
                  <h3 className='text-4xl font-bold'>About Me</h3>
                  <p className='max-w-[450px] text-white/60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ex voluptatibus assumenda.</p>
                </div>
                <ul className='grid grid-cols-2 gap-y-6 max-w-[620px]'>
                 {about.map((about,index)=>{
                  return  <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                  <span className='text-white/60'>{about.fieldname}</span>
                  <span className='text-xl'>{about.fieldvalue}</span>
                  </li>
                 })}

                
                  
                
                </ul>
              </div>
            </TabsContent>
          </div>

        </Tabs>

      </div>
    </motion.div>
  )
}

export default Resume