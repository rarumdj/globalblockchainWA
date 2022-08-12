import { motion } from "framer-motion";
import React from "react";
import { imgpreview } from "../assets";
import UseProgressiveImg from "./UseProgressiveImg";

const GalleryCard = ({ img, title, onClick }) => {
  const [src, { blur }] = UseProgressiveImg(imgpreview, img);
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
    <div className="mb-10">
      <motion.div
        variants={cardVarient}
        initial="hidden"
        whileHover="animate"
        whileTap="animate"
        onClick={onClick}
        className="rounded-lg h-full w-full overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center rounded"
          src={src}
          style={{
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out",
          }}
        />
      </motion.div>
      <h2 className="title-font md:text-xl font-medium text-[#0B045A] mt-3 mb-3">
        {title}
      </h2>
    </div>
  );
};

export default GalleryCard;
