import React from 'react'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'

const App = () => {
  return (
    <div className="bg-gray-900 w-full h-screen text-white p-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div>
        <Navbar />
      </div>
      <div className="slider">
        <Slider />
      </div>
    </div>
  )
}

export default App
