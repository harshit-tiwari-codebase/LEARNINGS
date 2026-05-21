import axios from "axios";
import React from "react";
import { useState } from "react";

const Card = ({ elem, fetchNotes }) => {
  const [isEditing, setisEditing] = useState(false);
  const [editDesc, seteditDesc] = useState(elem.description);

  async function deleteHandler(noteId) {
   await axios
      .delete(`http://localhost:3000/api/notespad/${noteId}`)
      .then(() => {
        console.log("note is deleted successfully");
        fetchNotes();
      });
  }

  async function updateHandler(elemId) {
    // console.log("updateHandler is woerking");
     await axios.patch(`http://localhost:3000/api/notespad/${elemId}`, {description : editDesc}).then(()=>{fetchNotes()})
    
  }
  return (
    <div
      id={elem._id}
      className="relative py-10 px-10 gap-4 max-w-sm min-h-100 rounded-2xl flex flex-col items-center bg-zinc-800  shadow-lg hover:scale-105 duration-300 overflow-hidden"
    >
      {isEditing && (
        <div className="absolute h-full w-full bg-zinc-800  z-30 p-3">
          <textarea
             onChange={(e)=>{seteditDesc(e.target.value);
            }}
            value={editDesc}
            className="w-full h-1/2 bg-zinc-700 rounded-2xl px-2 py-2 "
          ></textarea>
          <div className="flex justify-center gap-4">
          
            <button 
            className=" bg-green-600 px-6 py-2 rounded-3xl hover:bg-green-800 hover:active:scale-105"
            onClick={()=>{updateHandler(elem._id)}}
           
            >Save</button>
            <button 
            className=" bg-red-600 px-6 py-2 rounded-3xl hover:bg-red-800 hover:active:scale-105"
            onClick={()=>{setisEditing(false)}}
            >
            
              Exit
            </button>
          </div>
        </div>
      )}
      <h1 className="text-4xl font-extrabold">{elem.title}</h1>
      <p className="text-xl font-semibold">{elem.description}</p>
      <div className="absolute bottom-0 flex justify-between">
        <button
          className=" bg-red-600 px-6 py-2 rounded-3xl hover:bg-red-800 hover:active:scale-105"
          onClick={() => {
            deleteHandler(elem._id);
          }}
        >
          Delete{" "}
        </button>
        <button
          className=" bg-blue-600 px-6 py-2 rounded-3xl hover:bg-blue-800 hover:active:scale-105"
          onClick={() => {
            setisEditing(true);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Card;
