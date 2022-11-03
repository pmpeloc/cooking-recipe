import { useContext } from 'react';
import type { NextPage } from 'next';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import { UIContext } from '../context/ui';
import { MainLayout } from '../components/layouts';
import { Filter, FloatButton, Search, Table } from '../components/ui';

const HomePage: NextPage = () => {
  const { openSideMenu } = useContext(UIContext);

  const theme = useTheme();

  const isSM = useMediaQuery(theme.breakpoints.up('xs'));
  const matches = useMediaQuery('(min-width:600px)');
  const matchesTablet = useMediaQuery(
    '(max-width:768px) and (min-width:599px)'
  );

  return (
    <MainLayout title='Recetas de Cocina'>
      <Grid
        container
        spacing={2}
        sx={{
          marginLeft: `${isSM ? '0rem' : '1.25rem'}`,
          marginTop: `${matches ? '2.5rem' : '1rem'}`,
        }}>
        {matches && (
          <Grid item xs={12}>
            <Typography variant='h2'>Recetas de Cocina</Typography>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          sm={8}
          xl={4}
          style={{
            marginTop: '1rem',
            paddingInline: '1rem',
          }}>
          <Search />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          xl={8}
          style={{
            marginTop: '1rem',
            alignSelf: 'end',
            paddingInline: '1rem',
          }}>
          <Filter />
        </Grid>
        <Grid
          item
          style={{
            marginTop: '2.5rem',
            marginInline: `${matchesTablet ? 'auto' : 'inherit'}`,
          }}>
          <Table />
        </Grid>
      </Grid>
      <FloatButton title='Añadir receta' action={openSideMenu} />
    </MainLayout>
  );
};

export default HomePage;
