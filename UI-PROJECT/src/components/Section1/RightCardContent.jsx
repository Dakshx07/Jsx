import React from 'react'
import {ArrowRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
     <div className='left-0 top-0 absolute h-full w-fyll  p-8 flex flex-col justify-between'>
                <h2 className='bg-white text-xl font-semi-bold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
                <div>
                <p className='text-lg leading-relaxed  text-white mb-25'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}}  className=' font-medium text-white px-8 py-2 rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' font-semibold text-white px-4 py-2 rounded-full'><ArrowRight /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent