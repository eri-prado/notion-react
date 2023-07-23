/* eslint-disable @next/next/no-img-element */
import React, { ComponentProps, ReactNode } from 'react';

export interface ButtonMenuProps extends ComponentProps<'button'> {
  children: ReactNode
}

export default function ButtonMenu(props: ButtonMenuProps) {
  return (
    <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-gray-50"  {...props} />
  );
}
