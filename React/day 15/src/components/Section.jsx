import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Section = () => {
   const name =  useContext(UserDataContext)
  return (
    <div className='h-3/5 w-full bg-zinc-800 text-4xl text-amber-50'>
      <h1>This Is Section {name} </h1>
    </div>
  )
}

export default Section
