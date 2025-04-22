import React from "react";
import {FiPhoneCall} from "react-icons/fi"
import {AiOutlineMail ,AiOutlineTwitter} from "react-icons/ai"
import {GrFacebookOption} from "react-icons/gr"
import {BiWorld} from "react-icons/bi"
import {FaYoutube} from "react-icons/fa"
const HeaderContact = () => {
    const icon = [{icon: <GrFacebookOption />, href:""},
    {icon:<AiOutlineTwitter /> , href:""},
    {icon:<BiWorld /> , href:""},
    {icon:  <FaYoutube /> , href:""}]
    return(<div className="bg-[#277ecd] py-4" data-sal="slide-down"
    data-delay="1000"
    data-sal-duration={1000}>
        <div className="container mx-auto px-2 md:px-20  text-white font-semibold">
            <div className="flex justify-between">
                <div className="flex space-x-1  md:space-x-5">
                    <a href="tel:+96770117127" className="flex space-x-2 items-center text-md text-white  lg:text-lg">
                        <FiPhoneCall />
                        <div>+96770117127</div>
                    </a>
                    <div className="flex space-x-2 items-center text-md lg:text-lg">
                        <AiOutlineMail />
                        <a href="mailto:Info@andjintrans.com" className="text-white">Info@andjintrans.com</a>  
                    </div>
                </div>
                <div className="flex space-x-1 md:space-x-2 items-center text-md lg:text-lg">
                    {icon.map((item)=>(
                        <a href={item.href} className="text-white text-md md:text-lg lg:text-xl">
                            {item.icon}
                        </a>
                    ))}
                     {/* <div
                  className="lang text-xl inline-flex space-x-4 text-gray-400 hidden md:block"
                  style={{}}
                  key="t-8"
                >
                    <select name="lang" id="lang">
                        <option>
                        <a
                    className="relative langu hover:text-gray-100 duration-500 text-white"
                    href="/en"
                  >
                    English
                  </a>
                        </option>
                        <option>
                        <a
                    className="relative langu hover:text-gray-100 duration-500 text-white "
                    href="/mn"
                  >
                    Mongolia
                  </a>
                        </option>
                    </select>
               
              
                </div> */}

                </div>
            </div>
        </div>
    </div>)
}
export default HeaderContact