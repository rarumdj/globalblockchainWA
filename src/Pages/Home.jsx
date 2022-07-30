import React, { useEffect } from "react";
import Footer from "../Containers/Footer/Footer";
import Banner from "../Containers/Home/Banner";
import Features from "../Containers/Home/Features";
import Header from "../Containers/Home/Header";
import Quote from "../Containers/Home/Quote";

function Home() {
  useEffect(() => {
    document.title = "GBWA";
  }, []);
  return (
    <>
      <div className="gradient__bg__header">
        <Header />
      </div>
      <div className="container mx-auto">
        <Quote />
        <Features />
        <Banner />
      </div>
      <Footer />

    </>
  );
}

export default Home;
