import React from 'react'
import Shimercard from './Shimercard'

function Shimer() {
  return (
    <>
   <div className='mt-10 justify-center'>
        <div className='text-xl container mx-auto w-3/4'>
            <div className='flex rounded-lg justify-around ml-5 mt-5 w-[860px] cursor-pointer bg-gray-300 h-20'>
            </div>
        </div>
    </div>

    <div className='text-xl container flex flex-wrap mx-auto w-3/4 justify-around'>
        <Shimercard/>
        <Shimercard/>
        <Shimercard/>
        <Shimercard/>
        <Shimercard/>
        <Shimercard/>

    </div>
    </>
  )
}

export default Shimer
