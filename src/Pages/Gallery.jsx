import React, { useEffect } from "react";
import SubHeader from "../Components/SubHeader";
import Footer from "../Containers/Footer/Footer";
import GalleryPage from "../Containers/Gallery/GalleryPage";

const Gallery = () => {
  useEffect(() => {
    document.title = "GBWA - Gallery";
  }, []);
  return (
    <div className="">
      <SubHeader title={"Gallery"} />
      <GalleryPage />
      <Footer />
    </div>
  );
};

export default Gallery;
