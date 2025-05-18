export default function Project({ title, stack, links, content }) {
  return (
    <section className="bg-neutral-900 py-12 px-4" id="projects">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="text-white flex-1 space-y-4 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-400">
            {title}
          </h2>

          <p className="text-lg text-gray-300">
            Built with{" "}
            {stack.map((tech, index) => (
              <span
                key={tech}
                className={`${
                  index % 2 === 0 ? "text-blue-400" : "text-red-400"
                }`}
              >
                {tech}
                {index < stack.length - 1 && ", "}
              </span>
            ))}
          </p>

          <p className="text-gray-400">{content}</p>

          <div className="flex space-x-4 pt-4">
            <a
              href={links[1]}
              className="inline-flex items-center border bg-white border-black rounded-xl px-4 py-2 font-bold hover:bg-red-500 hover:border-red-500 transition"
            >
              <span className="mr-2 text-black">GitHub</span>
              <img src="/assets/github.png" alt="GitHub" className="h-4" />
            </a>

            <a
              href={links[2]}
              className="inline-flex items-center border bg-white border-black font-bold rounded-xl px-4 py-2 hover:bg-red-500 hover:border-red-500 transition"
            >
              <span className="text-black">Live Demo</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full max-w-xl shadow-xl rounded-xl overflow-hidden border border-gray-700">
          <img
            src={links[0]}
            alt={`${title} preview`}
            className="w-full h-[650px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
