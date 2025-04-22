import React from "react";
import FAQComp from "../FAQComp";
import GoogleMapReact from 'google-map-react';
const data = [
  {
    q: "",
    a: "",
  },
  {
    q: "",
    a: "",
  },
  {
    q: "",
    a: "",
  },
  {
    q: "",
    a: "",
  },
  {
    q: "",
    a: "",
  },
];
const FAQ = () => {
  const mapViewConfig = {
    mapOptions: {
      center: {
        lat: 41.8916, 
        lng: -87.6079,
      },
      zoom: 13,
      streetViewControl: true, 
      scrollwheel: true 
    },
    type: 'map',
    allowClusters: false,
    locations: [
      { 
        lat: 41.8789, 
        lng: -87.6359, 
        infoWindowContent: { 
          title: 'Willis Tower', 
          text: 'The new Willis Tower will provide one of the most compelling and dynamic work, dining, shopping and entertainment environments available in any city.', 
          imgUrl: 'http://static.thousandwonders.net/Willis.Tower.original.1014.jpg'
        } 
      },
      { 
        lat: 41.8916, 
        lng: -87.6079,
        infoWindowContent: { 
          title: 'Navy Pier', 
          text: 'Navy Pier is a 3,300-foot-long (1,010 m) pier on the Chicago shoreline of Lake Michigan. It is located in the Streeterville neighborhood of the Near North Side',
          imgUrl: 'http://www.ncmahq.org/images/default-source/default-album/ev/wc17/wc17_navypier.jpg?sfvrsn=0'
        } 
      },
      { 
        lat: 41.8988, 
        lng: -87.6229,
        infoWindowContent: { 
          title: 'John Hancock Center', 
          text: 'The John Hancock Center is a 100-story, 1,128-foot supertall skyscraper at 875 North Michigan Avenue, Chicago, Illinois.',
          imgUrl: 'https://aptamigo-production.s3.amazonaws.com/uploads/property/profile_photo/1032/a486a78b-54ca-4961-a403-5ea5c05a10be.jpg'
        } 
      }
    ]
  };
  
  return (
    <div className="py-20 space-y-10 lg:space-y-0 lg:flex lg:space-x-10 lg:items-center">
      <div className="space-y-10 lg:w-1/2">
      <div>
      <div className="space-y-2.5 text-center"  data-sal="slide-down"
          data-delay="1000"
          data-sal-duration={1000}>
                        <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">Our Faq</div>
                        <div className="flex justify-center space-x-1">
                            <div className="border-2 border-[#277ecd] rounded-full w-1" />
                            <div className="border-2 border-[#277ecd] rounded-l-lg w-20" />
                        </div>
                    </div>
      </div>
      <div >
        {data.map((item) => (
          <FAQComp {...item} />
        ))}
      </div>
      </div>
      <div className="lg:w-1/2 h-full">
    <GoogleMapReact 
      style={{ height: `400px` }}
      defaultZoom={10}
      resetBoundsOnResize={true}
      defaultCenter={{ lat: 47.36667, lng: 8.55 }}
    />
  </div>
        </div>
    
  );
};
export default FAQ;
