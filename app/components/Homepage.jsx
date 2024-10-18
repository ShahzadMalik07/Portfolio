import { FiDownload } from "react-icons/fi"
import Socialicons from "./Socialicons"
import Photo from "./Photo"
import Stats from "./Stats"
const Homepage = () => {
    return (
        <>
            <div className="">

                <div className="container h-fit mx-auto flex justify-between mt-8">

                    <div className=" w-[50%] flex flex-col  mt-8">
                        <span className="text-lg mb-2">Web Developer</span>
                        <h1 className="text-6xl mb-2 tracking-wider">Hello I'm</h1>
                        <span className="text-6xl mb-3 tracking-wider text-blue-500">Shahzad Malik</span>
                        <h5 className="w-[65%] text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit delectus, reprehenderit sequi neque alias!</h5>
                        <div className="mt-8 flex gap-8 items-center">
                            <button className="bg-transparent px-10 py-2 border border-blue-500 rounded-full text-blue-500 flex items-center space-x-2  hover:bg-blue-500 hover:text-black hover:transition-all duration-500"><span>Download CV</span><FiDownload /></button>
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
