import React from 'react'

const Card = (props) => {
  return (
    <div className= 'w-full bg-[#fff] sm:h-[25vw] sm:w-[20vw] flex flex-col px-2 py-2 gap-3 items-center rounded-3xl'>
      <h1 className='text-2xl font-bold ' >{props.user.name}</h1>
      <h2 className='text-xl font-medium text-blue-600'>{props.user.email}</h2>
      <h2 className='text-xl font-medium text-green-600'>{props.user.phone}</h2>
      <h2 className='text-2xl font-extrabold mt-20'  >{props.user.company.name}</h2>
      <p>{props.user.company.name.bs}</p>
   <button className='relative overflow-hidden rounded-full px-5 py-2 bg-black text-white font-mono group'>
  <span className='relative z-10'>Contact Now</span>

  <span className='absolute left-[-100%] top-0 h-full w-full bg-white/20 transform skew-x-12 transition-all duration-500 group-hover:left-[100%]'></span>
</button>
    </div>
  )
}

export default Card
