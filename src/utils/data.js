import { BiNetworkChart } from "react-icons/bi";
import { CgCommunity } from "react-icons/cg";
import { FaChalkboardTeacher, FaRegHandshake } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineAutoGraph, MdOutlineSchool } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import { SiHackthebox } from "react-icons/si";
import { VscCommentDiscussion, VscOrganization } from "react-icons/vsc";
import girlnBlock from "../assets/girlframework.png";
import {
  beevent,
  bementor,
  beprogram,
  besponsor,
  betech,
  blackwoman,
  blockchaincareer,
  blockchaincommunity,
  blockchainworkshop,
  colabo,
  g1,
  g2,
  g3,
  g4,
  g5,
  gbeducation,
  girlchainprogram,
  girledu,
  hackaton,
  img_concerns,
  kidgram,
  kidsgram,
  purpose,
  trainning,
  trainteacher,
  winpartner,
} from "../assets";

export const ProjectList = [
  {
    title: "Blockchain Teacher Training Programs",
    text: "Are you an Educator, ICT   teacher, or you just want to upgrade your skills then this training is for you. Technology is rapidly evolving and Blockchain in recent times has gained the credibility of being a very reliable source to store data related to various types of transactions. Due to this functionality, industries are using this technology to stay at pace with progression. If you would like to upgrade your skill and earn more then you should learn about the Blockchain technology. A huge number of high profile companies are hiring due to the exponential growth of this technology.",
    action: "Register here",
    actionLink: "https://bit.ly/GBWA_BCT",
    // img: trainteacher,
    img: trainning,
    icon: <FaChalkboardTeacher size="30" color="#000" className="m-auto" />,
    color: "gradient__bar",
  },
  {
    title: "Kidgrammer",
    img: kidsgram,
    projects: [
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
      },
    ],
    icon: <VscCommentDiscussion size="30" color="#000" className="m-auto" />,
    color: "gradient__bar_blue",
  },
  {
    title: "Girl Chain",
    text: "Girl Chain is a 4-week Free coding camp for girls between the ages 8 and 16. GIRLCHAIN will work to bring fun, educational workshops and camps to garner the interest of young minds. GIRLCHAIN will partner with local child care centers to create, a dedicated center for students to explore blockchain. New programs are added every six months as well.",
    img: girlnBlock,
    icon: <FaChalkboardTeacher size="30" color="#000" className="m-auto" />,
    color: "gradient__bar",
  },
  {
    title: "Education for Purpose",
    text: "Coming Soon",
    img: purpose,
    icon: <VscCommentDiscussion size="30" color="#000" className="m-auto" />,
    color: "gradient__bar_blue",
  },
  {
    title: "Blockchain Career Counselling",
    text: "",
    img: blockchaincareer,
    icon: <MdOutlineAutoGraph size="30" color="#000" className="m-auto" />,
    color: "gradient__bar",
  },
  {
    title: "Blockchain Workshop series Pan Africa",
    text: "",
    img: blockchainworkshop,
    icon: <GrWorkshop size="30" color="#000" className="m-auto" />,
    color: "gradient__bar_blue",
  },
  {
    title: "Blockchain Community Innovation Centres",
    text: "",
    img: blockchaincommunity,
    icon: <CgCommunity size="30" color="#000" className="m-auto" />,
    color: "gradient__bar",
  },
  {
    title: "Collaborative Projects",
    text: "We believe in team work and we are open to collaborate with you on tech and blockchain related projects.",
    img: colabo,
    icon: <FaRegHandshake size="30" color="#000" className="m-auto" />,
    projects: [
      {
        title: "GBWA X Women Intense NFT",
        text: "GBWA is partnerd with women Intense NFT to onboard 7777girls to web3.",
        sub: [],
        action: "Reach out to us to collaborate",
        actionLink: "",
        img: winpartner,
      },
    ],
    color: "gradient__bar_blue",
  },
  {
    title: "Entrepreneurship training",
    text: "",
    img: trainning,
    icon: <MdOutlineSchool size="30" color="#000" className="m-auto" />,
    color: "gradient__bar",
  },
  {
    title: "Hackathons & Incubators",
    text: "",
    img: hackaton,
    icon: <SiHackthebox size="30" color="#000" className="m-auto" />,
    color: "gradient__bar_blue",
  },
];

