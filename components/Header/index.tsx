import React, { useRef, useState } from "react";

const Header = (item:any) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
      };
    const MenuList =[{
        title:"Нүүр",
        href:"#"
    },{
        title:"Бидний тухай",
        href:"#1"
    },
    {
        title:"Service",
        href:"#2"
    },
    {
        title:"Project",
        href:"#3"
    },
    {
        title:"Team",
        href:"#4"
    },
    {
        title:"blog",
        href:"#5"
    },]
    return (
        <div data-sal="slide-down"
        data-delay="1000"
        data-sal-duration={1000}>
        <div
        className={`${
          item.scroll ? "fixed bg-white  " : " absolute "
        } top-0 z-50 py-3 w-full hidden md:block md:drop-shadow-xl`}
      >
   <div className="container mx-auto px-10 md:px-20 z-50 ">
       <div className="md:flex md:justify-between items-center">
       <div>
           <img className="w-40" src="/and.png"/>
       </div> 
       <div className="flex space-x-5 font-semibold md:text-lg lg:text-xl items-center"> 
       {MenuList.map((items)=>(
           <div  className="">
          <a href={items.href}  className={`${item.scroll ? "text-black" : "text-white"}`}>
          {items.title}
          </a>
           </div>
       ))}
     
       </div>
   </div>
   </div>
   </div>
   {/* <>
   <div
     className="top-10 fixed  z-50  right-5 font-cool cursor-pointer  md:hidden"
     onClick={handleOpen}
   >
     <div className="block w-11 absolute left-1/2 top-1/2  transform  -translate-x-1/2 -translate-y-1/2 ">
       <span
         className={`${
           item.scroll ? "bg-black" : "bg-white"
         } block absolute   transform transition duration-500 ease-in-out ${
           open ? "rotate-45 scale-75 top-4 right-4" : "-translate-y-1.5"
         }`}
         style={{ height: "0.18rem", width: "2rem" }}
       />
       <span
         className={`block absolute ${
           item.scroll ? "bg-black" : "bg-white"
         } transform transition duration-500 ease-in-out ${
           open ? "opacity-0 invisible " : ""
         }`}
         style={{ height: "0.18rem", width: "2rem" }}
       />
       <span
         className={`block absolute ${
           item.scroll ? "bg-black" : "bg-white"
         } transform transition  duration-500 ease-in-out ${
           open ? "-rotate-45 scale-75 top-4 right-4" : "translate-y-1.5"
         }`}
         style={{ height: "0.18rem", width: "2rem" }}
       />
     </div>
   </div>
   <div
     className={`transition-all fixed top-0 right-0 left-0 bottom-0  font-cool z-10 ${
       open ? "opacity-100 " : "opacity-0 invisible"
     }`}
   >
     <div
       className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90"
       onClick={handleOpen}
     ></div>
     <div className="container mx-auto px-4">
       <div className="text-center mt-40 list-none bold font-serif tracking-normal h-full w-full  absolute  text-white ">
         {open && (
           <div className="space-y-10">
             {MenuList.map((menu, index) => (
               <li key={index}>
                 <a
                   className="hover:text-gray-500   duration-500 text-2xl"
                   href={menu.href}
                 >
                   {menu.title}
                 </a>
               </li>
             ))}
             
           </div>
         )}
       </div>
     </div>
   </div>
 </>
 <>
        <div
          className="top-5 fixed  z-50  right-5 font-cool cursor-pointer  md:hidden"
          onClick={handleOpen}
        >
          <div className="block w-11 absolute left-1/2 top-1/2  transform  -translate-x-1/2 -translate-y-1/2 ">
            <span
              className={`${
                item.scroll ? "bg-black" : "bg-white"
              } block absolute   transform transition duration-500 ease-in-out ${
                open ? "rotate-45 scale-75 top-4 right-4" : "-translate-y-1.5"
              }`}
              style={{ height: "0.18rem", width: "2rem" }}
            />
            <span
              className={`block absolute ${
                item.scroll ? "bg-black" : "bg-white"
              } transform transition duration-500 ease-in-out ${
                open ? "opacity-0 invisible " : ""
              }`}
              style={{ height: "0.18rem", width: "2rem" }}
            />
            <span
              className={`block absolute ${
                item.scroll ? "bg-black" : "bg-white"
              } transform transition  duration-500 ease-in-out ${
                open ? "-rotate-45 scale-75 top-4 right-4" : "translate-y-1.5"
              }`}
              style={{ height: "0.18rem", width: "2rem" }}
            />
          </div>
        </div>
        <div
          className={`transition-all fixed top-0 right-0 left-0 bottom-0  font-cool z-10 ${
            open ? "opacity-100 " : "opacity-0 invisible"
          }`}
        >
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90"
            onClick={handleOpen}
          ></div>
          <div className="container mx-auto px-4">
            <div className="text-center mt-40 list-none bold font-serif tracking-normal h-full w-full  absolute  text-white ">
              {open && (
                <div className="space-y-10">
                  {MenuList.map((menu, index) => (
                    <li key={index}>
                      <a
                        className="hover:text-gray-500   duration-500 text-2xl"
                        href={menu.href}
                      >
                        {menu.title}
                      </a>
                    </li>
                  ))}
                
                </div>
              )}
            </div>
          </div>
        </div>
      </> */}
    </div>
    )
  }
  
  export default Header
  