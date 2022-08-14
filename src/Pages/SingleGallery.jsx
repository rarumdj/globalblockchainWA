import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SubHeader from "../Components/SubHeader";
import Footer from "../Containers/Footer/Footer";
import MasonryLayout from "../Containers/Gallery/MasonryLayout";

const SingleGallery = () => {
  const { slug } = useParams();

  useEffect(() => {
    document.title = `GBWA - Gallery (${slug})`;
  }, [slug]);
  return (
    <div className="">
      <SubHeader title={`Gallery (${slug})`} />
      <MasonryLayout slug={slug} />
      <Footer />
    </div>
  );
};
export default SingleGallery;
