import React, { FC } from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Head from 'next/head';
import { Hero, Navbar, Sidebar } from '../ui';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Layout: FC<Props> = ({
  title = 'Recetas de Cocina',
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar />
        <Hero />
        <Sidebar />
        <Box
          component='main'
          sx={{
            padding: '4rem 2.5rem 0 1.8rem',
            flexGrow: 1,
            marginTop: '1rem',
          }}>
          {children}
        </Box>
      </Box>
    </>
  );
};
