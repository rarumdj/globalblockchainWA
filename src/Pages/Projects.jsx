import React, { useEffect } from 'react'
import SubHeader from '../Components/SubHeader'
import Footer from '../Containers/Footer/Footer'
import Project from '../Containers/Project/Project'

function Projects() {
  useEffect(() => {
    document.title = "GBWA - Projects";
  }, []);
  return (
    <div className="mt-20">
    <SubHeader title={"Project"} />
    <Project />
    <Footer />
  </div>
  )
}

export default Projects