import React from "react";
import PartnersLogo from "../../Components/PartnersLogo";

const PartnersIcon = () => {
  return (
    <div className="py-4 px-8 md:pb-24 md:px-24">
    <div className="mb-6 sm:mb-12">
        <h1 className="gradient__text text-2xl lg:text-6xl font-extrabold leading-tight">
          Our Partners
        </h1>
      </div>
      <PartnersLogo />
    </div>
  );
};

export default PartnersIcon;
