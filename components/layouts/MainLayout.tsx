import React, { FC } from 'react';
import Head from 'next/head';
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';

import { Aside, Navbar, Sidebar } from '../ui';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const MainLayout: FC<Props> = ({
  title = 'Recetas de Cocina',
  children,
}) => {
  const theme = useTheme();

  const showAside = useMediaQuery(theme.breakpoints.up('md'));
  const isSM = useMediaQuery(theme.breakpoints.up('xs'));
  const isXS = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar />
        {showAside && <Aside />}
        <Sidebar />
        <Box
          component='main'
          sx={{
            padding: `4rem ${isXS ? '0rem' : '2.5rem'} 0 ${
              isSM ? '0rem' : '1.8rem'
            }`,
            flexGrow: 1,
            marginTop: '1rem',
          }}>
          {children}
        </Box>
      </Box>
    </>
  );
};
