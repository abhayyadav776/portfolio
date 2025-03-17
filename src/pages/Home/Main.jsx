import React from "react";

const Main = () => {
  return (
    <div className="h-[40vh] w-[40vw]  absolute top-60 left-135 flex flex-col items-center gap-9  ">
      <h1 className="text-white text-3xl  "> Welcome</h1>
      <div className="typewriter text-white text-4xl font-bold p-2">
        <h1>The more you give, the more you receive</h1>
      </div>
      <h1 className="text-white text-2xl p-3">
        based in Los Angeles, California.
      </h1>
      <div className="btn rounded-4xl h-[6vh] w-[8vw] border-4 border-green-500  text-green-500 text-xl flex justify-center items-center hover:bg-green-500 hover:text-white duration-800 cursor-pointer">
        Hire Me
      </div>
    </div>
  );
};

export default Main;
