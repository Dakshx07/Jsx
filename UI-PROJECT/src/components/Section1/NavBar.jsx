import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between px-15 py-10'>
       <button className='bg-black text-white px-6 py-2 rounded-full uppercase'>Target  Audience</button>
       <h4 className='uppercase bg-gray-200 px-6 py-2 rounded-full tracking-wider text-sm'>Digital Banking Platform</h4>
    </div>
  )
}

export default NavBar