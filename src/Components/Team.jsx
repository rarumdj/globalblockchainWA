import React from "react";
import imgR from "../assets/img-rural.jpg";

function Team() {
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      <div className="flex flex-col rounded-sm overflow-hidden">
        <div className="flex flex-initial w-full h-full">
          <img src={imgR} alt="" />
        </div>
        <div className="px-6 py-3 footer__bg h-20 min-w-max max-w-screen flex-none">
          <div className="flex flex-col justify-between">
            <h1 className="gradient__text text-sm font-bold lg:text-lg">
              David Johnson
            </h1>
            <p className="text-blue-200 text-sm font-bold">CEO</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-sm overflow-hidden">
        <div className="flex flex-initial w-full h-full">
          <img src={imgR} alt="" />
        </div>
        <div className="px-6 py-3 footer__bg h-20 min-w-max max-w-screen flex-none">
          <div className="flex flex-col justify-between">
            <h1 className="gradient__text text-sm font-bold lg:text-lg">
              David Johnson
            </h1>
            <p className="text-blue-200 text-sm font-bold">CEO</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-sm overflow-hidden">
        <div className="flex flex-initial w-full h-full">
          <img src={imgR} alt="" />
        </div>
        <div className="px-6 py-3 footer__bg h-20 min-w-max max-w-screen flex-none">
          <div className="flex flex-col justify-between">
            <h1 className="gradient__text text-sm font-bold lg:text-lg">
              David Johnson
            </h1>
            <p className="text-blue-200 text-sm font-bold">CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
