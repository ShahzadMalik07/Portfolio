import Link from "next/link"
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"


const social = [
    {icon:<FaGithub/>, path:"https://www.github.com/ShahzadMalik07"},
    {icon:<FaLinkedin/>, path:"https://www.linkdin.com"},
    {icon:<FaTwitter/>, path:"https://x.com/Shehzad_code?t=iP3q9EzaVWEB1ygqd9V6cA&s=09"},
]

const Socialicons = ({socialstyle, iconstyle}) => {
  return (
    <div className="flex gap-4">
      {social.map((items,index)=>{
        return <a key={index} href={items.path} className={iconstyle} >{items.icon}</a>
      })}

    </div>
  )
}

export default Socialicons
