import React from "react";

function IconCards({ icon, title }) {
  return (
    <div className="footer__bg h-56 w-full p-4 rounded-md">
      <div className="flex flex-col h-full m-auto text-center justify-evenly items-center">
        <div className="flex h-10 w-10 rounded-md bg-slate-300">{icon}</div>
        <div>
          <p className="text-blue-200 text-sm lg:text-base">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default IconCards;
