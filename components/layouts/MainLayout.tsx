import React, { FC } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Head from 'next/head';
import { Aside, Navbar, Sidebar } from '../ui';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const MainLayout: FC<Props> = ({
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
        <Aside />
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
