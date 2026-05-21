import axios from 'axios'
import React from 'react'

const Card = ({elem,fetchNotes}) => {

async function deleteHandler  (noteId){
 const response = await axios.delete(`http://localhost:3000/api/notespad/${noteId}`).then(()=>{console.log("note is deleted successfully");
  fetchNotes();
 })
 
 }
  return (
    <div id={elem._id}    className='relative py-10 px-10 gap-4 max-w-sm min-h-100 rounded-2xl flex flex-col items-center bg-zinc-800  shadow-lg hover:scale-105 duration-300'>
        <h1 className='text-4xl font-extrabold'>{elem.title}</h1>
        <p className='text-xl font-semibold'>{elem.description}</p>
        <button className='absolute bottom-0 bg-red-600 px-6 py-2 rounded-3xl hover:bg-red-800 hover:active:scale-105' onClick={()=>{deleteHandler(elem._id)}}>Delete </button>
      </div>
  )
}

export default Card
