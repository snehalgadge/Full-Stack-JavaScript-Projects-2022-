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
    const [dotActive, setDotActive] = useState(0);

    const settings ={
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (prev,next) =>{
          setDotActive(next);
        },
        appendDots: dots => (
          <div
            style={{
              position:"absolute",
              top:"70%",
              left:"45%",
              transform:"translate(-50% -50%)",
              width: "210px",
            }}
          >
            <ul style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
             }}> 
             {" "}
             {dots} 
             </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style = {
              i === dotActive 
              ? {
              width: "25px",
              height:"25px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#131921",
              color: "#131921",
              padding: "4px 0",
              cursor: "pointer",
              border: "2px solid #f3a847",
            }
          : {
              width: "25px",
              height:"25px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#131921",
              color: "#131921",
              padding: "4px 0",
              cursor: "pointer",
              border: "2px solid white",
          }
        }
          >
            {i + 1}
          </div>
        ),
        responsive: [
        {
          breakpoint: 576,
          settings: {
            dots: true,
            appendDots: (dots) =>(
            <div
              style={{
                position:"absolute",
                top:"70%",
                left:"0",
                right:"0",
                margin: "0 auto",
                transform:"translate(-50% -50%)",
                width: "150px",
              }}
            >
            <ul style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
             }}
             > 
             {" "}
             {dots} 
             </ul>
            </div>
            ),
            customPaging: i => (
              <div
                style = {
                  i === dotActive 
                  ? {
                  width: "20px",
                  height:"20px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#131921",
                  color: "#131921",
                  padding: "4px 0",
                  cursor: "pointer",
                  border: "1px solid #f3a847",
                  fontSize:"10px",
                }
              : {
                  width: "20px",
                  height:"20px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#131921",
                  color: "#131921",
                  padding: "4px 0",
                  cursor: "pointer",
                  border: "1px solid white",
                  fontSize:"10px"
              }
            }
              >
                {i + 1}
              </div>
            ),
          },
        }
      ]
    };

  return (
    <div className='w-full z-0'>
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