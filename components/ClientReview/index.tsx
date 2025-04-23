import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientReview = () => {
  const TypedSlider = Slider as unknown as React.FC<any>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  };
  const data = [
    {
      img: <img className="rounded-full w-24" src="/img/img-1.jpg" />,
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi eligendi facilis itaque minus non odio, quaerat ullam under",
      name: "md.abdul hakim",
      job: "Senior Teacher",
    },
    {
      img: <img className="rounded-full w-24" src="/img/img-2.jpg" />,
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi eligendi facilis itaque minus non odio, quaerat ullam under",
      name: "md.abdul hakim",
      job: "Senior Teacher",
    },
    {
      img: <img className="rounded-full w-24" src="/img/img-1.jpg" />,
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi eligendi facilis itaque minus non odio, quaerat ullam under",
      name: "md.abdul hakim",
      job: "Senior Teacher",
    },
  ];
  return (
    <div className=" py-10 md:py-20 space-y-10">
      <div
        data-sal="slide-down"
        data-delay="1000"
        data-sal-duration={1000}
        className="space-y-2.5 text-center "
      >
        <div className="space-y-1 ">
          <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">
            Our Services
          </div>
          <div className="flex justify-center space-x-1">
            <div className="border-2 border-[#277ecd] rounded-full w-1" />
            <div className="border-2 border-[#277ecd] rounded-l-lg w-20" />
          </div>
        </div>
        <div className="font-semibold text-xl md:text-2xl lg:text-3xl">
          We are Interested for Your <a className="text-[#277ecd]">Service</a>{" "}
          of Ocean Freight
        </div>
        <div className="text-base md:text-md lg:text-lg">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text
        </div>
      </div>
      <div className="relative p-5">
        <TypedSlider {...settings}>
          {data.map((item) => (
            <div
              className="p-5 bg-white"
              data-sal="slide-down"
              data-delay="1000"
              data-sal-duration={1000}
            >
              <div className="space-y-2 md:space-y-5 bg-red-50  px-5 md:px-14 py-3 my-8 md:py-7">
                <div className="absolute z-50 -top-1 drop-shadow-xl bg-white p-1 rounded-full">
                  {item.img}
                </div>
                <div className="pt-10 md:pt-5 text-gray-600">{item.text}</div>
                <div className="font-bold uppercase text-md lg:text-xl">
                  {item.name}
                </div>
                <div className="flex space-x-2 md:space-x-4 items-center">
                  <div className="border w-5 md:w-7 border-[#277ecd] " />
                  <div className="text-base md:text-md text-gray-600">
                    {item.job}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TypedSlider>
      </div>
    </div>
  );
};
export default ClientReview;
