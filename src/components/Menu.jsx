import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";






const Menu = () => {
  return (
    <section className='bg-[#F5F5F3]'>
        <Container className="py-[25px]">
        <Flex className="items-center">
            <div className="w-[25%] flex items-center gap-x-2">
                <HiBars3BottomLeft/>
                <p>Shop by Category</p>
            </div>
            <div className="items-center">
                <div className="flex items-center relative">
                    <input type="text" placeholder='Search Products' className='h-[50px] w-[601px] px-[21px] outline-none' />
                    <FaSearch className=' absolute top-[50%] translate-y-[-50%]  right-[20px]'/>
                </div>
            </div>
            <div className="w-[25%] flex justify-end">
                <div className=" flex">
                        <FaUser/>
                        <IoMdArrowDropdown/>
                </div>
                <div className="">
                    <FaShoppingCart/>
                </div>
            </div>
        </Flex>
    </Container>
    </section>
  )
}

export default Menu