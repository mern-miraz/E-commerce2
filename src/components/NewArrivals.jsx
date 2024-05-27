import React, { useContext } from 'react'
import Container from './Container'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { apiData } from './ContextApi';
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <div onClick={onClick} className='flex h-[64px] w-[64px] bg-[#979797] rounded-full justify-center items-center absolute top-[30%] lg:right-[-30px] right-0 z-50'>
        <FaChevronRight className=' text-[45px] text-white'/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <div onClick={onClick} className='flex h-[64px] w-[64px] bg-[#979797] rounded-full justify-center items-center absolute top-[30%] lg:left-[-24px] left-0 z-50'>
        <FaChevronLeft className=' text-[45px] text-white'/>
      </div>
    );
  }

var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


const NewArrivals = () => {
    let data = useContext(apiData);


  return (
    <section className=' my-[80px]'>
        <Container>
        <div className="w-full">
                <h3 className=' font-dmsans text-[39px] font-bold text-[#262626]'>New Arrivals</h3>
        </div>

        <Slider {...settings}>
        {data.map((item)=>(
        <Link to="./products">
          <div className=" cursor-pointer mt-[28px] px-5 hover:shadow-2xl">
                    <div className=" relative group overflow-hidden">
                        <img className='w-full lg:h-[350px] h-[200px]' src={item.thumbnail} alt="Product4" />
                        <div className="">
                            <p className=' absolute lg:top-5 lg:left-5 top-1 left-1 py-2 px-[33px] bg-[#262626] font-dmsans text-[14px] font-bold text-[#FFFFFF]'> {item.discountPercentage} %</p>
                        </div>
                        <div className=" absolute w-full bottom-[-200px] group-hover:bottom-0 right-0 bg-[#FFF] lg:pr-[30px] lg:py-[26px] py-3 opacity-0 group-hover:opacity-[1] duration-300 ease-in-out">
                            <div className="flex items-center gap-x-2 text-end justify-end">
                                <p className='font-dmsans lg:text-[16px] text-[14px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out'>Add to Wish List</p>
                                <FaHeart/>
                            </div>
                            <div className=" flex items-center gap-x-2 text-end justify-end lg:pt-5 pt-1">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626]  duration-500 ease-in-out'>Compare</p>
                                <TfiReload/>
                            </div>
                            <div className=" flex items-center gap-x-2 justify-end lg:pt-5 pt-1">
                                <p className='font-dmsans text-[16px] font-normal text-[#767676] hover:font-bold hover:text-[#262626] duration-500 ease-in-out'>Add to Cart</p>
                                <FaShoppingCart/>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between mt-[24px]">
                        <div className=""><h3 className='font-dmsans text-[20px] font-bold text-[#262626]'> {item.title} </h3></div>
                        <div className=""><h3 className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>$ {item.price} </h3></div>
                    </div>
                    <div className=" mt-2">
                        <p className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>Black</p>
                    </div>
        </div>
        </Link>
            ))}
        </Slider>
        </Container>
    </section>
  )
}

export default NewArrivals