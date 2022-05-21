import type { NextPage } from 'next';
import { Box, Grid, Typography } from '@mui/material';

import { Layout } from '../components/layouts';
import { Filter, FloatButton, Search } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <Layout title='Recetas de Cocina'>
      <Grid sx={{ margin: '16px 20px' }}>
        <Typography variant='h2'>Recetas de Cocina</Typography>
        <Box display='flex' style={{ marginTop: '1rem' }}>
          <Search />
          <Filter />
        </Box>
      </Grid>
      <FloatButton />
    </Layout>
  );
};

export default HomePage;
