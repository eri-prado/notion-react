import React, { ComponentProps, ReactNode } from 'react';

export interface BubbleButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export default function BubbleButton(props: BubbleButtonProps) {
  return (
    <button
      className='p-2 text-black text-sm flex items-center gap-1.5 font-medium leading-none hover:bg-gray-100 data-[active=true]:text-violet-400'
      {...props}
    />
  );
}
