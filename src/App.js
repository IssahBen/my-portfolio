import { useRef } from "react";

import Skills from "./Skills";
import FullStack from "./FullStack";
import MiniProjects from "./miniprojects";
export default function App() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col ">
      <div className="flex justify-between items-center px-10 py-10">
        {/* <h1 className="font-sans font-bold text-4xl text-marine_blue">
          Ben.dev
        </h1> */}
        <img src="/assets/push2.png" className="h-[120px] flip " alt="logo" />
        <HamburgerMenu />
        <NavBar />
      </div>
      <div
        id="#home"
        className="flex flex-col w-full md:flex-row md:justify-center  items-center mt-5  md:space-x-5"
      >
        <div className="">
          <img
            src="/assets/my1.png"
            alt=""
            className=" saturate-200  w-[250px] h-[250px] rounded-xl shadow-2xl shape brightness-100"
          />
        </div>
        <Intro />
      </div>
      <div
        id="about"
        className="flex flex-col w-full md:flex-row md:justify-center  items-center mt-16  md:space-x-5 bg-white"
      >
        <div className="w-full">
          <img
            src="/assets/ab.jpg"
            alt=""
            className=" about-pic w-full h-[400px]"
          />
        </div>
        <AboutMe />
      </div>

      <div className="bg-slate-900">
        <Skills />
        <FullStack />
        <MiniProjects />
        <Footer />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="md:w-1/3 flex flex-col w-full mt-5  px-5 ">
      <div className="flex w-full justify-center mb-2">
        <h1 className=" text-center font-mono font-extrabold text-3xl">
          FullStack Ruby on Rails and React Developer
        </h1>
      </div>
      <div className="flex justify-center mb-2">
        <p className="text-cool_gray tracking-wide text-center">
          Hi, I'm Benedict Issah.A Curious Fullstack Developer based in
          Toronto,Canada. 📍
        </p>
      </div>
      <div className="flex justify-center mt-5 gap-5">
        <img src="/assets/linkedin.png" alt="" className="h-[2rem] flip " />
        <a
          href="https://github.com/IssahBen"
          className="hover:-translate-y-2 hover:scale-100"
        >
          {" "}
          <img src="/assets/github.png" alt="" className="h-[2rem] flip " />
        </a>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex flex-col md:w-1/3 w-full mt-5 p-5 ">
      <div className="flex justify-start">
        <h2 className="text-pink-500 font-mono font-bold text-xl">About Me</h2>
      </div>
      <div className="flex font-extrabold text-xl justify-start  font-mono text-black">
        <h2>A Ruby on Rails and React Developer based in Toronto,Canada.📍</h2>
      </div>
      <div className="flex text-cool_gray mt-2 tracking-wide font-sans">
        <p>
          As a fullstack Developer.I posses an impressive arsenal of skills in
          HTML,CSS,Javascript,React,Tailwind,Ruby on Rails and Hotwire.I excel
          in designing and maintaining responsive websites that offer a smooth
          user experience.My expertise lies in crafting dynamic,engaging
          interfaces using hotwire turbo or react and also writing optimized
          code to improve website performance .I'm also a team player who
          thrives in collaborating with cross-functional teams to produce
          outstanding web applications.{" "}
        </p>
      </div>
    </div>
  );
}

function HamburgerMenu() {
  const hamburger = useRef(null);
  const mobileMenu = useRef(null);
  function HandleClick() {
    let isOpen = hamburger.current.classList.contains("open");
    if (isOpen) {
      hamburger.current.classList.remove("open");
      mobileMenu.current.classList.remove("flex");
      mobileMenu.current.classList.add("hidden");
    } else {
      hamburger.current.classList.add("open");
      mobileMenu.current.classList.add("flex");
      mobileMenu.current.classList.remove("hidden");
    }
  }
  return (
    <div class="md:hidden">
      <button
        id="menu-btn"
        type="button"
        ref={hamburger}
        className="  z-40 block hamburger md:hidden focus:outline-none "
        onClick={HandleClick}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <div
        id="menu"
        ref={mobileMenu}
        className="absolute top-14 right-0 hidden flex-col z-4  w-1/2 h-72 py-1 pt-10 pl-24 space-y-2 text-lg text-slate-900 uppercase bg-white z-10"
      >
        <a
          href="#home"
          className="hover:text-red-500 font-mono btn tracking-widest"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-red-500 font-mono btn tracking-widest"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-red-500 font-mono btn tracking-widest"
        >
          FullStack Projects
        </a>
        <a
          href="#contacts"
          className="hover:text-red-500 font-mono  btn tracking-widest"
        >
          Contact
        </a>
        <a
          href="#miniprojects"
          className="hover:text-red-500 font-mono  btn tracking-widest"
        >
          Mini Projects
        </a>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="hidden h-10 font-serif font-bold md:flex md:space-x-8">
      <div className="group hover:btn">
        <a href="#home" className="hover:text-red-500 ">
          Home
        </a>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
      </div>
      <div className="group hover:btn">
        <a href="#about" className="hover:text-red-500 ">
          About
        </a>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
      </div>
      <div className="group hover:btn">
        <a href="#projects" className="hover:text-red-500 ">
          FullStack Projects
        </a>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50 "></div>
      </div>
      <div className="group hover:btn">
        <a href="#contact" className="hover:text-red-500 ">
          Contact
        </a>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
      </div>
      <div className="group hover:btn">
        <a href="#contact" className="hover:text-red-500 ">
          Mini Projects
        </a>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <section id="contacts" className="font-serif">
        <p className="section__text__p1 text-white">Get in touch</p>
        <h1 className="title text-white">Contact</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src="./assets/email.png" className="email-icon" alt="email" />
            <p>
              {" "}
              <a href="mailto:benedictissah@gmail.com">
                Benedictissah@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="./assets/linkedin.png"
              className="icon contact-icon"
              alt="linkedin"
            />
            <p>
              <a href="https://www.linkedin.com">Linkedin</a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container font-serif text-white">
            <ul className="nav-links">
              <li className="hover:text-red-500 btn">
                <a href="#about ">About</a>
              </li>
              <li className="hover:text-red-500 btn">
                <a href="#skills">Skills</a>
              </li>
              <li className="hover:text-red-500 btn">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-red-500 btn">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p className="text-white">
          Copyright &#169; 2024 Ohiahene.All Rights reserved.
        </p>
      </footer>
    </>
  );
}
