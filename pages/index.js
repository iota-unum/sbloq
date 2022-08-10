import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverHandler,
  Switch,
} from '@material-tailwind/react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import SearchModal from '../components/SearchModal';
import { getSuggestions } from '../helpers/getSuggestions';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className='bg-teal-500  h-screen text-sm md:text-lg bg-emerald-600 flex justify-center flex-col w-full  md:w-1/3 lg:w-1/4  mx-auto'>
      <SearchModal open={true}/>
      {/* <h1>Next-Tailwind</h1>
      <Button className='w-32 mx-auto my-auto rounded-full bg-indigo-500 text-white' color='yellow' onClick={handleOpen}>
        prova
      </Button>

      <Popover>
        <PopoverHandler>
          <Button variant='gradient'>Show Popover</Button>
        </PopoverHandler>

        <PopoverContent>
          <div className='text-green-500 flex justify-between gap-5'>
            <Button>uno</Button>
            <Button className='rounded-full' color='yellow'>
              uno
            </Button>
            <Popover>
              <PopoverHandler>
                <Button color='indigo'>uno</Button>
              </PopoverHandler>
              <PopoverContent>Inception</PopoverContent>
            </Popover>
          </div>
        </PopoverContent>
      </Popover>
      <Menu>
        <MenuHandler>
          <Button variant='gradient'>Open Menu</Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
      <Dialog
        size='md'
        className=' min-w-full rounded-none h-full text-blue-300 bg-red-400'
        open={open}
        handler={handleOpen}
      >
        <DialogHeader className='text-yellow-500'>
          Its a simple dialog.
        </DialogHeader>
        <DialogBody divider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          reprehenderit omnis perspiciatis aut odit! Unde architecto
          perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
          praesentium magni corrupti explicabo!
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'
          >
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' color='green' onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <Switch  color="secondary"></Switch> */}
    </div>
  );
}
