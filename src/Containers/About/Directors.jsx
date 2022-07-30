import React from "react";
import Team from "../../Components/Team";
import ela from "../../assets/team/ela.jpg";
import ham from "../../assets/team/ham.jpg";
import laura from "../../assets/team/laura.jpg";
import mar from "../../assets/team/mar.jpg";
import maria from "../../assets/team/maria.jpg";
import sha from "../../assets/team/sha.jpg";
import she from "../../assets/team/she.jpg";
import raj from "../../assets/team/raj.jpg";
import elaBlur from "../../assets/team/blur/ela.jpg";
import hamBlur from "../../assets/team/blur/ham.jpg";
import lauraBlur from "../../assets/team/blur/laura.jpg";
import marBlur from "../../assets/team/blur/mar.jpg";
import mariaBlur from "../../assets/team/blur/maria.jpg";
import shaBlur from "../../assets/team/blur/sha.jpg";
import sheBlur from "../../assets/team/blur/she.jpg";
import rajBlur from "../../assets/team/blur/raj.jpg";

const DirectorsDetails = [
  {
    name: "Elaine Bannerman",
    position: "Member",
    image: ela,
    imageBlur: elaBlur,
  },
  {
    name: "Haimanot Bobosha",
    position: "Member",
    image: ham,
    imageBlur: hamBlur,
  },
  {
    name: "Raj Kapoor",
    position: "Member",
    image: raj,
    imageBlur: rajBlur,
  },
  {
    name: "Maria Eneva-Olms",
    position: "Member",
    image: maria,
    imageBlur: marBlur,
  },
  {
    name: "Laura Lazar",
    position: "Member",
    image: laura,
    imageBlur: lauraBlur,
  },
  {
    name: "Sahebe Mehmannavaz",
    position: "Member",
    image: sha,
    imageBlur: shaBlur,
  },
  {
    name: "Mara Hartsoerger",
    position: "Member",
    image: mar,
    imageBlur: marBlur,
  },
  {
    name: "Shelle Fantastic",
    position: "member",
    image: she,
    imageBlur: sheBlur,
  },
];

function Directors() {
  return (
    <div className="pb-16 px-8 md:pb-24">
      <div className="mb-12">
        <h1 className="gradient__text text-2xl lg:text-6xl font-extrabold leading-tight">
          Board of Directors
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

export default Directors;
