import { Popover } from '@mui/material';
import React from 'react';
import DarkMode from './components/DarkMode';
import { DarkModeTypes } from 'src/app/types';

interface IButtonConfigsProps {
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: (value: HTMLButtonElement | null) => void;
  theme: DarkModeTypes;
  setTheme: (value: DarkModeTypes) => void;
}

export default function ButtonConfigs({
  anchorEl,
  setAnchorEl,
  theme,
  setTheme,
}: IButtonConfigsProps) {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <DarkMode theme={theme} setTheme={setTheme} />
    </Popover>
  );
}
