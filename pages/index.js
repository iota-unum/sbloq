import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import SearchModal from '../components/SearchModal';
import { getSuggestions } from '../helpers/getSuggestions';
import styles from '../styles/Home.module.css';

export default function Home() {



 
  return (
    <div className='text-emerald-300 h-screen bg-emerald-600 flex justify-center flex-col text-7xl w-full md:w-1/2 mx-auto'>
      {/* <h1>Next-Tailwind</h1> */}
      <SearchModal />
    </div>
  );
}

