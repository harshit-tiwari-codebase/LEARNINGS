import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")

  const MAX = 10

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-900 to-black'>
      
      <div className='flex flex-col gap-6 items-center bg-white/10 backdrop-blur-lg px-10 py-8 rounded-2xl shadow-2xl border border-white/20'>
        
        {/* Counter Display */}
        <h1 className='text-white text-5xl font-bold'>
          {count}
        </h1>

        {/* Buttons */}
        <div className='flex gap-4'>
          
          <button 
            onClick={() => setCount(prev => (prev < MAX ? prev + 1 : prev))}
            className='px-5 py-2 bg-green-500 text-white rounded-xl hover:scale-105 transition'
          >
            + Increase
          </button>

          <button 
            onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))}
            className='px-5 py-2 bg-red-500 text-white rounded-xl hover:scale-105 transition'
          >
            - Decrease
          </button>

        </div>

        {/* Reset */}
        <button 
          onClick={() => setCount(0)}
          className='px-6 py-2 bg-yellow-500 text-black rounded-xl hover:scale-105 transition'
        >
          Reset
        </button>

        {/* Input Section */}
        <div className='flex gap-3 mt-4'>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Enter number'
            className='px-4 py-2 rounded-lg outline-none'
          />

          <button
            onClick={() => setCount(Number(input))}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:scale-105 transition'
          >
            Set Value
          </button>
        </div>

        {/* Limit Info */}
        <p className='text-gray-300 text-sm'>
          Max Limit: {MAX}
        </p>

      </div>
    </div>
  )
}

export default App