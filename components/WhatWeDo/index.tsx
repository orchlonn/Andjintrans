import React from "react";
import {FcInTransit,FcGraduationCap} from "react-icons/fc"
const WhatWeDo = () =>{
    const data =[ { title :"Best Time Management" , icon: <FcInTransit /> , text:"It was popularised in the 1960s with the release of Letraset sheets containing ." },
    { title :"Secure & Trust" , icon: <FcGraduationCap/> , text:"It was popularised in the 1960s with the release of Letraset sheets containing ." },]
    return(
        <div className="bg-[#F2F2F2] relative h-full">
        <div className="px-10 md:px-32 container mx-auto py-10 md:py-20 space-y-10 md:space-y-0 md:flex md:space-x-10">
        <div className="lg:flex  lg:space-x-10 space-y-10 lg:space-y-0">
            <div className="space-y-5  w-full lg:w-3/5 " data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}>
                <div className="space-y-1 ">
                    <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">What We Do</div>
                    <div className="flex  space-x-1">
                        <div className="border-2 border-[#277ecd] rounded-full w-1" />
                        <div className="border-2 border-[#277ecd] rounded-l-lg w-20" />
                    </div>
                </div>
                <div data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000} className="font-bold text-xl md:text-2xl lg:text-3xl">Your Goal to work Logistic  <a className="text-[#277ecd]">Activities</a> Solution of Business</div>
                <div className="space-y-5 ">
                {data.map((item)=>(
                        <div className="flex" data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}>
                            <div className="border-2 border-[#277ecd] rounded-full"/>
                            <div className="rounded-xl rounded-l-none drop-shadow-xl bg-white p-5 flex space-x-5" >
                                <div className="text-3xl md:text-4xl lg:text-5xl ">{item.icon}</div>
                                <div className="space-y-3">
                                    <div className="font-semibold text-lg md:text-xl lg:text-2xl">{item.title}</div>
                                    <div className="text-md md:text-lg">{item.text}</div>
                                </div>
                            </div>
                        </div> 
                    ))} 
                </div> 
            </div>
            <div className="lg:w-1/2 w-full lg:h-full lg:absolute right-0 top-0 " data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}>
                <video className="w-full h-full" controls={true}>
                     <source className="" src="www.youtube.com/watch?v=3bGNuRtlqAQ" type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
    </div>
    )
}
export default WhatWeDo