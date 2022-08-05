import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function IconCards({ icon, title, slug }) {
  const navigate = useNavigate();
  const cardVarient = {
    hidden: { scale: 1 },
    animate: { scale: 1.05 },
    transition: {
      type: "tween",
      duration: "2",
      delay: "1",
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      variants={cardVarient}
      initial="hidden"
      whileHover="animate"
      whileTap="animate"
      className="gradient__bar h-56 w-full p-4 rounded-md cursor-pointer"
      onClick={() => navigate(slug)}>
      <div className="flex flex-col h-full m-auto text-center justify-evenly items-center">
        <div className="flex h-10 w-10 rounded-md bg-slate-100">{icon}</div>
        <div>
          <p className="text-slate-100 text-sm lg:text-base">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default IconCards;
