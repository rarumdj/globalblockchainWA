import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Cooperate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.location.replace(
      "https://yunometa.com/",
    );
    // window.open('https://yunometa.com/', '_blank', 'noopener,noreferrer');
  }, [pathname]);

  return <div></div>;
};

export default Cooperate;
