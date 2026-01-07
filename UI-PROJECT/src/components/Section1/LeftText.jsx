import React from 'react'
import { ArrowUpRight } from 'lucide-react'
const LeftText = () => {
  return (
    <div className='h-full w-1/3 '>
      <div className='p-3'>
      <div className='text-5xl font-bold w-50 mb-10 leading-13 '>
        <h1>Prospective</h1>
        <h1 className='text-gray-500 w-55 px-1 mt-0.5 rounded-full'>customer</h1>
        <h1>Segementation</h1>
        </div >
        <p className='w-62 text-lg text-gray-500'>Depending on the customer <br /> statifaction and access <br /> to banking products, potential<br />target auidence can be divided into three groups</p>
      </div>

      <div className='mt-52'>
        <ArrowUpRight size={48}/>
      </div>

    </div>
  )
}

export default LeftText