import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logoImg from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';



const Navbar = () => {

    let [show, setShow] = useState (false)

  return (
    <Container className="px-4 lg:px-0">
        <Flex className="h-[80px] items-center">
            <div className="w-[30%]">
                <Link to="/"><img src={logoImg} alt="" /></Link>
            </div>
            <div className="w-[70%] ">
                <div className="">
                <ul className={`lg:flex pt-8 lg:pt-0 absolute top-0 left-0 z-[999] lg:static ${show == true ? " bg-[#F5F5F3] h-full w-[40%] top-0 left-0 duration-700 ease-in-out rounded-tr-[15px]" : " w-[40%] h-full top-0 left-[-400px] duration-700 ease-in-out"}`}>
                    <Link to="/" className=' px-[20px] text-[20px] font-Dmsans font-normal lg:text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>Home</Link>
                    <Link to="/products" className='pt-2 lg:pt-0 text-[20px] px-[20px] font-Dmsans font-normal lg:text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>Shop</Link>
                    <Link to="/about" className='pt-2 lg:pt-0 text-[20px]  px-[20px] font-Dmsans font-normal lg:text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>About</Link>
                    <Link to="/contacts" className='pt-2 lg:pt-0 text-[20px]  px-[20px] font-Dmsans font-normal lg:text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>Contact</Link>
                    <Link to="/journal" className='pt-2 lg:pt-0 text-[20px] px-[20px] font-Dmsans font-normal lg:text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>Journal</Link>
                </ul> 
                </div>
            <div className="flex lg:hidden justify-end text-[24px]" onClick={()=>setShow(!show)}>
                {show == true ? <ImCross/> : <FaBars/> }                   
            </div>
            </div>
        </Flex>
    </Container>
  )
}

export default Navbar