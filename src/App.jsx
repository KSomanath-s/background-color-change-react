import React, { useState } from 'react'
import ColorButton from './components/ColorButton'

const App = () => {
  const [color, setColor] = useState('');
  // Functio
  const colorHandle = () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex])
  }
  return (
    <>
      <div
        style={{
          backgroundColor: color,
        }}
        className={`h-screen flex flex-col items-center justify-center`}
      >
        <h1 className='ont-bold text-black text-2xl mb-4'>Background Color Changer</h1>

        <ColorButton colorHandle={colorHandle} />
      </div>
    </>
  )
}

export default App