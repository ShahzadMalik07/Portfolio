import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci"
import { useState } from "react"

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" }
  ,


]

const MobileNav = () => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false);



  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} >
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-2xl text-blue-500" />
      </SheetTrigger>
      <SheetContent className="flex items-center  flex-col">
        <div className="text-4xl mt-32 mb-14"><Link href={"/"}>Shahzad</Link></div>
        <div>
          <ul className="flex flex-col items-center justify-center gap-[25px]">
            {links.map((item, index) => {
              return <li className="text-2xl" key={index}><Link onClick={closeSheet} className={`${item.path===pathname && "text-blue-500 border-b-2 border-blue-500"} hover:text-blue-500 transition-all`} href={item.path}>{item.name}</Link></li>
            })}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
