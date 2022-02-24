import React from "react";

function Team({ name, image, position }) {
  return (
    <div className="flex flex-col rounded-sm overflow-hidden">
      <div className="flex flex-initial w-full h-full">
        <img src={image} alt="" />
      </div>
      <div className="px-6 py-3 footer__bg h-20 min-w-max max-w-screen flex-none">
        <div className="flex flex-col justify-between">
          <h1 className="gradient__text text-sm font-bold lg:text-lg">
            {name}
          </h1>
          <p className="text-blue-200 text-sm font-bold">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
