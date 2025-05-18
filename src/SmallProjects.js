export default function SmallProject({ title, stack, links, content }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-6 sm:p-8 gap-8 md:gap-20 w-full">
      <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <img
          src={links[0]}
          alt=""
          className="w-full max-w-md object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
        <p className="font-bold text-2xl tracking-wide text-white font-serif mb-4">
          {title}
        </p>
        <p className="text-gray-400 text-base tracking-wide font-serif mb-6">
          {content}
        </p>
        <div className="flex justify-center md:justify-start flex-wrap gap-4 font-extrabold font-serif text-white mb-6">
          {stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="flex justify-center md:justify-start">
          <a
            href={links[2]}
            className="border bg-white text-black border-black font-bold rounded-2xl px-4 py-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 font-serif"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
