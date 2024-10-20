import { FiDownload } from "react-icons/fi"
import Socialicons from "./Socialicons"
import Photo from "./Photo"
import Stats from "./Stats"
import Link from "next/link"
const Homepage = () => {
    return (
        <>
            <div className="xl:ml-0 ml-3">

                <div className="container h-fit mx-auto flex flex-col items-center xl:flex-row xl:items-start xl:justify-between mt-8">

                    <div className="order-2 xl:order-none text-center xl:text-left w-[50%] flex flex-col  mt-6">
                        <div className="flex flex-col items-center xl:items-start">
                            <span className="text-lg mb-2 xl:w-[400px] w-[350px]  ">Fullstack Web Developer</span>
                            <h1 className="xl:text-6xl xl:w-full text-6xl  mb-2 tracking-wider w-[280px] text-start">Hello I'm</h1>
                            <span className="text-6xl mb-3 tracking-wider text-blue-500 w-[500px]">Shahzad Malik</span>
                            <p className="w-[435px] xl:w-[550px text-lg text-white/70 ">Passionate full-stack web developer with expertise in building dynamic, user-friendly applications. I work with both front-end and back-end technologies, I enjoy solving complex problems and delivering efficient, scalable solutions for web-based projects.</p></div>

                        <div className="mt-8 flex flex-col xl:flex-row gap-8 items-center">
                            <Link download href={"/resume.pdf"} >   <button className="bg-transparent px-10 py-2 border border-blue-500 rounded-full text-blue-500 flex items-center space-x-2  hover:bg-blue-500 hover:text-black hover:transition-all duration-500"><span>Download CV</span><FiDownload /></button> </Link>



                            <div><Socialicons iconstyle="h-8 w-9 border border-blue-500 text-blue-500 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-black hover:transition-all duration-500 text-base" /></div>
                        </div>
                    </div>
                    <Photo />

                </div>
                <Stats />
            </div>
        </>
    )
}

export default Homepage
