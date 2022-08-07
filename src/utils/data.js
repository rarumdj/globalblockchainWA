import { BiNetworkChart } from "react-icons/bi";
import { CgCommunity } from "react-icons/cg";
import { FaChalkboardTeacher, FaRegHandshake } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineAutoGraph, MdOutlineSchool } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import { SiHackthebox } from "react-icons/si";
import { VscCommentDiscussion, VscOrganization } from "react-icons/vsc";
import {
  girlchainprogram,
  img_concerns,
  kidgram,
  trainteacher,
} from "../assets";

export const ProjectList = [
  {
    title: "Blockchain Teacher Training Programs",
    text: "Are you an Educator, ICT   teacher, or you just want to upgrade your skills then this training is for you. Technology is rapidly evolving and Blockchain in recent times has gained the credibility of being a very reliable source to store data related to various types of transactions. Due to this functionality, industries are using this technology to stay at pace with progression. If you would like to upgrade your skill and earn more then you should learn about the Blockchain technology. A huge number of high profile companies are hiring due to the exponential growth of this technology.",
    action: "Register here",
    actionLink: "https://bit.ly/GBWA_BCT",
    img: trainteacher,
    icon: <FaChalkboardTeacher size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Kidgrammer",
    text: "A tour around schools to educate children on the blockchain technology. (change picture – robotic kids) The ability to solve problems is a trait that is useful in life in general. Understanding computers and learning the basics of coding helps children to develop an appreciation of how things work.",
    sub: [
      "Computer Programming gives kids a challenge and helps them develop resilience. They learn that failure isn’t necessarily a bad thing, and in fact, it can often be something positive because it serves as a learning opportunity.",
      "When a child learns to code, his/her creativity is expanded.",
      "Coding teaches children how to think.",
    ],
    action: "Register your school today",
    actionLink: "https://tinyurl.com/kidgrammer",
    img: kidgram,
    icon: <VscCommentDiscussion size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Girl Chain",
    text: "Girl Chain is a 4-week Free coding camp for girls between the ages 8 and 16. GIRLCHAIN will work to bring fun, educational workshops and camps to garner the interest of young minds. GIRLCHAIN will partner with local child care centers to create, a dedicated center for students to explore blockchain. New programs are added every six months as well.",
    img: girlchainprogram,
    icon: <FaChalkboardTeacher size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Education for Purpose",
    text: "Coming Soon",
    img: img_concerns,
    icon: <VscCommentDiscussion size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Blockchain Career Counselling",
    text: "",
    img: img_concerns,
    icon: <MdOutlineAutoGraph size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Blockchain Workshop series Pan Africa",
    text: "",
    img: img_concerns,
    icon: <GrWorkshop size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Blockchain Community Innovation Centres",
    text: "",
    img: img_concerns,
    icon: <CgCommunity size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Collaborative Projects",
    text: "We believe in team work and we are open to collaborate with you on tech and blockchain related projects.",
    img: img_concerns,
    icon: <FaRegHandshake size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Entrepreneurship training",
    text: "",
    img: img_concerns,
    icon: <MdOutlineSchool size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Hackathons & Incubators",
    text: "",
    img: img_concerns,
    icon: <SiHackthebox size="30" color="#000" className="m-auto" />,
  },
];

export const PartnershipList = [
  {
    title: "Be a GBWA Ambassador ",
    text: "Become a GBWA representative in anywhere you are in the world. Being an ambassador is one of the most efficient way of contributing to the great work we do at Global Blockchain women Alliance. For a successful and effective initiative and project, we must have an active community. <br /> Contact us today to become an ambassador. ",
    img: img_concerns,
    icon: <BiNetworkChart size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Become a mentor",
    text: "Join our community of mentor to help other women and girls stay focused, gain confidence and attain goals. Contact us today <a href='mailto://info@globalblockchainwa.org'>info@globalblockchainwa.org </a>",
    action: "Join our community",
    actionLink: "https://tinyurl.com/GBWAGIRL",
    img: img_concerns,
    icon: <VscCommentDiscussion size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Become a tech partner",
    text: "Join our team of tech partners and have access to Global opportunities.",
    action: "Get involved",
    actionLink: "https://tinyurl.com/kidgrammer",
    img: img_concerns,
    icon: <FaRegHandshake size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Sponsor a girl",
    text: "Sponsor a girl today and take advantage of this great opportunity by lending support to empower and educate women and girls around the world.",
    action: "Sponsor a girl today",
    actionLink: "https://tinyurl.com/kidgrammer",
    img: img_concerns,
    icon: <RiHandHeartLine size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Become a program sponsor",
    text: "We have a lineup of programs all through the year. Support the GBWA team and Sponsor a program today.",
    action: "Become a sponsor",
    actionLink: "https://tinyurl.com/kidgrammer",
    img: img_concerns,
    icon: <HiOutlineSpeakerphone size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Become an education partner",
    text: "Educating women and girls on the Blockchain technology is core for us and we open to welcome education partners onboard as we equip more women and girls around the world.",
    action: "Contact us today",
    actionLink: "https://tinyurl.com/kidgrammer",
    img: img_concerns,
    icon: <FaRegHandshake size="30" color="#000" className="m-auto" />,
  },
  {
    title: "Become an event organizer",
    text: "Would you like to plan a GBWA event? ",
    action: "Contact us today",
    actionLink: "https://tinyurl.com/kidgrammer",
    img: img_concerns,
    icon: <VscOrganization size="30" color="#000" className="m-auto" />,
  },
];

export const modalInfo = {
  img: girlchainprogram,
  text: "Girl Chain is a 4-week Free coding camp for girls between the ages 8 and 16. GIRLCHAIN will work to bring fun, educational workshops and camps to garner the interest of young minds.",
  title: "Girls Chain Coding Camp",
  action: "Sign-up Now",
  actionLink: "https://tinyurl.com/kidgrammer",
};
