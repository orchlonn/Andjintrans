import React from "react";
import {MdLocalShipping} from "react-icons/md"
import {GiShipBow} from "react-icons/gi"
import {BiTrophy,BiWorld} from  "react-icons/bi"

const Match = () =>{
    const data =[ {title:"Product Delivery" ,number:"8567" ,icon:<MdLocalShipping />},
    {title:"Shipping Delivery" ,number:"6587" ,icon:<GiShipBow />},
    {title:"Award Winner" ,number:"2567" ,icon:<BiTrophy/>},
    {title:"World Branch" ,number:"5478" ,icon:<BiWorld/>}]
    return(<div className="py-10 md:py-20 space-y-5">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {data.map((item)=>(
                <div className="space-y-5">
                <div className="relative font-semibold text-white space-y-2 bg-[#277ecd] text-center py-5" data-sal="slide-down"
                data-delay="1000"
                data-sal-duration={1000}>
                    <div className="text-md md:text-lg lg:text-xl pt-5">{item.title}</div>
                    <div className="text-3xl md:text-4xl lg:text-5xl">{item.number}</div>
                    <div className="justify-center absolute left-1/2 transform -translate-x-1/2 -top-10 p-0.5 bg-white drop-shadow-xl rounded-full">
                        <div className="bg-[#277ecd] rounded-full p-3 text-3xl">
                            {item.icon}
                        </div>
                    </div>
                </div>
                 <div className="flex justify-center space-x-1">
                 <div className="border-4 border-[#277ecd] rounded-full w-1" />
                 <div className="border-4 border-[#277ecd] rounded-full w-32" />
             </div>
             </div>
            ))}
        </div>
       
    </div>)
}
export default Match