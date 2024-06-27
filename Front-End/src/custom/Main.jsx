import React from "react";
import Image from "../assets/dog-banner5.webp";

function Main() {
  return (
    <div className="m-10 flex flex-row w-full items-center gap-48 justify-center">
      <div className=" flex flex-col gap-6 justify-center items-start w-96">
        <button className="p-3 bg-purple-600 text-white rounded-xl w-28 font-bold">
          Welcome
        </button>
        <div className=" font-extrabold text-6xl">
          <h1>Animal Rescue and Care</h1>
        </div>
        <p className=" text-slate-800">
          Keep helping and rescuing animals. You may lose some of your time but
          you will certainly find your soul, your inner happiness, and peace.
        </p>
        <div className="flex gap-5">
          <button className="p-3  bg-transparent border-purple-600  border-solid border-2 rounded-xl text-purple-600 w-auto font-bold">
            Read More
          </button>
          <a href="#report">
            <button className="p-3  bg-purple-600   border-solid border-2 border-white rounded-xl text-white w-auto font-bold">
              Report A Incident
            </button>
          </a>
        </div>
      </div>
      <div className=" mx-9">
        <img src={Image} />
      </div>
    </div>
  );
}

export default Main;
