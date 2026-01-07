import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
   <div className='parent'>
     
      <Card user='aman' age={18} img='https://plus.unsplash.com/premium_photo-1670279526923-7922f5266d21?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVuc3BhbHNofGVufDB8fDB8fHww'/>
      <Card user='daksh' age={20} img='https://images.unsplash.com/photo-1638895086783-992727960f27?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVuc3BhbHNofGVufDB8fDB8fHww'/>
      <Card user='hello' age={9} img='https://images.unsplash.com/photo-1716547286289-3e650d7bdf7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVuc3BhbHNofGVufDB8fDB8fHww'/>
     
   </div>
  )
}

export default App