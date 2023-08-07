'use client';
import Editor from './components/Editor';
import HeaderEditor from './components/HeaderEditor';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <main className='min-h-screen p-8 text-zinc-900 dark:text-zinc-50 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
      <div className='bg-white dark:bg-zinc-900 w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]'>
        <aside className='bg-zinc-50 dark:bg-zinc-800 border-r-zinc-100'>
          <Sidebar />
        </aside>
        <main>
          <HeaderEditor />
          <Editor />
        </main>
      </div>
    </main>
  );
}
