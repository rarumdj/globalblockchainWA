import React from 'react'

function SubHeader({title}) {
  return (
    <div className='flex justify-center items-center py-6 md:py-24 footer__bg'>
        <h1 className='gradient__text text-3xl sm:text-5xl mx-8 font-bold'>{title}</h1>
    </div>
  )
}

export default SubHeader