export const PartnershipList = [
  {
    title: "Be a GBWA Ambassador ",
    text: "Become a GBWA representative in anywhere you are in the world. Being an ambassador is one of the most efficient way of contributing to the great work we do at Global Blockchain women Alliance. For a successful and effective initiative and project, we must have an active community. <br /> Contact us today to become an ambassador. ",
    img: blackwoman,
    icon: <BiNetworkChart size="30" color="#000" className="m-auto" />,
    color: "gradient__bar",
  },
  {
    title: "Become a mentor",
    text: "Join our community of mentor to help other women and girls stay focused, gain confidence and attain goals. Contact us today <a href='mailto://info@globalblockchainwa.org'>info@globalblockchainwa.org </a>",
    action: "Join our community",
    actionLink: "https://tinyurl.com/GBWAGIRL",
    img: bementor,
    icon: <VscCommentDiscussion size="30" color="#000" className="m-auto" />,
    color: "gradient__bar_blue",
  },
  {
    title: "Become a tech partner",
    text: "Join our team of tech partners and have access to Global opportunities.",
    action: "Get involved",
    actionLink: "https://tinyurl.com/kidgrammer",
    img: betech,
    icon: <FaRegHandshake size="30" color="#000" className="m-auto" />,
    color: "gradient__bar",
  },
  {
    title: "Sponsor a girl",
    text: "Sponsor a girl today and take advantage of this great opportunity by lending support to empower and educate women and girls around the world.",
    action: "Sponsor a girl today",
    actionLink: "https://tinyurl.com/kidgrammer",
    img: besponsor,
    icon: <RiHandHeartLine size="30" color="#000" className="m-auto" />,
    color: "gradient__bar_blue",
  },
  {
    title: "Become a program sponsor",
    text: "We have a lineup of programs all through the year. Support the GBWA team and Sponsor a program today.",
    action: "Become a sponsor",
    actionLink: "https://tinyurl.com/kidgrammer",
    img: beprogram,
    icon: <HiOutlineSpeakerphone size="30" color="#000" className="m-auto" />,
    color: "gradient__bar",
  },
  {
    title: "Become an education partner",
    text: "Educating women and girls on the Blockchain technology is core for us and we open to welcome education partners onboard as we equip more women and girls around the world.",
    action: "Contact us today",
    actionLink: "https://tinyurl.com/kidgrammer",
    img: girledu,
    icon: <FaRegHandshake size="30" color="#000" className="m-auto" />,
    color: "gradient__bar_blue",
  },
  {
    title: "Become an event organizer",
    text: "Would you like to plan a GBWA event? ",
    action: "Contact us today",
    actionLink: "https://tinyurl.com/kidgrammer",
    img: beevent,
    icon: <VscOrganization size="30" color="#000" className="m-auto" />,
    color: "gradient__bar",
  },
];

export const modalInfo = {
  img: girlchainprogram,
  text: "Girl Chain is a 4-week Free coding camp for girls between the ages 8 and 16. GIRLCHAIN will work to bring fun, educational workshops and camps to garner the interest of young minds.",
  title: "Girls Chain Coding Camp",
  action: "Sign-up Now",
  actionLink: "https://rb.gy/pjfhgd",
};

export const Gallerydata = [
  {
    title: "Girl Chain Awearness",
    tag: "training",
    cover: g1,
    imgs: [
      { img: g1, title: "" },
      { img: g2, title: "" },
      { img: g3, title: "" },
      { img: g4, title: "" },
      { img: g5, title: "" },
    ],
  },
];
