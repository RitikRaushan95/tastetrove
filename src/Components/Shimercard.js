import React from 'react'

function Shimercard() {
  return (
    <div className="m-5 md:w-1/4 sm:mb-0 mb-6 rounded-xl overflow-hidden">
      <div className="rounded-lg h-20 md:h-40 bg-gray-300 animate-pulse"></div>
      <div className='ml-2'>
        <div className="h-4 w-1/2 rounded-md bg-gray-300 mt-2 animate-pulse"></div>
        <div className="h-4 w-1/4 rounded-md bg-gray-300 mt-2 animate-pulse"></div>
        <div className="h-4 w-1/3 rounded-md bg-gray-300 mt-2 animate-pulse"></div>
      </div>
    </div>
  )
}

export default Shimercard
