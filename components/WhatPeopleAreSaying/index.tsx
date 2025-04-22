import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const images = [
  {
    img: <img className="rounded-full" src="/img/1.jpg" />,
    name: "James McHenery",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida. Nullam in viverra sapien. Nunc bibendum nec lectus et vulputate. Nam.",
  },
  {
    img: <img className="rounded-full" src="/img/2.jpg" />,
    name: "James McHenery",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida. Nullam in viverra sapien. Nunc bibendum nec lectus et vulputate. Nam.",
  },
  {
    img: <img className="rounded-full" src="/img/3.jpg" />,
    name: "James McHenery",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida. Nullam in viverra sapien. Nunc bibendum nec lectus et vulputate. Nam.",
  },
  {
    img: <img className="rounded-full" src="/img/4.jpg" />,
    name: "James McHenery",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida. Nullam in viverra sapien. Nunc bibendum nec lectus et vulputate. Nam.",
  },
];

const WhatPeopleAreSay = () => {
  const NextArrow = ({ onClick }: any) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }: any) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imgIndex, setImgIndex] = useState<any>(0);

  const settings: any = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: any, next: any) => setImgIndex(next),
  };

  return (
    <div className="bg-[#F2F2F2] pb-10 md:pb-20">
      <div className=" container mx-auto px-10 md:px-20  space-y-10">
        <div>
          <div
            className="space-y-2.5 text-center"
            data-sal="slide-down"
            data-delay="1000"
            data-sal-duration={1000}
          >
            <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">
              What People Are Saying
            </div>
            <div className="flex justify-center space-x-1">
              <div className="border-2 border-[#277ecd] rounded-full w-1" />
              <div className="border-2 border-[#277ecd] rounded-l-lg w-20" />
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
              <div className="bg-white p-5 py-10 space-y-2.5 text-center">
                {img.img}
                <div className="text-lg md:text-xl font-bold text-[#277ecd]">
                  {img.name}
                </div>
                <div className="text-sm md:text-base">{img.text}</div>
                <div className="flex justify-center text-xl space-x-5 text-[#277ecd]">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default WhatPeopleAreSay;
