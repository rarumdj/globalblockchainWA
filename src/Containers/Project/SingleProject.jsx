import React from "react";
import { useParams } from "react-router-dom";
import SinglePage from "../../Components/SinglePage";
import { ProjectList } from "../../utils/data";
import { Slugify } from "../../utils/utils";

const SingleProject = () => {
  const { slug } = useParams();
  const items = ProjectList.filter((item) => Slugify(item.title) === slug);
  const p = items.map((item) => item.projects);
  const projects = p[0]?.map((item) => item);
  return (
    <section>
      <SinglePage items={projects ?? items} />
    </section>
  );
};

export default SingleProject;
