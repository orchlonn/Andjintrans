import React from "react";
import Slider from "react-slick";

const OurProject = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }]
      };
    const data = [{
        img:<img className="w-full" src="/img/1.jpg" />,
        ProjectName:"Logistic Product ",
        jProductName:"Weight Product"
    },
    {
        img:<img className="w-full" src="/img/2.jpg" />,
        ProjectName:"Logistic Product ",
        jProductName:"Weight Product"
    },
  
    {
        img:<img className="w-full" src="/img/3.jpg" />,
        ProjectName:"Logistic Product ",
        jProductName:"Weight Product"
    },  {
        img:<img className="w-full" src="/img/4.jpg" />,
        ProjectName:"Logistic Product ",
        jProductName:"Weight Product"
    },]
    return(
    <div className=" py-10 md:py-20 space-y-10">
        <div className="space-y-2.5 text-center ">
            <div className="space-y-1 " data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}>
                <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">Our Projects</div>
                <div className="flex justify-center space-x-1">
                    <div className="border-2 border-[#277ecd] rounded-full w-1" />
                    <div className="border-2 border-[#277ecd] rounded-l-lg w-20" />
                </div>
            </div>
            <div data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000} className="font-bold text-xl md:text-2xl lg:text-3xl">Client are Interested for <a className="text-[#277ecd]">Logistic</a> Service of Ocean Freight</div>                
            <div data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000} className="text-base md:text-md lg:text-lg">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</div>
        </div>
        <Slider  {...settings}>
            {data.map((item)=>(
                    <div className="w-full p-3 group " data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}>
                        <div className="w-full relative">{item.img}
                        <div className="bg-black opacity-60 top-0  absolute w-full h-full hidden group-hover:block"/>
                        <div className="hidden group-hover:block absolute w-full bottom-10 text-white bottom-2 space-y-5 text-center">
                           <div className="font-serif text-lg md:text-xl">{item.ProjectName}</div>
                            <div className="font-bold text-xl md:text-2xl">{item.jProductName}</div>
                        </div>
                        </div>
                    </div>
                 
            ))}
         
        </Slider>   
      
    </div>)
}
export default OurProject