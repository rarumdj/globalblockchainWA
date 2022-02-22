import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineAutoGraph } from "react-icons/md";
import { CgCommunity } from "react-icons/cg";
import { FaRegHandshake } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { VscCommentDiscussion } from "react-icons/vsc";
import { SiHackthebox } from "react-icons/si";
import IconCards from "../../Components/IconCards";

const ProjectCard = [
  {
    title: "Blockchain Teacher Training Programs",
    icon: <FaChalkboardTeacher size="30" color="#000" className="m-auto" />,
  },
  {
    title: "BlockTalk series launch",
    icon: <VscCommentDiscussion size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Blockchain Career Counselling",
    icon: <MdOutlineAutoGraph size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Blockchain Workshop series Pan Africa",
    icon: <GrWorkshop size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Blockchain Community Innovation Centres",
    icon: <CgCommunity size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Collaborative Projects",
    icon: <FaRegHandshake size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Entrepreneurship training",
    icon: <MdOutlineSchool size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Hackathons & Incubators",
    icon: <SiHackthebox size="30" color="#000" className="m-auto" />,
  },
];

function Project() {
  return (
    <div className="py-12 px-8 md:py-24 md:px-24">
      <div className="grid sm:grid-cols-3 grid-flow-row gap-6">
        {ProjectCard.map((item, i) => (
          <IconCards title={item.title} icon={item.icon} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Project;
