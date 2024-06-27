import React from "react";
import Image from "../assets/Dogs.webp";
function About() {
  return (
    <div className="flex flex-row gap-48 w-full h-auto items-center justify-center bg-indigo-50 p-10">
      <div>
        <img src={Image} className=" h-96 w-auto rounded-lg " />
      </div>
      <div className=" w-96 flex flex-col  items-start  justify-start gap-6">
        <p className="uppercase text-indigo-700 font-extrabold">welcome to</p>
        <h3 className=" text-2xl font-extrabold">ANIMAL RESCUE AND CARE</h3>
        <p>
          With our approach to Web It’s a common thinking of people that animals
          and birds don’t have emotions. It is not true. They too have emotions,
          feel pain and hunger.
        </p>
        <p>
          Animals don’t know how to cure themselves when they are sick or how to
          get food when they are starved. Only we can help them. There are some
          alarming facts that we should know.
        </p>
        <p>
          It is sad that people run after breed dogs and our Indian dogs suffer.
          We should care for our Indian dogs & cats because they need us and
          depend on us. We should arrange food, water & medicine for them.
        </p>
        <button className=" bg-indigo-700 p-4 rounded-2xl text-white font-extrabold shadow-2xl shadow-indigo-400 hover:bg-indigo-900 ">
          Join Us Now
        </button>
      </div>
    </div>
  );
}

export default About;
