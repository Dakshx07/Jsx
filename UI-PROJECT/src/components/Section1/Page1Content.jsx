import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    <div className='pb-14 pt-7 flex gap-10 items-center px-18 h-[90vh]'>
        <LeftText />
        <RightText users={props.users}/>
        
    </div>
  )
}

export default Page1Content