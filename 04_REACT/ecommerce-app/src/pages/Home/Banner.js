import React from 'react'
import { useState } from 'react';
import Slider from 'react-slick';
import{
    bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive,
} from "../../assets/index"

const Banner = () => {
    const [dotActive, setDoActive] = useState(0);
    const settings ={
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

  return (
    <div className='w-full'>
        <div className='w-full h-full relative'>
        <Slider {...settings}>
      <div>
        <img src={bannerImgOne} alt = "one"/>
      </div>
      <div>
        <img src={bannerImgTwo} alt = "Two"/>
      </div>
      <div>
        <img src={bannerImgThree} alt = "Three"/>
      </div>
      <div>
        <img src={bannerImgFour} alt = "Four"/>
      </div>
      <div>
        <img src={bannerImgFive} alt = "Five"/>
      </div>
    </Slider>
        </div>
    </div>
  )
}

export default Banner