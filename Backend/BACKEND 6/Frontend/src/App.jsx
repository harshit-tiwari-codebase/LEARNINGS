import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {

  const [note, setnote] = useState([]);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  // Fetch notes
  async function fetchNotes() {

    try {

      const response = await axios.get(
        "http://localhost:3000/api/notespad"
      );

      setnote(response.data.notes);

    } 
    
    catch (error) {

      console.log(error);

    }

  }

  useEffect(() => {

    fetchNotes();

  }, []);


  // Submit form
  async function submitHandler(e) {

    e.preventDefault();

    if (!title || !desc) {

      return alert("Please fill all fields");

    }

    try {

      const response = await axios.post(
        "http://localhost:3000/api/notespad",
        {
          title,
          description: desc
        }
      );

      console.log("Note created:", response.data);

      // clear inputs
      settitle("");
      setdesc("");

      // refresh notes
      fetchNotes();

    } 
    
    catch (error) {

      console.log(error);

    }

  }

  return (

    <div className="min-h-screen w-full bg-zinc-700 text-white px-10 py-10">

      {/* Form */}

      <form
        onSubmit={submitHandler}
        className="flex flex-wrap gap-4 mb-10"
      >

        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          className="
          px-4 py-3
          rounded-xl
          border-2 border-zinc-500
          bg-zinc-800
          outline-none
          focus:border-blue-500
          "
          type="text"
          placeholder="Enter title"
        />

        <input
          onChange={(e) => setdesc(e.target.value)}
          value={desc}
          className="
          px-4 py-3
          rounded-xl
          border-2 border-zinc-500
          bg-zinc-800
          outline-none
          focus:border-blue-500
          flex-1
          "
          type="text"
          placeholder="Enter description"
        />

        <button
          className="
          bg-blue-600
          px-6 py-3
          rounded-xl
          hover:bg-blue-700
          duration-300
          "
        >
          Create Note
        </button>

      </form>


      {/* Notes Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {note.map((elem) => (

          <Card
            key={elem._id}
            elem={elem}
            fetchNotes={ fetchNotes}
          />

        ))}

      </div>

    </div>

  );

};

export default App;