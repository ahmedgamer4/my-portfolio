import { useRef } from "react"
import pic from "./assets/myPhoto.jpg"
import NavMenu from "./NavMenu"
import Nav from "./Nav"
import { MenuAlt1Icon } from "@heroicons/react/outline" 

const Header = () => {
  const menuRef = useRef()
  
  return (
    <header className="px-9 py-5 flex justify-between w-full fixed right-0 top-0 z-20">
      <div className="w-11/12 lg:w-9/12 flex justify-between mx-auto">
        <div className='w-9 h-9 overflow-hidden rounded-full ring-2 ring-zinc-800 ring-opacity-100'>
          <img className="w-full rounded-full -mt-1" src={pic} alt="" />
        </div>
        <button className="md:hidden" onClick={() => menuRef.current.toggleVisibility()}>
          <MenuAlt1Icon className="w-8 h-8 text-gray-200" />
        </button>
        <NavMenu ref={menuRef}/>
        <Nav />
      </div>
    </header>
  )
}

export default Header