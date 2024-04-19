import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Restaurants({ restInfo }) {
  return (
    <div className="m-5 md:w-1/4 sm:mb-0 mb-6 rounded-xl
    transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90  duration-300 justify-center cursor-pointer relative">
      <div className="rounded-lg h-20 md:h-40 overflow-hidden relative">
        <img alt="content" className="object-cover object-center h-full w-full" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restInfo.cloudinaryImageId}`} />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
          <p className="text-xs font-bold">{restInfo.aggregatedDiscountInfoV3?.header} {restInfo.aggregatedDiscountInfoV3?.subHeader}</p>
        </div>
      </div>
      <div className='ml-2'>
        <p className="font-bold text-sm title-font text-gray-900 mt-2 overflow-hidden whitespace-nowrap truncate">{restInfo.name}</p>

        <p className="text-sm leading-relaxed mt-2 overflow-hidden line-clamp-3 font-bold" style={{ maxHeight: '100px', lineHeight: '1.5em', WebkitLineClamp: '3', display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>
          <FontAwesomeIcon icon={faStar} style={{ color: "#13ec54" }} /> {restInfo.avgRatingString} .{restInfo.sla?.slaString}</p>

        <p className="text-base leading-relaxed mt-2 break-all text-grey">
          {restInfo.cuisines.join(",")}
        </p>
      </div>
    </div>
  );
}

export default Restaurants;
