import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {

  const [note,setnote] = useState([]);
  const [title,settitle] = useState("");
  const [desc,setdesc] = useState("");

  async function fetchNotes() {
    try{
      const response = await axios.get(
        "https://learnings-4.onrender.com/api/notespad"
      );

      setnote(response.data.notes);

    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchNotes();
  },[]);

  async function submitHandler(e){

    e.preventDefault();

    if(!title || !desc){
      return alert("Fill all fields");
    }

    try{

      await axios.post(
        "https://learnings-4.onrender.com/api/notespad",
        {
          title,
          description:desc
        }
      );

      settitle("");
      setdesc("");

      fetchNotes();

    }
    catch(err){
      console.log(err);
    }
  }

  return (

    <div className="min-h-screen bg-[#0F172A] text-white">

      {/* Navbar */}

      <div className="sticky top-0 z-50 backdrop-blur-lg bg-black/20 border-b border-zinc-800">

        <div className="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center">

          <h1 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">

            NotesFlow

          </h1>

          <p className="text-zinc-400">
            {note.length} Notes
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto p-10">

  

        <form
        onSubmit={submitHandler}
        className="mb-12 bg-[#1E293B] rounded-3xl p-8 shadow-2xl border border-zinc-700"
        >

          <h2 className="text-2xl font-bold mb-5">
            Create Note
          </h2>

          <div className="flex flex-col gap-4">

            <input
            value={title}
            onChange={(e)=>settitle(e.target.value)}
            placeholder="Note title..."
            className="
            p-4
            rounded-xl
            bg-zinc-900
            outline-none
            border border-zinc-700
            focus:border-blue-500
            "
            />

            <textarea
            value={desc}
            onChange={(e)=>setdesc(e.target.value)}
            placeholder="Write something..."
            className="
            p-4
            h-32
            rounded-xl
            bg-zinc-900
            outline-none
            border border-zinc-700
            focus:border-blue-500
            "
            />

            <button
            className="
            bg-blue-600
            py-4
            rounded-xl
            font-semibold
            hover:bg-blue-700
            duration-300
            "
            >
              Create Note
            </button>

          </div>

        </form>

        {/* Notes */}

        {
          note.length===0
          ?
          (
            <div className="text-center text-zinc-500 text-2xl">

              No Notes Found

            </div>
          )
          :
          (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {
                note.map((elem)=>(
                  <Card
                  key={elem._id}
                  elem={elem}
                  fetchNotes={fetchNotes}
                  />
                ))
              }

            </div>
          )
        }

      </div>

    </div>

  )
}

export default App;