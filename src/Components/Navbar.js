import React from 'react'
import logo from '../assets/Tastetrove.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <header class="text-gray-600 body-font cursor-pointer ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <img src={logo} alt="" className='w-20 h-15'/>
    
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center">
    <a class="mr-5 hover:text-gray-900 hover:text-orange-500 "><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#c1c5cd",}} /> Search</a>
      <a class="mr-5 hover:text-gray-900 hover:text-orange-500 ">Home</a>
      <a class="mr-5 hover:text-gray-900 hover:text-orange-500">About</a>
      <a class="mr-5 hover:text-gray-900 hover:text-orange-500">Offers</a>
      <a class="mr-5 hover:text-gray-900 hover:text-orange-500">Contact</a>
    </nav>
    <button class="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-orange-500 rounded text-base mt-4 md:mt-0 text-black">Login
    </button>
  </div>
</header>
  )
}

export default Navbar
