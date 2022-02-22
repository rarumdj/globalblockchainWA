import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Cooperate = () => {
  const routePath = useLocation();

  useEffect(() => {
    window.location.replace(
      "https://indiablockchainalliance.org/corporate-training"
    );
  }, [routePath]);

  return <div>Cooperate</div>;
};

export default Cooperate;
