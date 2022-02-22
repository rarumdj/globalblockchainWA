import React from "react";
import { CgCommunity } from "react-icons/cg";
import { AiOutlineAlert } from "react-icons/ai";
import { MdOutlineChangeCircle } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import objective from "../../assets/objective.png";

function Objective() {
  return (
    <div className="pb-16 px-8 md:pb-24 md:px-24">
      <div className="footer__bg p-6 lg:p-12 w-full h-full">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <div className="mb-12">
              <h1 className="gradient__text text-2xl sm:text-3xl font-bold">
                GBWA Objectives
              </h1>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex">
                <div className="basis-1/6 mr-4">
                  <div className="flex h-10 w-10 rounded-md bg-slate-300">
                    <AiOutlineAlert size="30" color={"#000"} className="m-auto" />
                  </div>
                </div>
                <div className="basis-3/4">
                  <p className="text-blue-200 text-sm md:text-base">
                    Form a global community of dedicated and passionate
                    Blockchain teachers and leaders.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <div className="basis-1/6 mr-4">
                  <div className="flex h-10 w-10 rounded-md bg-slate-300">
                    <CgCommunity size="30" color={"#000"} className="m-auto" />
                  </div>
                </div>
                <div className="basis-3/4">
                  <p className="text-blue-200 text-sm md:text-base">
                    Form a global community of dedicated and passionate
                    Blockchain teachers and leaders.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <div className="basis-1/6 mr-4">
                  <div className="flex h-10 w-10 rounded-md bg-slate-300">
                    <MdOutlineChangeCircle size="30" color={"#000"} className="m-auto" />
                  </div>
                </div>
                <div className="basis-3/4">
                  <p className="text-blue-200 text-sm md:text-base">
                    Form a global community of dedicated and passionate
                    Blockchain teachers and leaders.
                  </p>
                </div>
              </div>
              <div className="flex ">
                <div className="basis-1/6 mr-4">
                  <div className="flex h-10 w-10 rounded-md bg-slate-300">
                    <BsGraphUp size="28" color={"#000"} className="m-auto" />
                  </div>
                </div>
                <div className="basis-3/4">
                  <p className="text-blue-200 text-sm md:text-base">
                    Form a global community of dedicated and passionate
                    Blockchain teachers and leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:-right-20 m-auto lg:bottom-0 -bottom-10 relative z-0">
            <div className="w-full m-auto flex justify-center items-center">
              <img src={objective} alt="objective" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objective;
