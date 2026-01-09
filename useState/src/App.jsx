import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count,setCount]=useState({name:'daksh',age:20})

  const btnClicked=()=>{
    const newCount={...count}
    newCount.name='anmana'
    setCount(newCount)
    console.log(newCount);
 
  }

  // const [arr,setArr]=useState([10,20,30])

  // const btnClicked=() =>{
  //   const newArr=[...arr]
  //   newArr[2]=33
  //   newArr.push(99,100)
  //   newArr.pop()
  //   console.log(newArr.length);
    
  //   setArr(newArr)
  // }

  return (
    <div className='parent'>
     
          {/* {arr.map(function(elem,idx){
            return <div key={idx} className='arr'>
              <h1>{elem}</h1>
              </div>
          })} */}

          <h1>{count.name}, {count.age}</h1>
    
        <button onClick={() =>{
          btnClicked()
        }}>Click</button>
    </div>
  )
}

export default App