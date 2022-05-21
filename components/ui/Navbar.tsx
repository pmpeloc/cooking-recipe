/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { AppBar, Toolbar } from '@mui/material';

export const Navbar: FC = () => {
  return (
    <AppBar
      position='fixed'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <img
          src='/logo-light.svg'
          alt='Nubimetrics'
          style={{ marginTop: '.5rem' }}
        />
      </Toolbar>
    </AppBar>
  );
};
