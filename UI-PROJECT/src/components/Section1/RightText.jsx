import React from 'react'
import {ArrowRight } from 'lucide-react'
import RigthCard from './RigthCard'

const RightText = (props) => {
  return (
    <div id='right' className='h-full w-2/3 flex overflow-x-auto rounded-4xl flex-nowrap gap-4 mb-14'>
        {props.users.map(function(elem,idx){
          return <RigthCard key={idx} color={elem.color} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
        })}
       
    </div>
    // <div className='h-full w-2/3 bg-blue-500 flex gap-4 mb-14'>
        
    //   <div className='h-full w-[18vw] rounded-3xl flex flex-col justify-between bg-red-500'>
        
    //     <div className='p-7'>
    //         <div className='bg-white rounded-full w-10 h-10 py-2 px-4'>1</div>
    //         <h1 className="mt-62 text-base leading-relaxed text-black">Prime customers,<br /> that have access <br /> to bank credit <br /> and are statisfied <br /> with the current <br /> product</h1>

    //       <div className='inline-flex items-center bg-[#4B6FFB] rounded-full overflow-hidden mt-20'>
    //         <span className='px-6 py-2 font-medium text-white text-base'>Statified</span>
    //         <span className='w-10 h-10  flex items-center justify-center'><ArrowRight size={24} color='white' strokeWidth={2} /></span>
    //       </div>
    //     </div>
    //   </div>
      
     
    // </div>
  )
}

export default RightText