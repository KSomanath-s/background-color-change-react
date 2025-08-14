import React from 'react'

const ColorButton = ({colorHandle}) => {
    return (
        <>
            <button onClick={colorHandle} className='py-1 px-4 rounded bg-blue-500 text-white'>Change Color</button>
        </>
    )
}

export default ColorButton