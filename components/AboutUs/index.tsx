import React from "react";

const AboutUs = () =>{
    return(<div className="py-10 md:py-20 space-y-10 md:space-y-0 md:flex md:space-x-10">
        <div className="lg:flex lg:space-x-10 space-y-10 lg:space-y-0">
            <div className="space-y-5 w-full lg:w-1/2">
                <div className="space-y-1 "
                 data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}>
                    <div className=" font-semibold text-lg md:text-xl lg:text-2xl " >Бидний тухай</div>
                    <div className="flex  space-x-1">
                        <div className="border-2 border-[#277ecd] rounded-full w-1" />
                        <div className="border-2 border-[#277ecd] rounded-l-lg w-20" />
                    </div>
                </div>
                <div className="font-bold text-2xl md:text-3xl lg:text-4xl"
                 data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}
                >Найрсаг хамт олон, найдвартай үйлчилгээ таныг хүлээж байна.</div>
                <div className="font-semibold text-gray-500 text-md md:text-lg lg:text-xl"  data-sal="slide-down"
          data-delay="1000"
          data-sal-duration={1000}>   Бид дэлхийн өнцөг булан бүрээс бүх төрлийн тээврийн хэрэгслэлийг ашиглан овор ихтэй, хүнд жинтэй тээвэрлэхэд хамгийн хэцүү мэргэжилийн ур чадвар, туршлага шаардсан бүх төрлийн ачааг тээвэрлэж чаддагаараа бусдаас ялгарч чаддаг. </div>
                <div className="text-md md:text-lg lg:text-xl"
                 data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}> “Анджин Транс” ХХК нь 2010 онд улс хоорондын тээвэр зуучлалын үйл ажиллагааг эрхлэн явуулах зорилго тавин 100% дотоодын хөрөнгө оруулалттайгаар үүсгэн байгуулагдсан бөгөөд тээвэр зуучлалын үйл ажиллагааг амжилттай явуулж байна. Өнөөдөр тус компани нь тээвэр зуучлалын салбарт олон жил ажилласан туршлагатай мэргэжлийн ажилтнуудаар багаа бүрдүүлсэн бөгөөд ОХУ, Хятад, Япон, Солонгос, Тайланд, АНУ, Австрали, Канад, Герман зэрэг дэлхийн томоохон 50 гаруй оронд байрлах өөрийн агентийн сүлжээг ашиглан төрөл бүрийн ачааг агаар, далай, авто болон төмөр замын тээврийн бүх төрлөөр улс хоорондын тээвэр зуучлалын иж бүрэн үйлчилээг үзүүлж байна.

                 </div>
            </div>
            <div  data-sal="slide-down"
          data-delay="1000"
          data-sal-duration={1000} className="lg:w-1/2 w-full space-y-5">
                <div className="flex space-x-5">
                    <img className="w-full" src="/img/1.jpg"/>
                    <img className="w-full" src="/img/2.jpg"/>
                </div>
                <div >
                <video className="w-full" controls={true}>
                     <source  src="www.youtube.com/watch?v=3bGNuRtlqAQ" type="video/mp4" />
                </video>
                </div>
            </div>
        </div>
    </div>)
}
export default AboutUs