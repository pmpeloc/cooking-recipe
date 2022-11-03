import { FC } from 'react';
import { Drawer, Toolbar } from '@mui/material';
import Image from 'next/image';

export const Aside: FC = () => {
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
          borderRight: 'none',
        },
      }}>
      <Toolbar />
      <Image
        src='/hero-left.png'
        style={{ overflow: 'hidden' }}
        width='341'
        height='944'
        alt='Comidas'
        priority={true}
      />
    </Drawer>
  );
};
