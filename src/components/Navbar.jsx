import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logoImg from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";



const Navbar = () => {

    let [show, setShow] = useState (false)

  return (
    <Container className="px-4 lg:px-0">
        <Flex className="h-[80px] items-center">
            <div className="w-[30%]">
                <img src={logoImg} alt="" />
            </div>
            <div className="w-[70%] ">
                <div className="">
                <ul className={`lg:flex pt-8 lg:pt-0 absolute top-0 left-0 z-[999] lg:static ${show == true ? " bg-[#F5F5F3] h-full w-[40%] top-0 left-0 duration-700 ease-in-out rounded-tr-[15px]" : " w-[40%] h-full top-0 left-[-400px] duration-700 ease-in-out"}`}>
                    <li className=' px-[20px] text-[20px] font-Dmsans font-normal lg:text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>Home</li>
                    <li className='pt-2 lg:pt-0 text-[20px] px-[20px] font-Dmsans font-normal lg:text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>Shop</li>
                    <li className='pt-2 lg:pt-0 text-[20px]  px-[20px] font-Dmsans font-normal lg:text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>About</li>
                    <li className='pt-2 lg:pt-0 text-[20px]  px-[20px] font-Dmsans font-normal lg:text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>Contact</li>
                    <li className='pt-2 lg:pt-0 text-[20px] px-[20px] font-Dmsans font-normal lg:text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>Journal</li>
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