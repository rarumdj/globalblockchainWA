import React from "react";
import { Link } from "react-router-dom";
import { imgpreview } from "../../assets";
import UseProgressiveImg from "../../Components/UseProgressiveImg";
import { Gallerydata } from "../../utils/data";
import { Slugify } from "../../utils/utils";

const GalleryPage = () => {
  return (
    <section className="py-12 px-8 md:py-24 md:px-24">
      <div className="flex flex-wrap -m-4">
        {Gallerydata.map((item, i) => {
          const [src, { blur }] = UseProgressiveImg(imgpreview, item.cover);
          return (
            <Link
              to={`/gallery/${Slugify(item.title)}`}
              className="xl:w-1/3 md:w-1/2 p-4 cursor-pointer"
              key={i}>
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-72 rounded w-full object-cover object-center mb-6"
                  src={src}
                  alt={item.title}
                  style={{
                    filter: blur ? "blur(20px)" : "none",
                    transition: blur ? "none" : "filter 0.3s ease-out",
                  }}
                />
                <div className="py-1.5 mb-2 px-3 text-xs w-fit font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  {item.tag}
                </div>

                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {item.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default GalleryPage;
