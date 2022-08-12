import React, { useEffect } from 'react'
import SubHeader from '../Components/SubHeader';
import Footer from '../Containers/Footer/Footer';
import GalleryCard from '../Components/GalleryCard';
import MasonryLayout from '../Containers/Gallery/MasonryLayout';

const Gallery = () => {
    useEffect(() => {
        document.title = "GBWA - Gallery";
      }, []);
      return (
        <div className="">
        <SubHeader title={"Gallery"} />
        <MasonryLayout />
        <Footer />
      </div>
      )
}

export default Gallery