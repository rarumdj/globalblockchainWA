import React, { useCallback, useState } from "react";
import Masonry from "react-masonry-css";
import { blackwoman, g1, g2, g3, g4, g5 } from "../../assets";
import GalleryCard from "../../Components/GalleryCard";
import ImageViewer from "react-simple-image-viewer";
import { Gallerydata } from "../../utils/data";
import { Slugify } from "../../utils/utils";

const breakpointColumnsObj = {
  default: 4,
  3000: 5,
  2000: 3,
  1200: 2,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ slug }) => {
  const items = Gallerydata.filter((item) => Slugify(item.title) === slug).map(
    (item) => item.imgs
  );
  const allImg = items[0].map((item) => item.img);

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <section className="py-12 px-8 md:py-24 md:px-24 min-w-fit">
      <Masonry
        className="flex space-x-6 animate-slide-fwd"
        breakpointCols={breakpointColumnsObj}>
        {items[0].map((item, i) => (
          <GalleryCard
            img={item.img}
            key={i}
            onClick={() => openImageViewer(i)}
          />
        ))}
        {/* {pins?.map((pin) => <Pin key={pin._id} pin={pin} className="w-max" />)} */}
      </Masonry>

      {isViewerOpen && (
        <ImageViewer
          src={allImg}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </section>
  );
};

export default MasonryLayout;
