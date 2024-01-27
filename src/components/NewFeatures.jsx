import React from 'react'

const NewFeatures = ({ imgUrl, title, subtitle }) => {
  return (
    <div className='flex flex-col '>
        <div className='my-2 flex items-center justify-center bg-[#323f5d] w-[60px] h-[60px] rounded-[15px] '>
            <img src="/headset.svg" alt="" className='w-1/2 h-1/2 object-contain' />
        </div>
        <h1 className='text-[24px] text-white font-bold'>{title}</h1>
        <p className='text-[#c7c7f8]'>{subtitle}</p>
    </div>
  )
}

export default NewFeatures