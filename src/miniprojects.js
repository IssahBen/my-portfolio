import Project from "./Project";
export default function MiniProjects() {
  return (
    <div id="miniprojects" className="flex flex-col items-center mb-10">
      <div className="flex flex-col  w-full pl-8 items-start">
        <h3 className="font-bold text-xl font-serif text-blue-800">
          Mini Projects
        </h3>
        <p className="font-extrabold text-2xl">
          Mini projects always give the best skill check🌱
        </p>
      </div>
      <div id="projects" className="grid grid-cols-1 ">
        <Project
          title={"Subscription Forms"}
          stack={["React Js", "Tailwind Css"]}
          links={[
            "./assets/subscription.png",
            "",
            "https://partagery.netlify.app/",
          ]}
          content={""}
        />
        <Project
          title={"Bill Splitter"}
          stack={["React Js", "Tailwind Css"]}
          links={["./assets/split.png", "", ""]}
          content={""}
        />
        <Project
          title={"Fylo Landing Page"}
          stack={["React Js", "Tailwind Css"]}
          links={[
            "./assets/fylo.png",
            "",
            "https://splendid-brigadeiros-26a017.netlify.app/",
          ]}
          content={""}
        />
        <Project
          title={"Remote Job Landing Page "}
          stack={["React Js", "Tailwind Css"]}
          links={["./assets/Remote.png", "", "https://sikasem.netlify.app/"]}
          content={""}
        />
        <Project
          title={"Bookmark App Landing Page"}
          stack={["React Js", "Tailwind Css"]}
          links={[
            "./assets/bookmark.png",
            "",
            "https://tranquil-dusk-8c1c3b.netlify.app/",
          ]}
          content={""}
        />
        <Project
          title={"SunnySide landing Page"}
          stack={["React Js", "Tailwind Css"]}
          links={[
            "./assets/sunny.png",
            "",
            "https://magenta-speculoos-2b573f.netlify.app/",
          ]}
          content={""}
        />
      </div>
    </div>
  );
}
