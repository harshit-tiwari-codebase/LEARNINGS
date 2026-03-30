import React from 'react'
import Men from './Components/Men'
import Women from './Components/Women'

const App = () => {
  const gender = "female"

  return (
    <div className="text-center mt-16">
      
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6">
        Gender Selection
      </h1>

      {/* Card */}
      <div className="border rounded-lg p-6 w-72 mx-auto shadow">
        
        {gender === "male" ? <Men /> : <Women />}
      
      </div>

    </div>
  )
}

export default App