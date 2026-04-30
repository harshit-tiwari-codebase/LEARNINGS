import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-900 px-8 py-4 text-amber-50 flex justify-between'>
      <h1>NAVBAR</h1>
      <div className='flex gap-6'>
       <Link to= "/" >Home</Link>
       <Link to= "/Product" >Product</Link>
       <Link to= "/About" >About Us</Link>
      </div>
    </div>
  )
}

export default Navbar
