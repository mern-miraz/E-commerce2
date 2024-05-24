import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import cartImg from "../assets/cartImg.png"
import { ImCross } from "react-icons/im";





const Menu = () => {

    let [catShow, setCatShow] = useState(false)
    let [cartShow, setCartShow] = useState(false)
    let [accountShow, setAccountShow] = useState(false)

    let catref = useRef()
    let cartref = useRef()
    let accountref = useRef()

    useEffect(()=>{
        document.addEventListener("click", (e) => {
            if(catref.current.contains(e.target) == true){
                setCatShow(!catShow)
            }else{
                setCatShow(false)
            }

            if(accountref.current.contains(e.target) == true){
                setAccountShow(!accountShow)
            }else{
                setAccountShow(false)
            }

            if(cartref.current.contains(e.target) == true){
                setCartShow(!cartShow)
            }else{
                setCartShow(false)
            }


        })
    },[catShow, cartShow])



  return (
    <section className='bg-[#F5F5F3]'>
    <Container className="py-[25px]">
        <Flex className="items-center">
            <div className="w-[25%] flex items-center gap-x-2 relative cursor-pointer" ref={catref}>
                <HiBars3BottomLeft className='text-[20px] text-[#262626]'/>
                <p className=' font-Dmsans font-bold text-[14px] text-[#262626]'>Shop by Category</p>
                {catShow &&
                <div className=" absolute top-10 left-0 w-[261px] bg-[#262626] rounded-[15px] z-50">
                    <ul className=''>
                        <li className='font-Dmsans font-normal text-[14px] text-[#ffffffb0] py-4 pl-[21px] hover:pl-[45px] hover:text-white hover:font-bold duration-700 ease-in-out border-b-[1px] border-[#D8D8D8]'>Accesories</li>
                        <li className='font-Dmsans font-normal text-[14px] text-[#ffffffb0] py-4 pl-[21px] hover:pl-[45px] hover:text-white hover:font-bold duration-700 ease-in-out border-b-[1px] border-[#D8D8D8]'>Furniture</li>
                        <li className='font-Dmsans font-normal text-[14px] text-[#ffffffb0] py-4 pl-[21px] hover:pl-[45px] hover:text-white hover:font-bold duration-700 ease-in-out border-b-[1px] border-[#D8D8D8]'>Electronics</li>
                        <li className='font-Dmsans font-normal text-[14px] text-[#ffffffb0] py-4 pl-[21px] hover:pl-[45px] hover:text-white hover:font-bold duration-700 ease-in-out border-b-[1px] border-[#D8D8D8]'>Clothes</li>
                        <li className='font-Dmsans font-normal text-[14px] text-[#ffffffb0] py-4 pl-[21px] hover:pl-[45px] hover:text-white hover:font-bold duration-700 ease-in-out border-b-[1px] border-[#D8D8D8]'>Bags</li>
                        <li className='font-Dmsans font-normal text-[14px] text-[#ffffffb0] py-4 pl-[21px] hover:pl-[45px] hover:text-white hover:font-bold duration-700 ease-in-out border-b-[1px] border-[#D8D8D8]'>Home appliances</li>
                    </ul>
                </div>}
            </div>
            <div className="w-[50%] items-center">
                <div className="flex items-center justify-center relative">
                    <input type="text" placeholder='Search Products' className='font-Dmsans font-normal text-[14px] text-[#C4C4C4] h-[50px] w-[601px] px-[21px] outline-none' />
                    <FaSearch className=' absolute top-[50%] translate-y-[-50%]  lg:right-[15%]'/>
                </div>
            </div>
            <div className="w-[25%] flex justify-end gap-x-5">
                <div className=" flex relative cursor-pointer" ref={accountref}>
                        <FaUser/>
                        <IoMdArrowDropdown/>
                        {accountShow &&
                    <div className=" absolute top-[50px] right-0 w-[200px] z-50">
                        <div className=" bg-[#2B2B2B] w-full h-[50px] text-white justify-center items-center flex hover:bg-white hover:text-[#262626] duration-500 ease-in-out">
                            <h3 className='font-Dmsans font-bold text-[14px] '>My Account</h3>
                        </div>
                        <div className=" bg-[#2B2B2B] w-full h-[50px] text-white justify-center items-center flex hover:bg-white hover:text-[#262626] duration-500 ease-in-out">
                            <h3 className='font-Dmsans font-bold text-[14px] '>Log Out</h3>
                        </div>
                    </div>}
                </div>
                <div className=" relative cursor-pointer" ref={cartref}>
                    <FaShoppingCart className=''/>
                    {cartShow && <div className=" absolute top-[25px] right-0 z-[1] h-[241px] w-[360px]">
                    <div className="w-full p-5 bg-[#F5F5F3] flex">
                        <div className="">
                            <img src={cartImg} alt="" />
                        </div>
                        <div className=" mt-[17px] ml-5">
                            <p className='font-dmsans text-[14px] font-bold text-[#262626] '>Black Smart Watch</p>
                            <h3 className='font-dmsans text-[14px] font-bold text-[#262626] mt-[12px]'>$44.00</h3>
                        </div>
                        <div className=" mt-[35px] ml-[78px]">
                            <ImCross/>
                        </div>
                    </div>
                    

                    <div className="w-full pt-[14px] px-[22px] pb-[20px] bg-[#FFF]">
                        <div className="">
                            <h4 className='font-dmsans text-[16px] font-normal leading-[23px] text-[#767676]'>Subtotal: <span className='font-dmsans text-[16px] font-bold leading-[23px] text-[#262626]'>$44.00</span></h4>
                        </div>

                        <div className=" flex justify-around mt-[13px]">
                            <div className="">
                                <p className='py-4 px-10 border-2 border-[#2B2B2B] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white hover:border-transparent duration-500 ease-in-out'>View Cart</p>
                            </div>
                            <div className="">
                                <p className='py-4 px-10 border-2 border-[#2B2B2B] font-dmsans text-[14px] font-bold text-[#262626] hover:bg-[#262626] hover:text-white hover:border-transparent duration-500 ease-in-out'>Checkout</p>
                            </div>
                        </div>
                    </div>
                </div>}
                </div>
            </div>
        </Flex>
    </Container>
    </section>
    
  )
}

export default Menu