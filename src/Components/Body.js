import React, { useEffect } from 'react';
import Topratedcard from './Topratedcard';
import Allimage from '../assets/Imagecollection'

function Body() {

    const dataCollect= async ()=>{
        const apiStore=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=725082&catalog_qa=undefined&isMenuUx4');
        const json= await apiStore.json();
        console.log(json)
    }

useEffect(() => {
    dataCollect();
}, []);

  return (
   <>
    <div className='mt-10 justify-center'>
        <div className='text-xl container mx-auto w-3/4'>
            <h1 className='font-bold'>What's on your mind?</h1>
            <div className='flex justify-around ml-5 mt-5 w-[860px] cursor-pointer'>
                {Allimage.map((el)=>{
                    return <img src={el.url} className='w-28 h-30' alt="" />
                })}
            </div>
        </div>
        <hr className="mt-10 mx-auto border-solid border-b-1 border-gray-200 w-3/4" />
    </div>
    <div className='mt-10 justify-center'>
        <div className='text-xl container mx-auto w-3/4'>
        <h1 className='font-bold'>Top restaurant chains in Patna</h1>
        <div className='container flex mx-auto mt-5 flex-wrap'>
            <Topratedcard/>
            <Topratedcard/>
            <Topratedcard/>
            <Topratedcard/>
            <Topratedcard/>
            <Topratedcard/>
        </div>
        </div>
        <hr className="mt-10 mx-auto border-solid border-b-1 border-gray-200 w-3/4" />
    </div>
   </>
  );
}

export default Body;
