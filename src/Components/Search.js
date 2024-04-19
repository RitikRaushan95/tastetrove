import React, { useEffect, useState } from 'react'
import imageUrls from '../assets/Searchimage'
import Restaurants from './Restaurants';
function Search() {
  const [search, setSearch]=useState('');
  const [restCard, setRestCard]=useState([]);
  const [filter,setFilter]=useState(restCard);
  
  let resFiltStore=filter.map((el,index)=>{
    return <Restaurants key={index} restInfo={el.info}/>
})
  let assignSearch=(input)=>{
    let a=input.target.value;
        setSearch(a)
  }
 
  let filteredData = () => {
    const b=restCard.filter((el)=> el.info.name.includes(search))
    setFilter(b)
}

  const dataCollect= async ()=>{
    const apiStore=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json= await apiStore.json();
    const restaurants= json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setRestCard(restaurants)
}
useEffect(() => {
  dataCollect();
}, []);


  return (
    <>
       <div className='mt-10 flex container mx-auto justify-between flex-wrap'>
       <input type='text' className='border-2 mx-auto w-3/4 border-slate-500 hover:border-orange-500 p-2 rounded-md' placeholder='Search for resturant and food' value={search}  onChange={assignSearch}/>
       <button className='bg-gray-200 rounded-md p-2 mr-5 hover:bg-orange-500' onClick={filteredData}>Search</button>

       </div>
       <div  className='mt-5 container mx-auto w-3/4 cursor-pointer'>
        <p className='font-bold mt-10 ml-5'>Popular Dishes</p>
          <div className='flex justify-around ml-5 mt-5 w-[860px]'>
          {imageUrls.map((el, index) => {
              return <img src={el.url} key={index} className='w-18 h-20' alt="" onClick={
                (e)=>{
                  e.preventDefault();
                  setSearch(el.food)
                 filteredData()
                }
              } />;
          })}
          </div>
       </div>

      <div className='mt-10 justify-center'>
          <div className='text-xl container mx-auto w-3/4'>
              <div className='container flex mx-auto mt-5 flex-wrap'>
                  {resFiltStore}
              </div>
          </div>
      </div>
       
    </>
  )
}

export default Search
