import axios from 'axios'

const App = () => {

  
  async function getData() {
    const res=await axios('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()

    console.log(res);
    console.log(data)
    
  }
  return (
    <div>
      <button style={{cursor:'pointer'}} onClick={getData}>getData</button>
    </div>
  )
}

export default App