import React from "react";
import { BiNetworkChart } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { RiHandHeartLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { VscCommentDiscussion } from "react-icons/vsc";
import IconCards from "../../Components/IconCards";

const PartnerCard = [
  {
    title: "Join our  ambassador program",
    icon: <BiNetworkChart size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Become a mentor",
    icon: <VscCommentDiscussion size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Become a tech partner",
    icon: <FaRegHandshake size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Make a donation",
    icon: <RiHandHeartLine size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Become a program  sponsor",
    icon: <HiOutlineSpeakerphone size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Become an education  partner",
    icon: <FaRegHandshake size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Become an event  organizer",
    icon: <VscOrganization size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Offer scholarships / fellowships",
    icon: <MdOutlineSchool size="30" color="#000" className="m-auto" />,
  },
];

function Partner() {
  return (
    <div className="py-12 px-8 md:py-24 md:px-24">
    <div className="grid sm:grid-cols-3 grid-flow-row gap-6">
      {PartnerCard.map((item, i) => (
        <IconCards title={item.title} icon={item.icon} key={i} />
      ))}
    </div>
    </div>
  );
}

export default Partner;
