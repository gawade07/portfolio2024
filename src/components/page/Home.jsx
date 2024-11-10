import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaLink } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useCommon } from "../UI/ContextApi";

const Home = () => {
  const { menu, setMenu, scroller, setScoller ,time, setTime} = useCommon();
//  console.log(time)
  // const timeFn = () => {
  //   const day = new Date();
  //   const dayTime = day.toLocaleTimeString();
  //   setTime(dayTime);
  // };


  return (
    <section className="home">
      <div className="container grid2">
        <div className="textContent">
          <div className="text">
            <div className="heading">
              Hey,This is <br />
              <div className="name">
                {" "}
                Ketan <span>Ga</span>wade
              </div>
            </div>
            <p className="para">An interactive Web Developer</p>
            <NavLink to={"/about"}>
              <button>
                About More
                <FaArrowRightLong />{" "}
              </button>
            </NavLink>
          </div>
          <a href="/Resume2024.pdf" target="_balnk" className="linkResume">
            <FaLink /> Resume Download
          </a>
        </div>
        <figure>
          {/* <FaReact  className="faReact"/>
          <IoLogoJavascript className="faReact" />
          <FaHtml5 className="faReact" />
          <FaCss3Alt className="faReact" /> */}
          <p className="pPara">
            Secure a position as a Front-end Developer where I can utilize my
            skills in HTML, CSS, JavaScript and React js to contribute to the
            growth and success of a dynamic company.
          </p>
          <img src="/picsv.png" alt="" />
        </figure>
      </div>
    </section>
  );
};

export default Home;
