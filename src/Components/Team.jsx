import React from "react";
import UseProgressiveImg from "./UseProgressiveImg";

function Team({ name, image, blurImg, position }) {
  const [src, { blur }] = UseProgressiveImg(blurImg, image);
  return (
    <div className="flex flex-col rounded-sm overflow-hidden">
      <div className="flex flex-initial w-full h-full">
        <img
          src={src}
          alt=""
          style={{
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out",
          }}
        />
      </div>
      <div className="px-6 py-3 gradient__bg h-20 min-w-max max-w-screen flex-none">
        <div className="flex flex-col justify-between">
          <h1 className="text-white text-sm font-bold lg:text-lg">
            {name}
          </h1>
          <p className="text-blue-200 text-sm font-bold">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
