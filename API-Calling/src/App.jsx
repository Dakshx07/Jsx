import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data,setData]=useState([])

  
  // async function getData() {
  //   const res=await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data=await res.json()

  //   console.log(res);
  //   console.log(data)
    
  // }


  const getData=async () =>{
    const res=await axios.get('https://picsum.photos/v2/list')

    setData(res.data)
    
    
  }
  return (
    <div>
      <button style={{cursor:'pointer'}} onClick={getData}>getData</button>
      <div>
        {data.map(function(elem,idx){
          return <div key={idx}>{elem.url}</div>
        })}
      </div>
    </div>
  )
}

export default App