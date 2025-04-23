import React from "react";

import Slider from "react-slick";
import { AiFillCar } from "react-icons/ai";
import { IoAirplaneSharp } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { FaShip } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

const OurServices = () => {
  const TypedSlider = Slider as unknown as React.FC<any>;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
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
  };
  const item = [
    {
      img: (
        <img
          className="w-full h-service object-center object-cover"
          src="/img/4.jpg"
        />
      ),
      icon: <IoAirplaneSharp />,
      title: "Хүнсний бүтээгдэхүүн",
      text: "Тээвэрлэлтийн явцад хагарах, амархан муудах, хадгалалтын тусгай нөхцөл шаардагддаг жимс, ногоо, архи, дарс, пиво болон бусад бүх төрлийн хүсний бүтээгдэхүүнийг аль ч улсаас тээвэрлэж байна.",
    },
    {
      img: (
        <img
          className="w-full h-service object-center object-cover"
          src="/img/5.jpg"
        />
      ),
      icon: <BsBuilding />,
      title: "Барилгын материалын тээвэр",
      text: "ОХУ, БНСУ, БНХАУ-с орж ирж байгаа бүх төрлийн овор ихтэй барилгын тоног төхөөрөмж, задгай болон бусад барилгын материалын тээвэрлэлтийг хийж байна.",
    },
    {
      img: (
        <img
          className="w-full h-service object-center object-cover"
          src="/img/6.jpg"
        />
      ),
      icon: <FaShip />,
      title: "Ноос ноолуур, Арьс ширний экспортын тээвэр",
      text: "Бид БНХАУ-н Эрээн, Шанхай, Тианжин зэрэг хотуудруу ноос ноолуур, арьс шир зэрэг түүхий эдийн экспортын тээвэрлэлтийг вагон болон чингэлэгээр хамгийн богино хугацаанд тээвэрлэдэг.",
    },
    {
      img: (
        <img
          className="w-full h-service object-center object-cover"
          src="/img/1.jpg"
        />
      ),
      icon: <AiFillCar />,
      title: "Овор ихтэй ачаа, хүнд машин механиз, тоног төхөөрөмжийн тээвэр",
      text: "Бид БНСУ, Япон, АНУ, Араб, Герман, Ирланд улсуудаас авч байгаа шинэ болон хуучин автомашинуудад найдвартай ачилт бэхэлгээг хийж, түргэн шуурхай тээвэрлэж байна",
    },
    {
      img: (
        <img
          className="w-full h-service object-center object-cover"
          src="/img/3.jpg"
        />
      ),
      icon: <MdLocalShipping />,
      title: "Аюултай болон химийн ачааны тээвэр",
      text: "Олон Улсын Стандартын түвшинд хүрсэн ГОСТ 19433-81 стандартын дагуу аюултай ачааны техникийн шаардлага, түүний тээвэрлэлтийн болон хадгалалтын нөхцөлд тавих шаардлагуудыг ханган тээвэрлэлтийг гүйцэтгэж байна. Дараах төрлийн ачааг тээвэрлэж байна.",
    },
  ];
  return (
    <div className="bg-[#F2F2F2]">
      <div className="  space-y-10 py-10 md:py-20 container mx-auto px-10 md:px-20 ">
        <div className="space-y-2.5 text-center ">
          <div
            className="space-y-1 "
            data-sal="slide-down"
            data-delay="1000"
            data-sal-duration={1000}
          >
            <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">
              Бидний үйлчилгээ
            </div>
            <div className="flex justify-center space-x-1">
              <div className="border-2 border-[#277ecd] rounded-full w-1" />
              <div className="border-2 border-[#277ecd] rounded-l-lg w-20" />
            </div>
          </div>
          <div
            data-sal="slide-down"
            data-delay="1000"
            data-sal-duration={1000}
            className="font-semibold text-xl md:text-2xl lg:text-3xl"
          >
            Олон <a className="text-[#277ecd]">улсын</a> тээвэр зуучлал
          </div>
          <div
            data-sal="slide-down"
            data-delay="1000"
            data-sal-duration={1000}
            className="text-base md:text-md lg:text-lg"
          >
            Манай компани Монгол улсад хамгийн ойрын далайн тээврийн гарц болох
            БНХАУ-н Синган боомтоор дамжуулан Ойрхи Дорнод, Ази, Америк, Европын
            улсуудад, ОХУ-н Владивосток, Санкт-Петербург, Новороссийск
            боомтуудаар дамжуулан Өмнөд болон Төв Ази, Ойрхи Дорнод, Европ,
            Америк, СНГ-н орнуудад тус тус бүх төрлийн ачааны тээврийг гүйцэтгэж
            байна.
          </div>
        </div>
        <TypedSlider {...settings}>
          {item.map((element) => (
            <div
              className=" p-2"
              data-sal="slide-down"
              data-delay="1000"
              data-sal-duration={1000}
            >
              <div className="w-full  relative">
                {element.img}
                <div className="absolute rounded-full bg-[#277ecd] text-white text-2xl p-2 md:text-3xl -bottom-6 lg:text-4xl right-3">
                  {element.icon}
                </div>
              </div>
              <div className="p-5 border space-y-3">
                <div className="font-bold text-lg md:text-xl lg:text-2xl">
                  {element.title}
                </div>
                <div>{element.text}</div>
              </div>
            </div>
          ))}
        </TypedSlider>
      </div>
    </div>
  );
};
export default OurServices;
