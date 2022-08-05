import React from "react";
import IconCards from "../../Components/IconCards";
import { ProjectList } from "../../utils/data";
import { Slugify } from "../../utils/utils";


function Project() {
  return (
    <div className="py-12 px-8 md:py-24 md:px-24">
      <div className="grid sm:grid-cols-3 grid-flow-row gap-6">
        {ProjectList.map((item, i) => (
          <IconCards
            title={item.title}
            icon={item.icon}
            slug={`/project/${Slugify(item.title)}`}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
