import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch=useDispatch()

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, settask] = useState(() => {
    const saved = localStorage.getItem('notes')
    return saved ? JSON.parse(saved) : []
  })


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(task))
  }, [task])



  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, detail })

    settask(copyTask)
    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)

    settask(copyTask)

  }

  return (
    <div className='min-h-screen lg:flex bg-black text-white '>

      <form className='flex flex-col lg:w-1/2 items-start gap-4  p-10'
        onSubmit={(e) => {
          submitHandler(e)
        }}>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* INPUT FOR HEADING */}
        <input
          className='py-2 w-full font-medium outline-none px-5 border-2 rounded'
          type="text"
          placeholder='Enter Notes Heading..'
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* INPUT FOR DESC */}
        <textarea
          className='py-2 w-full font-medium outline-none h-32 px-5 border-2 rounded'
          type="text"
          placeholder='Enter Description'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        />

        <button className='bg-white w-full font-medium outline-none text-black py-2 px-5 rounded active:scale-95 border-2'>
          Add Notes</button>


      </form>


      <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='notes flex flex-wrap items-start gap-5 mt-5 max-h-[80vh] overflow-y-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className='relative flex flex-col justify-between items-start overflow-auto rounded-2xl text-black bg-cover bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qMZEJSG6vy2aOHZ7uuSF75vX7cOAgTl3sQ&s")] h-80 w-76 pt-9 pb-4 px-4'>

              <div>
                <h3 className='leading-tight text-2xl font-bold'>{elem.title}</h3>
                <p className='mt-4  leading-tight font-medium text-gray-500'>{elem.detail}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }}
                className='w-full bg-red-500 cursor-pointer active:scale-95 text-white rounded font-bold py-1 text-xs'>
                Delete
              </button>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App