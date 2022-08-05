import React from "react";
import { useParams } from "react-router-dom";
import SinglePage from "../../Components/SinglePage";
import { PartnershipList } from "../../utils/data";
import { Slugify } from "../../utils/utils";

const SinglePartnership = () => {
  const { slug } = useParams();
  const items = PartnershipList.filter((item) => Slugify(item.title) === slug);

  return (
    <section>
      <SinglePage items={items} />
    </section>
  );
};

export default SinglePartnership;
