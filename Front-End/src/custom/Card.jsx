import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

function Card() {
  return (
    <div className="flex flex-row gap-48 w-full h-auto items-center justify-center bg-indigo-50 p-10">
      <div className="flex flex-col gap-10 w-96">
        <p className=" text-indigo-600 font-extrabold ">Help Us</p>
        <div className=" font-extrabold text-2xl">
          <h1>Help Us We Are Animal Rescue And Care</h1>
        </div>
        <p>
          We will try to give a secure place or get adopted as many strays as we
          can who are blind, paralyzed, or old. Also, those who can’t survive on
          road due to some permanent health issues.
        </p>
        <p>
          It’s a common thinking of people that animals and birds don’t have
          emotions. It is not true. They too have emotions, feel pain and
          hunger. We are an animal activist, save them from cruelty.
        </p>
        <button className=" rounded-xl p-3 bg-transparent border-indigo-500 text-indigo-500 border-solid border-2  w-40 font-bold">
          Learn More
        </button>
      </div>
      <div className="flex flex-col flex-wrap gap-10 w-100">
        <div className="flex gap-10">
          <div
            className="hover:-translate-y-4 p-6 rounded-lg shadow-lg bg-white flex gap-3 items-center justify-center flex-col transition-transform duration-300"
            style={{ width: "300px", height: "250px" }}
          >
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              size="2xl"
              className=" text-emerald-500 bg-emerald-100 p-3 rounded-full"
            />
            <h4 className="text-emerald-600 uppercase font-extrabold">
              Become a volunteer
            </h4>
            <p className="text-slate-500">
              Many people believe that animals and birds don’t have emotions. It
              is not true.
            </p>
            <p className="text-emerald-600">Join us Now</p>
          </div>

          <div
            className="hover:-translate-y-4 p-6 rounded-lg shadow-lg bg-white flex gap-3 items-center justify-center flex-col transition-transform duration-300"
            style={{ width: "300px", height: "250px" }}
          >
            <FontAwesomeIcon
              icon={faPaw}
              size="2xl"
              className=" text-yellow-500 bg-yellow-100 p-3 rounded-full"
            />
            <h4 className="text-yellow-600 uppercase font-extrabold">
              Dog Adoption
            </h4>
            <p className="text-slate-500">
              It’s a common thing of people that animals and birds don’t have
              emotions.
            </p>
            <p className="text-yellow-600">Know More</p>
          </div>
        </div>
        <div className="flex gap-10">
          <div
            className="hover:-translate-y-4 p-6 rounded-lg shadow-lg bg-white flex gap-3 items-center justify-center flex-col transition-transform duration-300"
            style={{ width: "300px", height: "250px" }}
          >
            <FontAwesomeIcon
              icon={faPhone}
              size="2xl"
              className=" text-red-500 bg-red-100 p-3 rounded-full"
            />
            <h4 className="text-red-600 uppercase font-extrabold">
              CALL +91 9920722633
            </h4>
            <p className="text-slate-500">
              To get street animals adopted or drop them back in their
              surroundings.
            </p>
            <p className="text-red-600">Contact Us</p>
          </div>
          <div
            className="hover:-translate-y-4 p-6 rounded-lg shadow-lg bg-white flex gap-3 items-center justify-center flex-col transition-transform duration-300"
            style={{ width: "300px", height: "250px" }}
          >
            <FontAwesomeIcon
              icon={faHandHoldingDollar}
              size="2xl"
              className=" text-blue-500 bg-blue-100 p-3 rounded-full"
            />
            <h4 className="text-blue-600 uppercase font-extrabold">
              GIVE DONATION
            </h4>
            <p className="text-slate-500">
              We have many like-minded friends who help in this cause.
            </p>
            <p className="text-blue-600">Donate Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
