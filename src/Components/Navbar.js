import React from 'react'
import logo from '../assets/Tastetrove.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <header className="text-gray-600 body-font cursor-pointer ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <img src={logo} alt="" className='w-20 h-15'/>
   
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center">
    <Link to='/search' className="mr-5 hover:text-gray-900 hover:text-orange-500 "><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#c1c5cd",}} /> Search</Link>
      <Link to='/' className="mr-5 hover:text-gray-900 hover:text-orange-500 ">Home</Link>
      <Link className="mr-5 hover:text-gray-900 hover:text-orange-500">Offers</Link>
      <Link to='/about' className="mr-5 hover:text-gray-900 hover:text-orange-500">About</Link>
      <Link to='/contact' className="mr-5 hover:text-gray-900 hover:text-orange-500">Contact</Link>
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
