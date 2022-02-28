import React from "react";
import Team from "../../Components/Team";
import modupe from "../../assets/team/modupe.jpg";
import faith from "../../assets/team/faith.jpg";
import ali from "../../assets/team/ali.jpg";
import roli from "../../assets/team/roli.jpg";
import modupeBlur from "../../assets/team/blur/modupe.jpg";
import faithBlur from "../../assets/team/blur/faith.jpg";
import aliBlur from "../../assets/team/blur/ali.jpg";
import roliBlur from "../../assets/team/blur/roli.jpg";

const StaffDetails = [
  {
    name: "Modupe Ativie",
    position: "Team Lead",
    image: modupe,
    imageBlur: modupeBlur,
  },
  {
    name: "Edirin Oghenekevwe",
    position: "Executive Assistant",
    image: faith,
    imageBlur: faithBlur,
  },
  {
    name: "Rowlanda Gbenedio",
    position: "Project Associate",
    image: roli,
    imageBlur: roliBlur,
  },
  {
    name: "Daba Alli",
    position: "Administrative Assistant",
    image: ali,
    imageBlur: aliBlur,
  },
];
const Staff = () => {
  return (
    <div className="pb-16 px-8 md:pb-24 md:px-24">
      <div className="mb-12">
        <h1 className="gradient__text text-2xl lg:text-6xl font-extrabold leading-tight">
          Team Members
        </h1>
      </div>
      <div className="grid sm:grid-cols-4 gap-6">
        {StaffDetails.map((item, i) => (
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
};

export default Staff;
