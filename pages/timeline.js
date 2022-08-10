import Link from 'next/link';
import React from 'react';
import useStore from '../store';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useEffect } from 'react';

const Timeline = () => {

  useEffect(() => {
if(!document) return
    const timeline = document.querySelector('.timeline-Widget')
    console.log('timleline!', timeline)
    timeline?.addEventListener('click', ()=>{alert('timeline')})
    timeline?.replaceWith(timeline.cloneNode(true))
 
  }, [])
  
  const account = useStore((state) => state.selectedAccount);
  return (
    <div className='text-white h-screen bg-blue-500 flex  flex-col text-xl w-full md:w-1/2 mx-auto'>
      <div className='bg-blue-600 h-16 flex justify-between p-4 items-center fixed top-0 left-0 right-0'>
        <Link href='/'> Back</Link>
      <p>@{account}</p>
      </div>

      <div className='mt-16'>
        {

          <TwitterTimelineEmbed sourceType='profile' screenName={account} /> || <p>Loading...</p>

        }

      </div>
    </div>
  );
};

export default Timeline;
