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
          stack={["Ruby On Rails 7", "React Js", "Tailwind Css"]}
          links={["./assets/Wevote.png", "", ""]}
          content={
            "Wevote  a voting app designed to streamline the process for elections for organizational decisions.The Application was built React on the frontend and Ruby on Rails on the Backend."
          }
        />
        <Project
          title={"TheSoundz Store"}
          stack={["Ruby On Rails 7", "React Js", "Tailwind Css"]}
          links={["./assets/soundz3.jpeg", "", ""]}
          content={
            "A simple Niche Store built with React on the Frontend , Rails on the backend and stripe integration.The goal of this project was to build a simple online store comprised of reusable components that can easily  be altered to create any kind of niche store."
          }
        />
        <Project
          title={"Social Media App(Will rebuild)"}
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
          content={
            "CandyCrusher a clone of the famous candy crush mobile Game.This Application was built with React on the Frontend and Ruby on Rails on the Backend.My interest to build this game from the challenging nature of the game logic and my desire to master the basics of React hooks and reusable components ."
          }
        />
        <Project
          title={"Cinema"}
          stack={["Ruby on Rails"]}
          links={["./assets/cinema.png", "", ""]}
          content={
            "This FullStack Application was built A month After  learning Ruby on Rails.This  application was designed and built to test my understanding of Rails.Cinema a movie streaming and management  application.With the help of the Omdb Movies database API users can search for latest  movies and with a feature called a bucket users can organize a list of their favorite or must watch movies."
          }
        />
      </div>
    </div>
  );
}
