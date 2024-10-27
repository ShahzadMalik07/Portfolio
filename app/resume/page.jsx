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

const experience = [
  {time:"2024 - Present", skill:"Fullstack Web Developer", company:"Freelance"},
  {time:"2023 - 2024", skill:"Backend Developer", company:"Freelance"},
  {time:"2022 - 2023", skill:"Frontend Developer", company:"Upwork"},
  {time:"2022 - 2022", skill:"SEO", company:"Digital Marketing Agency"},
  {time:"2021 - 2022", skill:"Logo Designer", company:"Digital Marketing Agency"},

]

const education = [ 
  {time:"2023 - 2024", course:"100x Devs Cohort", institute:"Harkirat Singh"},
  {time:"2022 - 2023", course:"Frontend Development", institute:"Sheriyans Coding School" },
  {time:"2021 - 2022", course:"Digital Marketing Course", institute:"Google" },
  {time:"2017 - 2020", course:"Graduate in Pol. Science and Economics", institute:"University Of Delhi" },
  {time:"2017 - 2017", course:"Diploma in Computer Applications", institute:"NCPUL" },

]

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
        <Tabs defaultValue='experience' className='flex flex-col items-center xl:items-start xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[398px]  gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about me'>About me</TabsTrigger>
          </TabsList>

          {/* content */}

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full '>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl'>My Experience</h3>
                <p className='xl:max-w-[850px]  text-white/60'>I am specialize in full-stack development, working with modern frameworks like React, Next.js, and Node.js. My experience covers building user-friendly interfaces, managing databases, and creating secure, scalable web solutions for varied projects.</p>
              </div>
              <ScrollArea className='h-[330px] mt-6'>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                  {experience.map((item,index)=>{
                    return   <li key={index} className='bg-gray-900 h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span className='text-blue-500'>{item.time}</span>
                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.skill}</h3>
                    <div className='flex items-center gap-2'>
                      <span className='h-[6px] w-[6px] rounded-full bg-blue-500'></span>
                      <p className='text-white/60'>{item.company}</p>
                    </div>
                  </li>
                  })}
                

                  
                </ul>

              </ScrollArea>
            </TabsContent>


            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl'>My Education</h3>
                <p className='max-w-[850px] text-white/60'>I have a strong foundation in Web development, focusing on full-stack technologies. My education provided hands-on experience and I gained skills in building scalable applications, problem-solving, and deploying cloud-based systems. This technical background complements my practical experience, enabling me to contribute effectively as a full-stack developer</p>
              </div>
              <ScrollArea className='h-[330px] mt-6'>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                  {education.map((item,index)=>{
                    return  <li key={index} className='bg-gray-900 h-[150px] py-6 px-8 rounded-xl flex flex-col justify-center items-center gap-3'>
                    <span className='text-blue-500'>{item.time}</span>
                    <h3 className='text-xl max-w-[300px] min-h-[60px] text-center'>{item.course}</h3>
                    <div className='flex items-center gap-2'>
                      <span className='h-[6px] w-[6px] rounded-full bg-blue-500'></span>
                      <p className='text-white/60'>{item.institute}</p>
                    </div>
                  </li>
                  })}
                 

                 
                </ul>

              </ScrollArea>
            </TabsContent>


            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col text-center xl:text-start gap-[30px]'>
                  <h3 className='text-4xl font-bold'>Skills</h3>
                  {/* <p className='max-w-[850px] text-white/60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur temporibus ullam aperiam.</p> */}
                </div>


                <ScrollArea className='h-[330px]'>
                  <ul className='grid grid-cols-2 xl:grid-cols-4 gap-[30px] mr-2'>
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
              <div className='flex flex-col  gap-[30px]'>
                <div className='flex flex-col text-center xl:text-start gap-[30px]'>
                  <h3 className='text-4xl font-bold'>About Me</h3>
                  {/* <p className='max-w-[850px] text-white/60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ex voluptatibus assumenda.</p> */}
                </div>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[820px]'>
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
