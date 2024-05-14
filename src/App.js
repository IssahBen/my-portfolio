import { useRef } from "react";

export default function App() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col ">
      <div className="flex justify-between items-center px-10 py-10">
        <h1 className="font-sans font-bold text-4xl text-marine_blue">
          Ben.dev
        </h1>
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
        className="flex flex-col w-full md:flex-row md:justify-center  items-center mt-16  md:space-x-5"
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

      <Skills />
      <div className="flex flex-col items-center mb-10">
        <div className="flex flex-col  w-full pl-8 items-start">
          <h3 className="font-bold text-xl font-serif text-blue-800">
            Portfolio
          </h3>
          <p className="font-extrabold text-2xl">
            Each project is a unique place of development🌱
          </p>
        </div>
        <div id="projects" className="grid grid-cols-1 ">
          <Project
            title={"WeVote App"}
            stack={["Ruby On Rails 7", "Bootstrap5"]}
            links={["/assets/vote.png", "", ""]}
            content={[]}
          />
          <Project
            title={"TheSoundz Store"}
            stack={["Ruby On Rails 7", "Bootstrap5"]}
            links={["/assets/soundz3.jpeg", "", ""]}
            content={[]}
          />
          <Project
            title={"Holla Social Media App"}
            stack={["Ruby On Rails 7", "Tailwind"]}
            links={[]}
            content={[]}
          />
          <Project
            title={"Product Funding Interactive Website "}
            stack={["Vanilla Js", "Tailwind Css"]}
            links={["/assets/product.png", "", "https://sikasem.netlify.app/"]}
            content={[]}
          />
          <Project
            title={"Entertainment Web App "}
            stack={["React Js", "Tailwind Css"]}
            links={["/assets/movies.jpeg", "", ""]}
            content={[]}
          />
          <Project
            title={"DevJobs Web App"}
            stack={["React Js", "Tailwind Css"]}
            links={["/assets/jobs.jpeg", "", ""]}
            content={[]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
function Project({ title, stack, links, content }) {
  return (
    <div className="flex md:flex-row flex-col p-8 md:space-x-5 ">
      <img
        src={links[0]}
        alt=""
        className="w-full md:w-2/3 h-[450px] rounded-md "
      />
      <div className="flex flex-col md:w-1/3">
        <div className="flex justify-center mt-5">
          <p className="font-bold text-xl tracking-wide text-marine_blue font-serif">
            {title}
          </p>
        </div>
        <div className="flex justify-center">
          <p className=" text-thin tracking-wide text-cool_gray text-center font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga amet
            nemo facilis neque, assumenda error, corporis quibusdam quo unde non
            dolorem voluptate quod! Quaerat sequi minima corporis nostrum esse!
          </p>
        </div>
        <div className="flex justify-center space-x-5 font-extrabold  font-serif mt-8">
          <span>{stack[0]}</span>
          <span>{stack[1]}</span>
        </div>
        <div className="flex justify-center mt-2 space-x-5 mt-8">
          <a
            href={links[1]}
            className="flex justify-center items-center border border-black rounded-2xl p-2 font-bold  hover:bg-pink-500  hover:border-white font-serif btn "
          >
            <span className="">GitHub</span>
            <img src="/assets/github.png" alt="" className="h-[1rem]" />
          </a>
          <a
            href={links[2]}
            className="flex justify-center items-center border border-black font-bold rounded-2xl p-2  hover:bg-pink-500 hover:border-white font-serif btn  "
          >
            <span className="">live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
function Intro() {
  return (
    <div className="md:w-1/3 flex flex-col w-full mt-5  px-5">
      <div className="flex w-full justify-center mb-2">
        <h1 className=" text-center font-mono font-extrabold text-3xl">
          FullStack Ruby on Rails and React Developer
        </h1>
      </div>
      <div className="flex justify-center mb-2">
        <p className="text-cool_gray tracking-wide text-center">
          Hi, I'm Benedict Issah.A passionate Fullstack Developer based in
          Canada,Winnipeg. 📍
        </p>
      </div>
      <div className="flex justify-center gap-5">
        <img src="/assets/linkedin.png" alt="" className="h-[2rem]" />
        <img src="/assets/github.png" alt="" className="h-[2rem]" />
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex flex-col md:w-1/3 w-full mt-5 p-5">
      <div className="flex justify-start">
        <h2 className="text-pink-500 font-mono font-bold text-xl">About Me</h2>
      </div>
      <div className="flex font-extrabold text-xl justify-start  font-mono text-black">
        <h2>
          A dedicated Ruby on Rails and React Developer based in
          Winnipeg,Canada.📍
        </h2>
      </div>
      <div className="flex text-cool_gray mt-2 tracking-widest font-serif">
        <p>
          As a Junior fullstack Developer.I posses an impressive arsenal of
          skills in HTML,CSS,Javascript,React,Tailwind,Ruby on Rails and
          Hotwire.I excel in designing and maintaining responsive websites that
          offer a smooth user experience.My expertise lies in crafting
          dynamic,engaging interfaces using hotwire turbo or react and also
          writing optimized code to improve website performance .I'm also a team
          player who thrives in collaborating with cross-functional teams to
          produce outstanding web applications.{" "}
        </p>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills" className="flex justify-center mt-5 p-5">
      <div className="grid gap-5 grid-cols-3">
        <div className="flex items-center text-xl font-bold font-mono">
          <img src="/assets/checkmark.png" alt="" className="h-[2rem]" />
          <span>HTML</span>
        </div>
        <div className="flex items-center text-xl font-bold font-mono">
          <img src="/assets/checkmark.png" alt="" className="h-[2rem]" />
          <span>CSS</span>
        </div>
        <div className="flex items-center text-xl font-bold font-mono">
          <img src="/assets/checkmark.png" alt="" className="h-[2rem]" />
          <span>Vanilla Javascript</span>
        </div>
        <div className="flex items-center text-xl font-bold font-mono">
          <img src="/assets/checkmark.png" alt="" className="h-[2rem]" />
          <span>Tailwind</span>
        </div>
        <div className="flex items-center text-xl font-bold font-mono">
          <img src="/assets/checkmark.png" alt="" className="h-[2rem]" />
          <span>React</span>
        </div>
        <div className="flex items-center text-xl font-bold font-mono">
          <img src="/assets/checkmark.png" alt="" className="h-[2rem]" />
          <span>Ruby on Rails</span>
        </div>
        <div className="flex items-center text-xl font-bold font-mono">
          <img src="/assets/checkmark.png" alt="" className="h-[2rem]" />
          <span>Ruby</span>
        </div>
        <div className="flex items-center text-xl font-bold font-mono">
          <img src="/assets/checkmark.png" alt="" className="h-[2rem]" />
          <span>Hotwire</span>
        </div>
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
        className="  z-40 block hamburger md:hidden focus:outline-none"
        onClick={HandleClick}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <div
        id="menu"
        ref={mobileMenu}
        className="absolute top-0 right-0 hidden flex-col z-4  w-1/2 h-72 py-1 pt-10 pl-24 space-y-2 text-lg text-marine_blue uppercase bg-white"
      >
        <a
          href="#home"
          className="hover:text-pink-500 font-mono btn tracking-widest"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-pink-500 font-mono btn tracking-widest"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-pink-500 font-mono btn tracking-widest"
        >
          Projects
        </a>
        <a
          href="#contacts"
          classNam="hover:text-pink-500 font-mono  btn tracking-widest"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="hidden h-10 font-serif font-bold md:flex md:space-x-8">
      <div className="group hover:btn">
        <a href="#home" className="hover:text-pink-500 ">
          Home
        </a>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
      </div>
      <div className="group hover:btn">
        <a href="#about" className="hover:text-pink-500 ">
          About
        </a>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
      </div>
      <div className="group hover:btn">
        <a href="#projects" className="hover:text-pink-500 ">
          Projects
        </a>
        <div className="mx-2 group-hover:border-b group-hover:border-blue-50 "></div>
      </div>
      <div className="group hover:btn">
        <a href="#contact" className="hover:text-pink-500 ">
          Contact
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
        <p className="section__text__p1">Get in touch</p>
        <h1 className="title">Contact</h1>
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
          <div className="nav-links-container font-serif">
            <ul className="nav-links">
              <li className="hover:text-pink-500 btn">
                <a href="#about ">About</a>
              </li>
              <li className="hover:text-pink-500 btn">
                <a href="#skills">Skills</a>
              </li>
              <li className="hover:text-pink-500 btn">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-pink-500 btn">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2024 Menyinda.All Rights reserved.</p>
      </footer>
    </>
  );
}
