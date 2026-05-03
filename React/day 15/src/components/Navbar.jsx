import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Navbar = () => {
  const name = useContext(UserDataContext)
  return (
   <div className=' w-full h-1/5 text-4xl text-amber-50 bg-blue-500'>
      <h1>This Is Navbar {name} </h1>
    </div>
  )
}

export default Navbar
