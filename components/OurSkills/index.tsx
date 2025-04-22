import React from "react";
import {ImLocation} from "react-icons/im"
const OurSkills = () =>{
    const data =[ { title :"Агаарын тээвэр" , prcent:"[85%]",prw:"w-2/12" , width:"w-10/12" },
    { title :"Далайн тээвэр" , prcent:"[60%]",prw:"w-2/5" , width:"w-3/5" },
    { title :"Төмөр замын тээвэр" , prcent:"[75%]",prw:"w-1/4" , width:"w-3/4" },
    { title :"Авто тээвэрлэлтийн үйлчилгээ" , prcent:"[70%]",prw:"w-1/3" , width:"w-3/4" },]
    return(
        <div className="relative h-full bg-[#f8f8f8]">
        <div className="px-10 md:px-20 container mx-auto py-10 md:py-40 md:flex md:space-x-10">
        <div className="lg:flex w-full h-full   space-y-10 lg:space-y-0">
            <div data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000} className="lg:w-1/2 hidden lg:block w-full lg:h-full lg:absolute left-0 top-0 ">
                <img className="h-full object-none w-full" src="/img/skill-1.jpg"/>
            </div>
            <div className="lg:w-1/2"></div>
            <div className=" space-y-5  lg:w-1/2 ">
                <div data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000} className="space-y-1 ">
                    <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">Our Skill</div>
                    <div className="flex  space-x-1">
                        <div className="border-2 border-[#277ecd] rounded-full w-1" />
                        <div className="border-2 border-[#277ecd] rounded-l-lg w-20" />
                    </div>
                </div>
                <div data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000} className="font-bold text-xl md:text-2xl lg:text-3xl">You ca achive and Progress information  <a className="text-[#277ecd]">Skill</a> Development.</div>
                <div className="space-y-5 w-full">
                {data.map((item)=>(
                        <div className="space-y-2" data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}>
                            <div className="font-bold text-base md:text-md lg:text-lg">{item.title}</div>
                            <div className="flex">
                                <div className={`h-1 ${item.width} bg-[#277ecd]`}/>
                               
                                <div className={`relative border-2 ${item.prw}`}>
                                <div className="absolute -left-2 bottom-2">
                                <ImLocation />
                                </div>
                                    <div className="absolute right-0 bottom-2 text-[#277ecd]">{item.prcent}</div>
                                </div>
                            </div>
                        </div> 
                    ))} 
                </div> 
            </div>
           
        </div>
    </div>
    </div>
    )
}
export default OurSkills