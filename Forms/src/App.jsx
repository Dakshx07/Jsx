import React from 'react'
import { useState } from 'react'
const App = () => {

  const [title,setTitle]=useState('')

  const submitHandler=(e) =>{
    e.preventDefault()
    console.log('form submitted',title);
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}>
        <input  onChange={(e) =>{
          setTitle(e.target.value);
          
        }}
        value={title}
        type='text' 
        placeholder='Enter your name'
        />
        <button>Submitt</button>
      </form>
    </div>
  )
}

export default App