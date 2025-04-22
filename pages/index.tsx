import type { NextPage } from "next";
import AboutUs from "../components/AboutUs";
import ClientReview from "../components/ClientReview";
import FAQ from "../components/FAQ";
import Layout from "../components/Layout";
import OurServices from "../components/OurServices";
import OurTeam from "../components/OurTeam";
import RecentNews from "../components/RecentNews";
import Service from "../components/Service";
import CustomSlider from "../components/Slider";
import SupportTeam from "../components/SupportTeam";
import WhatWeDo from "../components/WhatWeDo";
import OurSkills from "../components/OurSkills";
import OurProject from "../components/OurProject";
import Match from "../components/Match";
import { BiUpArrowAlt } from "react-icons/bi";
import sal from "sal.js";
import React from "react";
import WhatPeopleAreSay from "../components/WhatPeopleAreSaying";
const Image = [
  { cover: "/img/image 1.jpg" },
  { cover: "/img/image 2.jpg" },
  { cover: "/img/image 3.jpg" },
];
const Home: NextPage = () => {
  const [scroll, setScroll] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 200)
      );
    }
    sal();
  }, []);

  return (
    <div className="reltive">
      <Layout>
        <div id="0">
          <CustomSlider items={Image} />
        </div>
        <div id="1">
          <Service />
        </div>
        <div className="container mx-auto px-10 md:px-20 ">
          <AboutUs />
        </div>
        <div id="2">
          <OurServices />
        </div>
        <div className="container mx-auto px-10 md:px-20 ">
          <ClientReview />
        </div>
        <WhatWeDo />
        <OurSkills />
        <div className="container mx-auto px-10 md:px-20 ">
          <div id="3">
            <OurProject />
          </div>
          <Match />
          <div id="4">
            <OurTeam />
          </div>
        </div>
        <div id="5">
          <RecentNews />
        </div>
        <WhatPeopleAreSay />
        <div
          className={`${
            scroll ? "fixed" : "hidden"
          } right-5 md:right-10 bottom-10 rounded-full bg-[#277ecd] p-2`}
        >
          <a href="#0" className="text-4xl text-white">
            <BiUpArrowAlt />
          </a>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
