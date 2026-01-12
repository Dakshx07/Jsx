import React, { use } from 'react'

const App = () => {
 
  const user={
    name:'daksh',
    age:18
  }

  localStorage.setItem('user',JSON.stringify(user))

  const gtee=JSON.parse(localStorage.getItem('user'))
  console.log((gtee));
  
  
  return (
    <div>App</div>
  )
}

export default App