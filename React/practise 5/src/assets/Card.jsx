import React from 'react'

const Card = (props) => {
  return (
    <div key={props.index} className='w-[18vw] h-[25vw] rounded-4xl gap-2 bg-[#746b6b]  border-2 border-[#9e9797] flex flex-col items-center pt-5'>

     <a href={props.elem.url}> <img className='w-[8vw] h-[8vw] rounded-full' src={props.elem.url} alt="" /></a>
      <h1 className='text-3xl font-bold'>{props.elem.user}</h1>
      <h2 className='text-2xl font-semibold text-blue-800'>{props.elem.role}</h2>
      <p className='font-medium'>{props.elem.desc}</p>
      <button onClick={()=>{props.deleteHandler(props.index)}} className='mt-15 bg-red-600 hover:bg-red-800 px-10 py-2 text-xl text-[#fff] font-bold border-2 border-[#4d4646] rounded-4xl '>Remove</button>
    </div>
    
  )
}

export default Card
