import Project from "./Project";

export default function FullStack() {
  return (
    <section
      id="projects"
      className="bg-neutral-900 py-16 px-6 w-full"
      aria-label="Full Stack Projects"
    >
      <header className="mb-12 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-serif font-bold text-blue-500 mb-3">
          Full Stack Projects
        </h3>
        <p className="text-xl font-extrabold text-white tracking-wide max-w-xl mx-auto">
          Each project is a unique place of development
        </p>
      </header>

      <div className="grid grid-cols-1  gap-10 max-w-5xl mx-auto">
        <Project
          title={"WeVote App"}
          stack={["Ruby On Rails 7", "React Js", "Tailwind Css"]}
          links={[
            "./assets/wevote1.png",
            "https://github.com/IssahBen/voting-app-react",
            "https://wevotepush.netlify.app",
          ]}
          content={
            "Wevote is a voting app designed to streamline the process for elections for organizational decisions. The application was built with React on the frontend and Ruby on Rails on the backend."
          }
        />
        <Project
          title={"TheSoundz Store"}
          stack={["React Js", "Tailwind Css"]}
          links={[
            "./assets/soundz3.png",
            "https://github.com/IssahBen/audiostore",
            "https://resplendent-kheer-c90002.netlify.app",
          ]}
          content={
            "A simple niche store built with React on the frontend. The goal was to build reusable components that can be easily altered to create any kind of niche store."
          }
        />
        <Project
          title={"CandyCrusher"}
          stack={["React Js", "Tailwind Css", "Rails 7"]}
          links={[
            "./assets/candy1.png",
            "https://github.com/IssahBen/candy-crush-react",
            "https://candycrusher.netlify.app/",
          ]}
          content={
            "CandyCrusher is a clone of the famous Candy Crush mobile game. Built with React frontend and Rails backend, it was a fun challenge focused on mastering React hooks and reusable components."
          }
        />
        <Project
          title={"Designo"}
          stack={["React Js", "Tailwind Css", "Rails 7"]}
          links={[
            "./assets/designo.png",
            "https://github.com/IssahBen/designo",
            "https://aquamarine-crisp-989419.netlify.app/",
          ]}
          content={
            "Designo is a multipage company website built with React frontend and Rails backend. It features email contact forms powered by ActionMailer and Gmail."
          }
        />
      </div>
    </section>
  );
}
