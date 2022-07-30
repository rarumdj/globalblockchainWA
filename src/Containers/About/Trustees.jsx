import React from "react";
import Team from "../../Components/Team";
import modupe from "../../assets/team/modupe.jpg";
import tolani from "../../assets/team/tolani.jpg";
import ade from "../../assets/team/ade.jpg";
import modupeBlur from "../../assets/team/blur/modupe.jpg";
import tolaniBlur from "../../assets/team/blur/tolani.jpg";
import adeBlur from "../../assets/team/blur/ade.jpg";

const DirectorsDetails = [
  {
    name: "Modupe Ativie",
    position: "Member",
    image: modupe,
    imageBlur: modupeBlur,
  },
  {
    name: "Tolani Jemi-Alade",
    position: "Member",
    image: tolani,
    imageBlur: tolaniBlur,
  },
  {
    name: "Adedeji Owonibi",
    position: "Member",
    image: ade,
    imageBlur: adeBlur,
  },
];

function Trustees() {
  return (
    <div className="pb-16 px-8 md:pb-24">
      <div className="mb-12">
        <h1 className="gradient__text text-2xl lg:text-6xl font-extrabold leading-tight">
          Board of Trustees
        </h1>
      </div>
      <div className="grid sm:grid-cols-4 gap-6">
        {DirectorsDetails.map((item, i) => (
          <Team
            key={i}
            name={item.name}
            position={item.position}
            image={item.image}
            blurImg={item.imageBlur}
          />
        ))}
      </div>
    </div>
  );
}

export default Trustees;
