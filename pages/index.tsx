import type { NextPage } from 'next';
import { Box, Grid, Typography } from '@mui/material';

import { MainLayout } from '../components/layouts';
import { Filter, FloatButton, Search } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <MainLayout title='Recetas de Cocina'>
      <Grid sx={{ margin: '16px 20px' }}>
        <Typography variant='h2'>Recetas de Cocina</Typography>
        <Box display='flex' style={{ marginTop: '1rem' }}>
          <Search />
          <Filter />
        </Box>
      </Grid>
      <FloatButton />
    </MainLayout>
  );
};

export default HomePage;
