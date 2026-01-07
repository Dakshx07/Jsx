import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
  return (
     <div className='card'>
        <div className="top">
          <img src={props.img} alt="" />
         <button>Save <Bookmark size={12}/></button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className='center-tag'>
            <h4>{props.TAG1}</h4>
            <h4>{props.TAG2}</h4>
          </div>
        </div>

        <div className="bottom">
          <div className='bottomText'>
              <h3>${props.pay}/hr</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
       
        </div>

      </div>
  )
}

export default Card