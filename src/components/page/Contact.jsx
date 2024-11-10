import React from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowRightLong, FaLink } from "react-icons/fa6";
import { FcDownload } from "react-icons/fc";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <section className="home">
      <div className="container grid2">
        <figure>
          {/* <FaReact  className="faReact"/>
        <IoLogoJavascript className="faReact" />
        <FaHtml5 className="faReact" />
        <FaCss3Alt className="faReact" /> */}
          {/* <p className="pPara">
            Secure a position as a Front-end Developer where I can utilize my
            skills in HTML, CSS, JavaScript and React js to contribute to the
            growth and success of a dynamic company.
          </p> */}
          <img src="/picssd.png" alt="" />
        </figure>
        <div className="textContent">
          <div className="text">
            <h2 className="Title">Contact ME</h2>
            <p className="para">
              I’d love to hear from you! Feel free to reach out for
              collaborations or inquiries.
            </p>

            <p>
              Phone: +91 7498331808 <br />
              Email: ketangawade111@gmail.com
            </p>
            <div className="btes">
              <a href="/Resume2024.pdf" target="_blank">
                <button>
                  Download Resume
                  <PiDownloadSimpleBold />
                </button>
              </a>
              <NavLink to={"/"}>
                <button>
                  Back to Home
                  <FaHome />
                </button>
              </NavLink>
            </div>
          </div>
          <a href="/Resume2024.pdf" target="_balnk" className="linkResume">
            <FaLink /> resume Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
