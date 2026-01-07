import React from 'react'
import {ArrowRight } from 'lucide-react'
import RightCardContent from './RightCardContent'
const RigthCard = (props) => {
  return (
    <div  className='h-full w-80 shrink-0  bg-amber-300 overflow-hidden relative rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent id={props.id} color={props.color} tag={props.tag} intro={props.intro}/>
    </div>
  )
}


export default RigthCard