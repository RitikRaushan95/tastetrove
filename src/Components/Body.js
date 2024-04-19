import React, { useEffect, useState } from 'react';
import Restaurants from './Restaurants';
import Allimage from '../assets/Imagecollection'
import Shimer from './Shimer';


function Body() {

    const [restCrad, setRestCard]=useState([]);
   
    let resStore=restCrad.map((el)=>{
        return <Restaurants key={el.id} restInfo={el.info}/>
    })
    
    const dataCollect= async ()=>{
        const apiStore=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json= await apiStore.json();
        const restaurants= json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        console.log(json.data.cards)
        setRestCard(restaurants)
    }

useEffect(() => {
    dataCollect();
}, []);


return (
    <>
    {restCrad.length === 0 ?(<Shimer/>):(
            <>
            <div className='mt-10 justify-center'>
                <div className='text-xl container mx-auto w-3/4'>
                    <h1 className='font-bold'>What's on your mind?</h1>
                    <div className='flex justify-around ml-5 mt-5 w-[860px] cursor-pointer'>
                        {Allimage.map((el, index) => {
                            return <img src={el.url} key={index} className='w-28 h-30' alt="" />;
                        })}
                    </div>
                </div>
                <hr className="mt-10 mx-auto border-solid border-b-1 border-gray-200 w-3/4" />
            </div>
            <div className='mt-10 justify-center'>
                <div className='text-xl container mx-auto w-3/4'>
                    <h1 className='font-bold'>Top restaurant chains in Patna</h1>
                    <div className='container flex mx-auto mt-5 flex-wrap'>
                        {resStore}
                    </div>
                </div>
            </div>
            </>
        )}
    </>
);
}


export default Body;
