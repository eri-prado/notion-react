import React from 'react';
import { BiExpandVertical } from 'react-icons/bi';
import { MdSearch, MdSettings, MdArrowForwardIos } from 'react-icons/md';
import { HiOutlineClock, HiPlusCircle, HiOutlinePlus } from 'react-icons/hi';
import { TbFile } from 'react-icons/tb';

export default function Sidebar() {
  return (
    <div className='flex flex-col group'>
      <button className='flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-900 px-4 py-3 mb-1'>
        <span className='py-0.5 px-1.5 bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-200 rounded text-xs'>
          U
        </span>
        <span className='text-sm text-zinc-700 dark:text-zinc-200 font-semibold'>{`Username's Notion`}</span>
        <span className='text-zinc-500 dark:text-zinc-200'>
          <BiExpandVertical fontSize={'14px'} />
        </span>
      </button>
      <div className='flex flex-col text-sm'>
        <button className='flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-medium hover:bg-zinc-200 px-4 py-1 dark:hover:bg-zinc-900' >
          <MdSearch fontSize={'18px'} />
          Search
        </button>
        <button className='flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-medium hover:bg-zinc-200 px-4  py-1 dark:hover:bg-zinc-900'>
          <HiOutlineClock fontSize={'16px'} />
          Updates
        </button>
        <button className='flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-medium hover:bg-zinc-200 px-4  py-1 dark:hover:bg-zinc-900'>
          <MdSettings fontSize={'18px'} />
          Settings & members
        </button>
        <button className='flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-medium hover:bg-zinc-200 px-4  py-1 dark:hover:bg-zinc-900'>
          <HiPlusCircle fontSize={'18px'} />
          Add page
        </button>
      </div>
      <div className='flex flex-col text-sm mt-4'>
        <button className='flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-900 px-4 py-1'>
          <span className='text-zinc-400'>
            <MdArrowForwardIos fontSize={'12px'} />
          </span>
          <span className='text-zinc-400'>
            <TbFile fontSize={'18px'} />
          </span>
          <span className='text-sm text-zinc-700 dark:text-zinc-400 font-semibold'>Anotações</span>
        </button>
        <button className='flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-900 px-4 py-1'>
          <span className='text-zinc-400 '>
            <HiOutlinePlus fontSize={'14px'} />
          </span>
          <span className='text-sm text-zinc-700 dark:text-zinc-400'>Add a page</span>
        </button>
      </div>
    </div>
  );
}
