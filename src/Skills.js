export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind",
    "React",
    "Ruby",
    "Hotwire",
    "Ruby on Rails",
    "Vanilla Js",
    "Postgres SQl",
    "React native "
  ];
  return (
    <div id="skills" className="flex justify-center mt-5 p-5">
      <div className="grid gap-8 grid-cols-3">
        {skills.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </div>
    </div>
  );
}

function Skill({ children }) {
  return (
    <div className="flex items-center text-sm font-bold font-mono pulse text-white ">
      <img src="/assets/checkmark.png" alt="" className="h-[2rem]" />
      <span>{children}</span>
    </div>
  );
}
