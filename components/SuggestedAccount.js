import React from 'react'

const SuggestedAccount = ({user}) => {
  return (
    <div className=' text-2xl bg-blue-300 my-4 p-2 flex justify-around' > 
    
    <p className='text-3xl'>{user.name}</p>
    </div>
  )
}

export default SuggestedAccount