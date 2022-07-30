import React, { useEffect } from 'react'
import SubHeader from '../Components/SubHeader'
import Footer from '../Containers/Footer/Footer'
import Partner from '../Containers/Partnership/Partner'

function Partnership() {
  useEffect(() => {
    document.title = "GBWA - Partnership";
  }, []);
  return (
    <div className="">
    <SubHeader title={"Partnership"} />
    <Partner />
    <Footer />
  </div>
  )
}

export default Partnership