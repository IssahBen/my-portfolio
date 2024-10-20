export default function SmallProject({ title, stack, links, content }) {
  return (
    <div className="flex md:flex-row flex-col p-8 md:space-x-5 ">
      <div className="flex justify-center items-center">
        {" "}
        <img src={links[0]} alt="" className="  bg-cover rounded-md " />
      </div>

      <div className="flex flex-col md:w-1/3">
        <div className="flex justify-center mt-5">
          <p className="font-bold text-xl tracking-wide text-white font-serif">
            {title}
          </p>
        </div>
        <div className="flex justify-center">
          <p className=" text-thin tracking-wide text-cool_gray text-center font-serif">
            {content}
          </p>
        </div>
        <div className="flex justify-center space-x-5 font-extrabold  font-serif mt-8 text-white ">
          {stack.map((stack) => (
            <span key={stack}>{stack}</span>
          ))}
        </div>
        <div className="flex  w-full justify-center mt-8 space-x-5 ">
          <a
            href={links[2]}
            className="flex justify-center items-center border bg-white border-black font-bold rounded-2xl p-2  hover:bg-red-500 hover:border-red-500 font-serif btn  "
          >
            <span className="">live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
