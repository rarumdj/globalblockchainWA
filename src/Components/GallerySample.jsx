import React from "react";
import { useNavigate } from "react-router-dom";
import { Slugify } from "../utils/utils";

const GallerySample = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer"
      onClick={navigate(`/gallery/${Slugify(item.title)}`)}>
      <div className="bg-gray-100 p-6 rounded-lg">
        <img
          className="h-72 rounded w-full object-cover object-center mb-6"
          src={item.cover}
          alt={item.title}
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {item.tag}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {item.title}
        </h2>
      </div>
    </div>
  );
};

export default GallerySample;
