import React from "react";

const OurTeam = () => {
  const team = [
    { name: "Тээвэр ачилт", img: "/img/shipping.jpg", job: "Road Freight" },
    { name: "Бараа буулгалт", img: "/img/shipping.jpg", job: "Road Freight" },
    { name: "Тээвэр баглалт", img: "/img/shipping.jpg", job: "Road Freight" },
    { name: "Ачилтын дараа", img: "/img/shipping.jpg", job: "Road Freight" },
  ];

  return (
    <div className="py-10 md:py-20 space-y-5 md:space-y-10">
      <div className="space-y-2.5 text-center ">
        <div
          className="space-y-1 "
          data-sal="slide-down"
          data-delay="1000"
          data-sal-duration={1000}
        >
          <div className="font-semibold text-lg md:text-xl lg:text-2xl ">
            A glimpse into our daily operations.
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
          Your package’s <a className="text-[#277ecd]">safety</a> and speed are
          our top priorities.
        </div>
        <div
          data-sal="slide-down"
          data-delay="1000"
          data-sal-duration={1000}
          className="text-base md:text-md lg:text-lg"
        >
          Your cargo, delivered quickly and securely—just the way it should be.
        </div>
      </div>
      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5">
        {team.map((item) => (
          <div
            className="text-center group"
            data-sal="slide-down"
            data-delay="1000"
            data-sal-duration={1000}
          >
            <div className="relative">
              <img className="w-full h-full" src={item.img} />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 group-hover:block hidden" />
            </div>
            <div className="border w-full border-[#d36832]" />
            <div className="bg-[#282828] group-hover:bg-[#277ecd] py-5 space-y-3">
              <div className="font-bold text-white text-md md:text-lg lg:text-xl">
                {item.name}
              </div>
              {/* <div className="font-semibold text-white text-sm md:text-base lg:text-md">
                {item.job}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurTeam;
