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
      <div className="gradient__bg">
        <Header />
      </div>
      <Quote />
      <Features />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
