import React from 'react'
import Container from './Container'
import Flex from './Flex'
import logoImg from "../assets/Logo.png"

const Navbar = () => {
  return (
    <Container>
        <Flex className="h-[80px] items-center">
            <div className="w-[30%]">
                <img src={logoImg} alt="" />
            </div>
            <div className="w-[70%]">
                <ul className=' flex'>
                    <li className='px-[20px] font-Dmsans font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>Home</li>
                    <li className='px-[20px] font-Dmsans font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>Shop</li>
                    <li className='px-[20px] font-Dmsans font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>About</li>
                    <li className='px-[20px] font-Dmsans font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>Contact</li>
                    <li className='px-[20px] font-Dmsans font-normal text-[14px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out'>Journal</li>
                </ul>
            </div>
        </Flex>
    </Container>
  )
}

export default Navbar