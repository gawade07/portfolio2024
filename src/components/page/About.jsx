import React from "react";
import { FaLink } from "react-icons/fa";

const About = () => {
  return (
    <section className="about">
      <h1 className="headline">Ketan Gawade | <span>Fr</span>ont-End Developer</h1>
      <div className="aboutContent grid2">
      <figure>
        <img src="/pic.jpg" alt="" />
      </figure>

      <div className="aboutMe">
      <h2 className="Title">ABOUT ME</h2>
       
        <p >
          Hello! I’m <span>Ketan Gawade</span>, a passionate front-end developer based in
          Maharashtra, India. At 28, I am eager to secure a position with a
          reputable organization where I can utilize my training and
          interpersonal skills to contribute to the company’s success while
          expanding my own knowledge.
        </p>
        <div className="skill">
          <h3>Skill</h3>
          <p><span>Languages:</span> HTML, CSS, JavaScript</p>
          <p><span>Frameworks : </span>  React, Vue.js</p>
          <p><span>Tools : </span>  VS Code</p>
          <p><span>Languages : </span>  Marathi, Hindi, English</p>
        </div>
        <div className="Hobbies">
          <h3>Hobbies</h3>
          <p><span>Learning : </span>  New Things Coding</p>
          <p><span>Running : </span> </p>
          <p><span>Playing : </span>  Cricket</p>
          <p><span>Exercising : </span> </p>
          <p><span>Photography : </span> </p>
        </div>

        <a href="/Resume2024.pdf" target="_balnk" className="linkResume" style={{marginTop:'2rem'}}>
            <FaLink /> resume Download
          </a>
      </div>
      </div>
    </section>
  );
};

export default About;
