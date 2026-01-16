import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const[userData,setUserData]=useState([])
  const [index,setIndex]=useState(1)

  const getData=async () => {
    const res=await axios.get( `https://picsum.photos/v2/list?page=${index}&limit=10 `)
   setUserData(res.data)
   console.log(res.data);
   
  }

  useEffect(() => {
    getData()
  },[index])

  let printUserData=<h3 className='text-xl text-gray-300 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black p-4 overflow-auto  text-white h-screen'>
      
        <div className='flex flex-wrap h-[82%] gap-20 p-4'>
          {/* {userData.map(function(elem,idx){
            return <div key={idx}>{elem.author}<br/>{elem.url}</div>
          })} */}

          {printUserData}
        </div>

        <div className='flex justify-center items-center gap-10 p-10'>
          <button onClick={() =>{
            if(index>1){
              setUserData([])
              setIndex(index-1)
            }
          }}
          style={{opacity:index==1?0.5:1}}
           className=' bg-amber-300 text-sm cursor-pointer active:scale-95 rounded text-black px-4 py-2 font-semibold'>
            prev
            </button>
            <h3>PAGE {index}</h3>
          <button onClick={() =>{
            setUserData([])
            setIndex(index+1)
          }}
           className=' bg-amber-300 text-sm cursor-pointer active:scale-95 rounded text-black px-4 py-2 font-semibold'>next</button>
        </div>

        <div className='flex justify-center items-center gap-10 '>
          <button onClick={() => {
            setIndex(1)
          }} 
           className=' bg-amber-300 text-sm cursor-pointer active:scale-95 rounded text-black px-4 py-2 font-semibold'>Return to 1</button>
        </div>
    </div>
  )
}

export default App