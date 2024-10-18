import Link from "next/link"
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"


const social = [
    {icon:<FaGithub/>, path:"www.github.com"},
    {icon:<FaLinkedin/>, path:"www.linkdin.com"},
    {icon:<FaTwitter/>, path:"www.twitter.com"},
]

const Socialicons = ({socialstyle, iconstyle}) => {
  return (
    <div className="flex gap-4">
      {social.map((items,index)=>{
        return <Link key={index} href={items.path} className={iconstyle} >{items.icon}</Link>
      })}
    </div>
  )
}

export default Socialicons
