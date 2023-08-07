import { TbFile } from 'react-icons/tb';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Popover } from '@mui/material';
import { useEffect, useState } from 'react';
import ButtonConfigs from '../ButtonConfigs';
import { setTema } from 'src/app/functions/setTema';
import { DarkModeTypes } from 'src/app/types';

export default function HeaderEditor() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [theme, setTheme] = useState<DarkModeTypes>('system');

  useEffect(() => {
    const getThemeStorage = localStorage.getItem('theme');

    if (getThemeStorage === ('dark' || 'light' || 'system'))
      setTheme(getThemeStorage);
  }, []);

  useEffect(() => {
    setTema(theme);
  }, [theme]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className='flex justify-between py-1 px-2'>
      <ButtonConfigs
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        theme={theme}
        setTheme={setTheme}
      />
      <button className='flex items-center gap-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 px-2 py-1'>
        <span className='text-zinc-400'>
          <TbFile fontSize={'18px'} />
        </span>
        <span className='text-sm text-zinc-700 dark:text-zinc-400 font-normal'>Anotações</span>
      </button>
      <button
        className=' hover:bg-zinc-200 dark:hover:bg-zinc-800 px-2 py-1 text-zinc-600'
        onClick={handleClick}
      >
        <FiMoreHorizontal fontSize={'18px'} />
      </button>
    </div>
  );
}
