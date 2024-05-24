import React from 'react'
import banImg from "../assets/banner.png"
import Slider from "react-slick";
import { FaTruck } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import Container from "./Container"
import Flex from './Flex';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          top: "50%",
          left: "150px",
          transform: "translateY(-50%)"

        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='slickactive'
        style={{
          width: "30px",
          color: "transparent",
          borderRight: "2px white solid",
          padding: " 10px 0"
        }}
      >
        0{i + 1}
      </div>
    )
  };

const Banner = () => {
  return (
    <section>
        <Slider {...settings}>
        <div className="">
            <img className='w-full' src={banImg} alt="" />
        </div>
        <div className="">
            <img className='w-full' src={banImg} alt="" />
        </div>
        <div className="">
            <img className='w-full' src={banImg} alt="" />
        </div>
        <div className="">
            <img className='w-full' src={banImg} alt="" />
        </div>
        </Slider>

        <section className=' lg:border-[1px] border-[#F0F0F0] font-dmsans pl-7'>
        <Container>
          <Flex className="justify-between lg:py-[20px] py-2 items-center flex-wrap gap-y-4 lg:gap-0">
            <div className=" flex w-full lg:w-[33%]">
              <h2 className='text-[16px] font-normal text-[#6D6D6D]'><span className='text-[22px] font-bold text-[#262626] '>2</span> Two years warranty</h2>
            </div>
            <div className=" flex items-center gap-x-2 w-full lg:w-[33%] lg:justify-center">
              <FaTruck className='text-[22px] font-bold text-[#262626] '/> 
              <h2 className='text-[16px] font-normal text-[#6D6D6D]'>Free shipping</h2>
            </div>
            <div className=" flex items-center gap-x-2 w-full lg:w-[33%] lg:justify-end">
              <TbReload className='text-[22px] font-bold text-[#262626] '/>
              <h3 className='text-[16px] font-normal text-[#6D6D6D]'>Return policy in 30 days</h3>
            </div>
          </Flex>
        </Container>
        </section>
    </section>
  )
}

export default Banner