import React from 'react'
import Link from 'next/link';
import useStore from '../store';
const SuggestedAccount = ({user}) => {
  const setAccount = useStore(state => state.setAccount)
  return (
    <div className=' w-4/5 mx-auto text-xs rounded-md bg-blue-300 my-4  flex justify-between items-center px-2 py-2' > 
    <div>
    <img className='rounded-full' src={user.profile_image_url_https} alt="" />
    <p className=' text-white'>@{user.screen_name}</p>

    </div>
    <p className=' text-white'>{user.name}</p>
    <button className='bg-red-600 px-4  py-1 rounded-2xl text-white' onClick={()=>setAccount(user.screen_name)}>

      <Link href='/timeline'>See</Link>
    </button>
    </div>
  )
}

export default SuggestedAccount