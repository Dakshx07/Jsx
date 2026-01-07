import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1747851577288-c75149e91e1a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex asperiores eligendi, qui in pariatur.',
      tag: 'Satisfied',
      color:'pink'
    }, {
      img: 'https://images.unsplash.com/photo-1765530813405-d23f98fda0b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex asperiores eligendi, qui in pariatur.',
      tag: 'Undeserved',
      color:'orange'
    }, {
      img: 'https://images.unsplash.com/photo-1762262921971-4e0b259cc8b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex asperiores eligendi, qui in pariatur.',
      tag: 'UnderBanked',
      color:'green'
    },
    {
      img: 'https://images.unsplash.com/photo-1762262921971-4e0b259cc8b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex asperiores eligendi, qui in pariatur.',
      tag: 'UnderBanked',
      color:'indigo'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1747851577288-c75149e91e1a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex asperiores eligendi, qui in pariatur.',
      tag: 'Satisfied',
      color:'purple'
    },
  ]


  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App