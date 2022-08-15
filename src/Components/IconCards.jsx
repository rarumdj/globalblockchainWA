import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { imgpreview } from "../assets";
import UseProgressiveImg from "./UseProgressiveImg";

function IconCards({ icon, title, slug, color, img }) {
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

  const [src, { blur }] = UseProgressiveImg(imgpreview, img);

  return (
    // <motion.div
    //   variants={cardVarient}
    //   initial="hidden"
    //   whileHover="animate"
    //   whileTap="animate"
    //   className={`${color} h-56 w-full p-4 rounded-md cursor-pointer`}
    //   onClick={() => navigate(slug)}>
    //   <div className="flex flex-col h-full m-auto text-center justify-evenly items-center">
    //     <div className="flex h-10 w-10 rounded-md bg-slate-100">{icon}</div>
    //     <div>
    //       <p className="text-slate-100 text-sm lg:text-base">{title}</p>
    //     </div>
    //   </div>
    // </motion.div>

    <motion.div
      variants={cardVarient}
      initial="hidden"
      whileHover="animate"
      whileTap="animate"
      onClick={() => navigate(slug)}
      className="sm:w-1/2 mb-10 px-4">
      <div className="relative pb-[55%] rounded-lg overflow-hidden">
        <img
          src={src}
          alt="content"
          style={{
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out",
          }}
          className="absolute inset-0 m-auto w-full rounded-lg h-full object-cover"
        />
      </div>

      <h2 className="title-font md:text-2xl font-medium text-[#0B045A] mt-6 mb-3">
        {title}
      </h2>
    </motion.div>
  );
}

export default IconCards;
