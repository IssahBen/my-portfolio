import Project from "./Project";
export default function FullStack() {
  return (
    <div id="projects" className="flex flex-col items-center mb-10">
      <div className="flex flex-col  w-full pl-8 items-start">
        <h3 className="font-bold text-xl font-serif text-blue-800">
          Full Stack Projects
        </h3>
        <p className="font-extrabold text-2xl">
          Each project is a unique place of development🌱
        </p>
      </div>
      <div id="projects" className="grid grid-cols-1 ">
        <Project
          title={"WeVote App"}
          stack={["Ruby On Rails 7", "Bootstrap5"]}
          links={["./assets/Wevote.png", "", ""]}
          content={""}
        />
        <Project
          title={"TheSoundz Store"}
          stack={["Ruby On Rails 7", "Bootstrap5"]}
          links={["./assets/soundz3.jpeg", "", ""]}
          content={""}
        />
        <Project
          title={"Instagram Clone  App"}
          stack={["Ruby On Rails 7", "Tailwind Css"]}
          links={["./assets/insta.png"]}
          content={""}
        />

        <Project
          title={"CandyCrusher  "}
          stack={["React Js", "Tailwind Css", "Ruby on Rails"]}
          links={[
            "./assets/candyapp.png",
            "https://github.com/IssahBen/candy-crush-react",
            "https://candycrusher.netlify.app/",
          ]}
          content={""}
        />
        <Project
          title={"Cinema"}
          stack={["Ruby on Rails", "Tailwind Css"]}
          links={["./assets/cinema.png", "", ""]}
          content={""}
        />
      </div>
    </div>
  );
}
