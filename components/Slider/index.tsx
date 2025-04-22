import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Image from "next/image";
interface IProps {
  items: any[];
}

function NextArrow(props:any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={
        "shadow bg-transparent p-2 rounded-full border-2 border-white text-white absolute right-5 top-1/2 z-10 cursor-pointer"
      }
    >
      <HiArrowRight size={28} />
    </div>
  );
}

function PrevArrow(props:any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`shadow bg-transparent p-2 rounded-full border-2 border-white text-white absolute left-5  top-1/2 z-10 cursor-pointer`}
    >
      <HiArrowLeft size={28} />
    </div>
  );
}

const CustomSlider = ({ items }: IProps) => {
  const [current, setCurrent] = React.useState(0);
  const sliderRef = React.useRef(null);
  const settings = {
    className: "center flex items-center",
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 200,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_:any, index:any) => {
      setCurrent(index);
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <Slider {...settings} ref={sliderRef}>
        {[...items]

          .map((item, i) => (
            <div className={`outline-none w-full relative`} key={`item-${i}`}>
              <section
                className={`p-20 overflow-hidden transform transition-all h-screen lg:h-slider bg-white bg-cover bg-center text-white w-full flex items-center`}
                
              >
                {item?.cover && (
                  <Image
                    src={item?.cover}
                    alt=""
                    className={`object-cover`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    quality={100}
                    placeholder="blur"
                    blurDataURL={item?.cover}
                  />
                )}


              </section>
              <div className="absolute top-0 z-40 h-full w-full bg-black opacity-50"/>
            </div>
          ))}
      </Slider>
    <div className="absolute bottom-36 md:bottom-20 md:w-2/3">
      <div className="uppercase px-10 md:px-40  font-bold text-white text-3xl lg:text-4xl"
      data-sal="slide-down"
      data-delay="1000"
      data-sal-duration={1000}
          >
          YOU TRUSTED LOGISTIC <a className="text-[#277ecd]">PARTNER</a> IN WORLDWIDE SMART WAY</div>
    </div>
    </div>
  );
};

export default CustomSlider;
