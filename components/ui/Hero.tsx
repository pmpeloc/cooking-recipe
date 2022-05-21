import { FC } from 'react';
import { Drawer, Toolbar } from '@mui/material';
import Image from 'next/image';

export const Hero: FC = () => {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: '342px',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: '342px',
          height: '944px',
          boxSizing: 'border-box',
        },
      }}>
      <Toolbar />
      <Image src='/hero-left.png' width='342px' height='944px' alt='Comidas' />
    </Drawer>
  );
};
