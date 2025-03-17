import React from "react";
const card = () => {
  return (
    <div className="meancontainer h-100% w-full bg-gray-500 flex flex-col justify-center items-center relative">
      <div className="my-work h-[40vh] w-full flex items-center justify-center ">
        <h1 className="text-gray-400 text-[150px] font-semibold  uppercase aboslute top-0 ">
          portfolio
        </h1>
      </div>
      <div className="  absolute top-40  ">
        <h1 className=" capitalize text-white text-4xl font-semibold underline decoration-green-500 underline-offset-10 ">
          my work
        </h1>
      </div>
      <div className="nav h-[10vh] w-full  flex items-center justify-center ">
        <ul className="flex gap-10 text-white capitalize text-xl  ">
          <li className="hover:text-green-500 cursor-pointer"> all</li>
          <li className="hover:text-green-500 cursor-pointer">design</li>
          <li className="hover:text-green-500 cursor-pointer">brand</li>
          <li className="hover:text-green-500 cursor-pointer"> photos</li>
        </ul>
      </div>
      <div className="container flex justify-center p-8 grid gap-y-2 gap-x-5 grid-cols-[20vw_20vw_20vw] grid-rows-[30vh_30vh_13vh]">
        <div className="box relative cursor-pointer group" id="box-1">
          <img
            src="/image/project-1.jpg"
            alt=""
            className="shadow-xl rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="text-center">
              <h1>Project Title</h1>
              <h2>Category</h2>
            </div>
          </div>
        </div>

        <div
          className="box row-span-3 relative group cursor-pointer"
          id="box-2"
        >
          <img
            src="/image/project-2.jpg"
            alt=""
            className="shadow-xl rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-600 rounded-2xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-600">
            <div className="text-center">
              <h1>Project Title</h1>
              <h2>Category</h2>
            </div>
          </div>
        </div>

        <div className="box relative group cursor-pointer" id="box-3">
          <img
            src="/image/project-3.jpg"
            alt=""
            className="shadow-xl rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-600 rounded-2xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-600">
            <div className="text-center">
              <h1>Project Title</h1>
              <h2>Category</h2>
            </div>
          </div>
        </div>

        <div
          className="box row-span-3 relative group cursor-pointer"
          id="box-4"
        >
          <img
            src="/image/project-4.jpg"
            alt=""
            className="shadow-xl rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-600 rounded-2xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-600">
            <div className="text-center">
              <h1>Project Title</h1>
              <h2>Category</h2>
            </div>
          </div>
        </div>

        <div className="box relative group cursor-pointer" id="box-5">
          <img
            src="/image/project-5.jpg"
            alt=""
            className="shadow-xl rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-600 rounded-2xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-600">
            <div className="text-center">
              <h1>Project Title</h1>
              <h2>Category</h2>
            </div>
          </div>
        </div>

        <div
          className="box row-span-2 relative group cursor-pointer"
          id="box-6"
        >
          <img
            src="/image/project-6.jpg"
            alt=""
            className="shadow-xl rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-600 rounded-2xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-600">
            <div className="text-center">
              <h1>Project Title</h1>
              <h2>Category</h2>
            </div>
          </div>
        </div>

        <div className="box relative group cursor-pointer" id="box-7">
          <img
            src="/image/project-7.jpg"
            alt=""
            className="shadow-xl rounded-2xl "
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-600 rounded-2xl"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-600">
            <div className="text-center">
              <h1>Project Title</h1>
              <h2>Category</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default card;
