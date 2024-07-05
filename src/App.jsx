import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mainnavbar">
        <div className="firstnavbar">
          <a href="">Ethical_khoriya</a>
        </div>
        <div className="secondnavbar">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contect</a>
          <a href="">Blog</a>
          <a href="">Services</a>
          <a href="">Work</a>
        </div>
      </div>
      <div className="home-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2FPVym1v0qEAeOtKWa9z2TuO0X3TWOPXVw&s"
          width={"100%"}
          alt=""
          className="background-image"
        />
        <div className="home-text">
          <h1>I am Naitik Khoriya</h1>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div className="mainabout">
        <div className="submainabout">
          <div className="firstabout">
            <div className="imageabout">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1pXMXWoZJ0_TAk4r7SFWGAqsbwHznamS1OQ&s"
                  alt=""
                />
                <div className="skills">
                  <h1>SKILLS</h1>
                  <br />
                  <span>HTML 85%</span>
                  <div className="range1"></div>
                  <span>CSS 70%</span>
                  <div className="range2"></div>
                  <span>JAVASCRIPT 40%</span>
                  <div className="range3"></div>
                  <span>REACT 50%</span>
                  <div className="range4"></div>
                  <span>JAVA 70%</span>
                  <div className="range5"></div>
                  <span>PYTHON 70%</span>
                  <div className="range6"></div>
                </div>
              </div>
            </div>
            <div className="skillsabout">
              <span className="brtag">Name - </span>
              <span>Ethical khoriya</span>
              <br />
              <span className="brtag">Email - </span>
              <span>ethicalkhoriya@gmail.com</span>
              <br />
              <span className="brtag">Profile - </span>
              <span>Full Stack Developer</span>
              <br />
              <span className="brtag">Phone - </span>
              <span>7877816484</span>
            </div>
          </div>
          <div className="secondabout">
            <span>ABOUT ME</span>
            <p>
              Hello! I'm Naitik khoriya, a passionate Computer Science
              Engineering student with a keen interest in web development.{" "}
              <br />
              Currently, I'm pursuing a comprehensive Full Stack Web Development
              training program to enhance my skills and deepen my understanding
              of the ever-evolving tech landscape.
            </p>
            <br />
            <p>
              My journey in computer science has equipped me with a strong
              foundation in programming, problem-solving, and software
              development principles. <br /> Through my coursework, I've gained
              proficiency in various programming languages and technologies, and
              my current focus on full stack development allows me to bridge the
              gap between front-end and back-end technologies.
            </p>
            <br />
            <p>
              <h1>Top Skills ---</h1>
              <br />
              Front-End-Development | SQL l NodeJs | ExpressJs | MongoDB | C/C++
              | Java | Figma | Python | Git | Github | Kali Linux | Cyber
              Security Beginner | DSA + JAVA
            </p>
            <br />
          </div>
        </div>
      </div>
      {/* <p className="textonimg" style={{ position: "absolute", top: "100px" }}>
        <h1> I AM NAITIK KHORIYA </h1>
        <br /> <h2> Web Developer </h2>
      </p> */}
    </>
  );
}

export default App;
