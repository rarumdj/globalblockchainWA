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

const DirectorsDetails = [
  {
    name: "Elaine Bannerman",
    position: "Member",
    image: ela,
  },
  {
    name: "Haimanot Bobosha",
    position: "Member",
    image: ham,
  },
  {
    name: "Raj Kapoor",
    position: "Member",
    image: raj,
  },
  {
    name: "Maria Eneva-Olms",
    position: "Member",
    image: maria,
  },
  {
    name: "Laura Lazar",
    position: "Member",
    image: laura,
  },
  {
    name: "Sahebe Mehmannavaz",
    position: "Member",
    image: sha,
  },
  {
    name: "Mara Hartsoerger",
    position: "Member",
    image: mar,
  },
  {
    name: "Shelle Fantastic",
    position: "member",
    image: she,
  },
];

function Directors() {
  return (
    <div className="pb-16 px-8 md:pb-24 md:px-24">
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
          />
        ))}
      </div>
    </div>
  );
}

export default Directors;
