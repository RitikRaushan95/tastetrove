import React from 'react'
import logo from '../assets/Tastetrove.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
    <header className="text-gray-600 body-font cursor-pointer ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <img src={logo} alt="" className='w-20 h-15'/>
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center">
    <a className="mr-5 hover:text-gray-900 hover:text-orange-500 "><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#c1c5cd",}} /> Search</a>
      <a className="mr-5 hover:text-gray-900 hover:text-orange-500 ">Home</a>
      <a className="mr-5 hover:text-gray-900 hover:text-orange-500">About</a>
      <a className="mr-5 hover:text-gray-900 hover:text-orange-500">Offers</a>
      <a className="mr-5 hover:text-gray-900 hover:text-orange-500">Contact</a>
    </nav>
    <button className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-orange-500 rounded text-base mt-4 md:mt-0 text-black">Login
    </button>
  </div>
</header>
<hr className="mx-auto border-solid border-b-1 border-slate-500 w-11/12" />
</>

  )
}

export default Navbar
