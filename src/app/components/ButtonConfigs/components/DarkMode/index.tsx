import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import { DarkModeTypes } from 'src/app/types';

interface IDarkModeProps {
  theme: DarkModeTypes;
  setTheme: (value: DarkModeTypes) => void;
}

export default function DarkMode({ theme, setTheme }: IDarkModeProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    theme: DarkModeTypes
  ) => {
    setTheme(theme);
    localStorage.setItem('theme', theme || '');
  };

  return (
    <ToggleButtonGroup
      value={theme}
      exclusive
      onChange={handleClick}
      aria-label='theme'
    >
      <ToggleButton value='light' aria-label='left aligned'>
        Light
      </ToggleButton>
      <ToggleButton value='system' aria-label='centered'>
        System
      </ToggleButton>
      <ToggleButton value='dark' aria-label='right aligned'>
        Dark
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
