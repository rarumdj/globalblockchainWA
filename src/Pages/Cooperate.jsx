import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Cooperate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.location.replace(
      "https://indiablockchainalliance.org/corporate-training"
    );
  }, [pathname]);

  return <div>Cooperate</div>;
};

export default Cooperate;
