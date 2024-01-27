import React from 'react'

const Steps = ({ key, number, text }) => {
  return (
    <div className='flex justify-center my-5  items-center'>
        <div className='bg-[#323f5d] mx-2 p-4 rounded-[17px]'>
            <p className='text-white font-bold'>0{number}</p>
        </div>
        <div>
            <p className='text-[#c7c7c7] font-extralight'>{text}</p>
        </div>
    </div>
  )
}

export default Steps