import React from "react";
import Team from "../../Components/Team";

function Trustees() {
  return (
    <div className="pb-16 px-8 md:pb-24 md:px-24">
      <div className="mb-12">
        <h1 className="gradient__text text-2xl lg:text-6xl font-extrabold leading-tight">
          Board of Trustees
        </h1>
      </div>
      <Team />
    </div>
  );
}

export default Trustees;
