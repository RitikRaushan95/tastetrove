import React from 'react'

function Search() {
  return (
    <div>
       <hr className="mx-auto border-solid border-b-1 border-slate-500 w-11/12" />
       <div className='mt-10 flex justify-center'>
       <input type='text' className='border-2 mx-auto w-3/4 border-slate-500 hover:border-orange-500 p-2 rounded-md' placeholder='Search for resturant and food'/>
       </div>
       <div  className='mt-5 container mx-auto w-3/4'>
        <p className='font-bold mt-10 ml-5'>Popular Dishes</p>
          <div className='flex justify-around ml-5 mt-5 w-[860px]'>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65" className='w-18 h-20' alt="" />

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966" className='w-18 h-20' alt="" />

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f" className='w-18 h-20' alt="" />

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/87664acb0f9dd95d10a549bb8190ab27" className='w-18 h-20' alt="" />

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/e76b511935016406e6ebc11dd7593387" className='w-18 h-20' alt="" />

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/8322f6d6df488dc1f5a6674cfe863f0f" className='w-18 h-20' alt="" />

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/31f03222ea978aef3b10d386729eb076" className='w-18 h-20' alt="" />

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/c170aa4262ec0d191642f42a3a03b4ce" className='w-18 h-20' alt="" />

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/0b5ffa32a04d99c1f212d2aacefd5f6f" className='w-18 h-20' alt="" />

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/36184033ebef97d27a85fa3af5c1d403" className='w-18 h-20' alt="" />

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/d0884e09ef431ee610e54a0bb2dfecd5" className='w-18 h-20' alt="" />
          </div>
       </div>
    </div>
  )
}

export default Search
