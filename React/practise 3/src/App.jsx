import React, { useState } from 'react'

const App = () => {

  const [songs, setSongs] = useState([
    {
      id: 1,
      name: "Shape of You",
      description: "Popular song by Ed Sheeran",
      selected: false
    },
    {
      id: 2,
      name: "Blinding Lights",
      description: "Hit song by The Weeknd",
      selected: true
    },
    {
      id: 3,
      name: "Believer",
      description: "Energetic song by Imagine Dragons",
      selected: false
    }
  ])

  const handleClick = (id) => {
    const updatedSongs = songs.map((song) => {
      if (song.id === id) {
        return { ...song, selected: !song.selected }
      }
      return song
    })

    setSongs(updatedSongs)
  }

  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col gap-6 items-center justify-center">

      {songs.map((song) => (
        
        <div 
          key={song.id} 
          className={`px-6 py-4 rounded-2xl w-80 flex flex-col items-center space-y-2 shadow-lg 
          ${song.selected ? "bg-green-200" : "bg-white"}`}
        >
          
          <h1 className="text-lg font-bold text-gray-800">
            {song.name}
          </h1>

          <p className="text-sm text-gray-600 text-center">
            {song.description}
          </p>

          <button 
            onClick={() => handleClick(song.id)}
            className={`px-4 py-2 rounded-xl text-white 
            ${song.selected ? "bg-green-600" : "bg-blue-600"}`}
          >
            {song.selected ? "Selected" : "Select"}
          </button>

        </div>

      ))}

    </div>
  )
}

export default App