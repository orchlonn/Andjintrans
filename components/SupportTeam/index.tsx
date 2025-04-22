import React from "react";

const SupportTeam = () =>{
    return(
    <div className="relative">
        <img className="h-72 lg:h-booking w-full object-none" src="/img/bg-1.jpg"/>
        <div className="bg-black opacity-70 top-0 left-0 w-full h-full justify-center absolute "></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  space-y-5  text-white text-center">
                <div className="text-lg md:text-xl lg:text-2xl font-semibold underline  text-white"  data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}>24/7 Support Team</div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold"  data-sal="slislide-down"
                 data-delay="1000"
                 data-sal-duration={1000}>Quickly Support and Help of our <a className="text-[#277ecd]">Logistic</a> Problem</div>
                <div className="text-md md:text-lg lg:text-xl" data-sal="slide-down"
                 data-delay="1000"
                 data-sal-duration={1000}>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</div>
            </div>
    </div>)
}
export default SupportTeam