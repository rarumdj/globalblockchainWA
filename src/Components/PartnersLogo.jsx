import React from "react";
import { motion } from "framer-motion";
import aeforce from "../assets/partners/aeforce.jpg";
import conv from "../assets/partners/conv.jpg";
import est from "../assets/partners/est.jpg";
import globalai from "../assets/partners/globalai.jpg";
import iba from "../assets/partners/iba.jpg";
import kick from "../assets/partners/kick.jpg";
import u from "../assets/partners/u.jpg";
import pan from "../assets/partners/pan.jpg";
import shefan from "../assets/partners/shefan.jpg";
import stamped from "../assets/partners/stamped.jpg";

const imgs = [
  {
    image: aeforce,
  },
  {
    image: conv,
  },
  {
    image: est,
  },
  {
    image: globalai,
  },
  {
    image: iba,
  },
  {
    image: kick,
  },
  {
    image: u,
  },
  {
    image: pan,
  },
  {
    image: shefan,
  },
  {
    image: stamped,
  },
];

const imgVarient = {
  hidden: { scale: 1 },
  animate: { scale: 1.2 },
  transition: {
    type: "tween",
    duration: "2",
    delay: "1",
    ease: "easeInOut",
  },
};
const PartnersLogo = () => {
  return (
    <div className="grid grid-cols-5 sm:grid-cols-10 grid-flow-row gap-4">
      {imgs.map((item, i) => (
        <motion.div
          key={i}
          variants={imgVarient}
          initial="hidden"
          whileHover="animate"
        >
          <img src={item.image} alt="" />
        </motion.div>
      ))}
    </div>
  );
};

export default PartnersLogo;
