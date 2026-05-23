import axios from "axios";
import React from "react";
import { useState } from "react";

const Card = ({ elem, fetchNotes }) => {
  const [isEditing, setisEditing] = useState(false);
  const [editDesc, seteditDesc] = useState(elem.description);

  async function deleteHandler(noteId) {
   await axios
      .delete(`https://learnings-4.onrender.com/api/notespad/${noteId}`)
      .then(() => {
        console.log("note is deleted successfully");
        fetchNotes();
      });
  }

  async function updateHandler(elemId) {
    // console.log("updateHandler is woerking");
     await axios.patch(`https://learnings-4.onrender.com/api/notespad/${elemId}`, {description : editDesc}).then(()=>{fetchNotes()})
    
  }
  return (
  <div
    id={elem._id}
    className="
    relative
    bg-[#1E293B]
    border border-zinc-700
    rounded-3xl
    p-8
    min-h-87.5
    flex flex-col
    shadow-xl
    hover:-translate-y-2
    hover:shadow-2xl
    duration-300
    overflow-hidden
    "
  >

    {isEditing && (
      <div
        className="
        absolute
        inset-0
        bg-black/80
        backdrop-blur-md
        z-30
        p-6
        flex
        flex-col
        gap-5
        "
      >
        <h2 className="text-2xl font-bold text-white">
          Edit Note
        </h2>

        <textarea
          onChange={(e) => {
            seteditDesc(e.target.value);
          }}
          value={editDesc}
          className="
          flex-1
          bg-zinc-900
          rounded-2xl
          p-4
          outline-none
          border
          border-zinc-700
          focus:border-blue-500
          resize-none
          text-white
          "
        />

        <div className="flex gap-4">

          <button
            className="
            flex-1
            bg-green-600
            py-3
            rounded-xl
            font-semibold
            hover:bg-green-700
            duration-300
            "
            onClick={() => {
              updateHandler(elem._id);
            }}
          >
            Save
          </button>

          <button
            className="
            flex-1
            bg-red-600
            py-3
            rounded-xl
            font-semibold
            hover:bg-red-700
            duration-300
            "
            onClick={() => {
              setisEditing(false);
            }}
          >
            Cancel
          </button>

        </div>
      </div>
    )}

    <div className="mb-5">

      <h1
        className="
        text-3xl
        font-bold
        text-white
        mb-4
        line-clamp-2
        "
      >
        {elem.title}
      </h1>

      <p
        className="
        text-zinc-300
        leading-7
        line-clamp-5
        "
      >
        {elem.description}
      </p>

    </div>

    <div className="mt-auto flex gap-4">

      <button
        className="
        flex-1
        bg-red-600
        py-3
        rounded-xl
        hover:bg-red-700
        duration-300
        "
        onClick={() => {
          deleteHandler(elem._id);
        }}
      >
        Delete
      </button>

      <button
        className="
        flex-1
        bg-blue-600
        py-3
        rounded-xl
        hover:bg-blue-700
        duration-300
        "
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
