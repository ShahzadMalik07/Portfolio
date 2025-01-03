"use client"
import { motion } from "framer-motion"
import react, { useState } from "react"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import Image from "next/image"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Mybtns from "../components/Mybtns"
import SlideButtons from "../components/SlideButtons"

const projects = [
  {
    num: "01",
    title: "Fullstack Project",
    category: "Frontend",
    description: "Medium-style blogging website project, I developed a full-stack web application using Next.js for the frontend and Node.js with PostgreSQL for the backend. The platform allows users to create, edit, and publish blog posts, featuring user authentication, a rich text editor, and dynamic content rendering with Prisma for database management.",
    stack: [{ name: "React Js" }, { name: "Typescript" }, { name: "PostgreSQL" }, { name: "Cloudflare/Hono" },],
    image: "/med.png",
    live: "https://medium-blog-project-tau.vercel.app/",
    github: "https://github.com/ShahzadMalik07/Medium-Blog-Project",
    link: true
  },
  {
    num: "02",
    title: "Frontend Project",
    category: "Frontend",
    description: "Netflix clone project, I developed a responsive frontend using React and Tailwind CSS. The application features a user-friendly interface with dynamic content fetching using TMDB API. It includes SignIn and SignUp functionality with Firebase Api, a sleek carousel for popular shows, interactive search functionality, and seamless video playback for a Netflix-like experience.",
    stack: [{ name: "React Js" }, { name: "Tailwind" }, { name: "Redux Toolkit" }, { name: "Firebase" }],
    image: "/netflix.png",
    live: "https://netflix-gamma-pink.vercel.app/",
    github: "https://github.com/ShahzadMalik07/Netflix--",
    link: true
  },
  {
    num: "03",
    title: "FullStack Project",
    category: "Frontend",
    description: "A mini Paytm-like project where a user can send and receive money in their  account. It includes a Dashboard page where the user can view their available balance and search for any user they want to send money to. The balance is automatically credited at the time of signup. This project also includes user authentication with SignUp and SignIn functionality. It also includes some engaging animations on the SignIn and SignUp form pages. ",
    stack: [{ name: "React Js" }, { name: "Node Js" }, { name: "MongoDb" }, { name: "Tailwind" }, { name: "Recoil" }],
    image: "/project 3.png",
    live: "",
    github: "https://github.com/ShahzadMalik07/Mini-Paytm-App",
    link: false
  },
  {
    num: "04",
    title: "Next Js FullStack Project",
    category: "Fullstack",
    description: "I developed an anonymous messaging website using Next.js, featuring email OTP verification for secure user registration. Each user receives a unique profile link, allowing others to send them anonymous messages. The platform includes a dashboard where users can toggle message acceptance, view message cards, delete messages, and leverage AI-powered suggestions for crafting messages. These features, combined with a seamless interface, offer an engaging and interactive experience for anonymous communication.",
    stack: [{ name: "NextJs" }, { name: "TypeScript" }, { name: "MongoDb" }, { name: "AI" }, { name: "Shadcn/ui" }, { name: "Resend/Email" }],
    image: "/Ama.png",
    live: "https://anonymous-message-fsngglnss-shahzadmalik07s-projects.vercel.app/",
    github: "https://github.com/ShahzadMalik07/Anonymous-Message-App",
    link: true
  },
  {
    num: "05",
    title: "Youtube Frontend Project",
    category: "Frontend",
    description: "Built a YouTube clone app featuring video browsing, search with debouncing, and a nested comments section. Leveraged the YouTube Suggestions API with caching for enhanced performance and user experience. Integrated a live chat feature on the video play page to enable real-time user interaction. Focused on creating a responsive and intuitive interface while efficiently handling real-time data and complex interactions.",
    stack: [{ name: "ReactJs" }, { name: "Redux" }, { name: "Tailwind" }, { name: "Youtube API's" }],
    image: "/yotube.png",
    live: "https://anonymous-message-fsngglnss-shahzadmalik07s-projects.vercel.app/",
    github: "https://github.com/ShahzadMalik07/Youtube",
    link: false
  },

]


const Work = () => {
  const [project, setproject] = useState(projects[0])

  const handleSlide = (swiper) => {
    const currentSlide = swiper.activeIndex
    setproject(projects[currentSlide])
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className=" min-h-[80vh] flex flex-col justify-center py-12 xl:px-0" >
      <div className="container mx-auto">
        <div className="flex xl:flex-row flex-col gap-[30px] ">
          <div className="xl:w-[50%] xl:h-[468px] w-full  order-2 xl:order-none flex flex-col justify-between items-center ">
            <div className="flex flex-col gap-[23px] ">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white hover:text-blue-500 transition-all duration-500">{project.title}</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-3">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-blue-500 text-xl" >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                })}
              </ul>
              <div className="border border-white/20">
              </div>
              <div className="flex gap-4 ">
                {project.link ? <Link href={project.live} target="_blank" rel="noopener noreferrer">

                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="h-[70px] w-[70px] rounded-full bg-gray-900 group flex items-center justify-center">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-blue-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> : ""}

                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="h-[70px] w-[70px] rounded-full bg-gray-900 group flex items-center justify-center">
                        <BsGithub className="text-3xl text-white group-hover:text-blue-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

              </div>
            </div>
          </div>
          <div className="xl:w-[50%]   w-full h-full">
            <Swiper spaceBetween={30}
              slidesPerView={1}
              className="h-[512px] "
              onSlideChange={handleSlide}>
              {projects.map((item, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className={`h-[400px] w-[554px] relative group flex items-center justify-center xl:bg-transparent`}>
                    <div className="absolute top-0 bottom-0 w-full h-full xl:bg-black/10 z-10"></div>
                    <div className="xl:h-full xl:w-full  h-[450px] w-[600px] relative">
                      <Image quality={100} src={project.image} alt="image" fill className="xl:object-contain" />

                    </div>
                  </div>

                </SwiperSlide>

              })}


              <SlideButtons containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-32 xl:right-8 z-20 w-full justify-between xl:w-max xl:justify-none "
              btnStyles="bg-blue-500 hover:bg-blue-400 text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all"  />
            </Swiper>

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
