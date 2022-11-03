/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery } from '@mui/material';

export const Navbar: FC = () => {
  const matches = useMediaQuery('(max-width:599px)');

  return (
    <AppBar
      position='fixed'
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar style={{ gap: `${matches ? '2rem' : 'none'}` }}>
        <img
          src='/logo-light.svg'
          alt='Nubimetrics'
          style={{ marginTop: '.5rem' }}
        />
        {matches && (
          <Typography
            variant='h2'
            style={{
              color: 'rgba(0, 0, 0, 0.87)',
              lineHeight: '2.25rem',
              marginTop: '0.8rem',
            }}>
            Recetas de Cocina
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};
