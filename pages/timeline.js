import Link from 'next/link';
import React from 'react';
import useStore from '../store';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Timeline = () => {
  const account = useStore((state) => state.selectedAccount);
  return (
    <div className='text-white h-screen bg-emerald-600 flex  flex-col text-xl w-full md:w-1/2 mx-auto'>
      <div className='bg-blue-600 h-16 flex justify-between p-4 items-center fixed top-0 left-0 right-0'>
        <Link href='/'> Back</Link>
      <p>@{account}</p>
      </div>
      <div className='mt-16'>

      <TwitterTimelineEmbed sourceType='profile' screenName={account} />
      </div>
    </div>
  );
};

export default Timeline;
