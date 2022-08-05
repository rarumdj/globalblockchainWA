import React from 'react'

function SubHeader({title}) {
  return (
    <div className='flex justify-center items-center py-24 md:py-28 footer__bg'>
        <h1 className='text-white text-3xl sm:text-5xl mx-8 font-bold text-center'>{title}</h1>
    </div>
  )
}

export default SubHeader