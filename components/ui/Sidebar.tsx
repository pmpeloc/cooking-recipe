import { FC, useContext } from 'react';
import Image from 'next/image';
import {
  Box,
  Button,
  DialogTitle,
  Drawer,
  FormControl,
  FormControlLabel,
  IconButton,
  List,
  Radio,
  RadioGroup,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';

import { UIContext } from '../../context/ui';
import { Switch } from './Switch';

export const Sidebar: FC = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer
      anchor='right'
      open={sideMenuOpen}
      onClose={closeSideMenu}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <DialogTitle className='drawerTitle'>
        <IconButton onClick={closeSideMenu}>
          <Close />
        </IconButton>
      </DialogTitle>
      <Box sx={{ width: '29rem' }}>
        <Toolbar />
        <Box component='form' onSubmit={() => {}} noValidate>
          <Box sx={{ padding: '5px 20px', marginBottom: '0.8rem' }}>
            <Typography
              variant='h4'
              style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Nueva receta
            </Typography>
          </Box>
          <List>
            <Box sx={{ padding: '5px 20px', marginBottom: '0.2rem' }}>
              <Typography
                variant='h4'
                style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                Nombre de la receta
              </Typography>
              <FormControl sx={{ width: '100%', my: 3 }}>
                <TextField
                  fullWidth
                  multiline
                  id='name-recipe'
                  variant='outlined'
                  placeholder={`Título*
P.ej. Olla caliente de carne y arroz en olla de cocción lenta`}
                />
              </FormControl>
            </Box>
            <Box sx={{ padding: '5px 20px', marginBottom: '0.9rem' }}>
              <Typography
                variant='h4'
                style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                Ingredientes
              </Typography>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                maxHeight='5rem'>
                <p>1</p>
                <FormControl sx={{ width: '85%', my: 3 }}>
                  <TextField
                    fullWidth
                    multiline
                    id='ingredient1-recipe'
                    variant='outlined'
                    placeholder={`Tipo de ingrediente`}
                  />
                </FormControl>
                <Image
                  src='/icons/Icon-Delete.png'
                  alt='Borrar'
                  width={24}
                  height={24}
                />
              </Box>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                maxHeight='5rem'>
                <p>2</p>
                <FormControl sx={{ width: '85%', my: 3 }}>
                  <TextField
                    fullWidth
                    multiline
                    id='ingredient2-recipe'
                    variant='outlined'
                    placeholder={`Tipo de ingrediente`}
                  />
                </FormControl>
                <Image
                  src='/icons/Icon-Add.png'
                  alt='Borrar'
                  width={24}
                  height={24}
                />
              </Box>
            </Box>
            <Box sx={{ padding: '5px 20px' }}>
              <Typography
                variant='h4'
                style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                Preparación
              </Typography>
              <FormControl sx={{ width: '100%', my: 3 }}>
                <TextField
                  fullWidth
                  multiline
                  minRows={6}
                  id='preparation-recipe'
                  variant='outlined'
                  placeholder={`Instrucciones*
Escribe los pasos`}
                />
              </FormControl>
            </Box>
            <Box sx={{ padding: '5px 20px', marginBottom: '0.2rem' }}>
              <Typography
                variant='h4'
                style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                Reseñas
              </Typography>
              <FormControl sx={{ width: '100%', mt: 2, mb: 1 }}>
                <RadioGroup
                  row
                  aria-labelledby='radio-buttons-reviews'
                  name='row-radio-buttons-group'
                  style={{ gap: '1.3rem' }}>
                  <FormControlLabel value='1' control={<Radio />} label='1' />
                  <FormControlLabel value='2' control={<Radio />} label='2' />
                  <FormControlLabel value='3' control={<Radio />} label='3' />
                  <FormControlLabel value='4' control={<Radio />} label='4' />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{ padding: '5px 20px' }}>
              <Typography
                variant='h4'
                style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                Cocinado antes:
              </Typography>
              <FormControl sx={{ width: '100%', mt: 3 }}>
                <Switch sx={{ m: 1 }} defaultChecked />
              </FormControl>
            </Box>
            <Box
              display='flex'
              justifyContent='flex-end'
              sx={{ padding: '5px 20px' }}>
              <Button
                type='submit'
                variant='contained'
                size='large'
                sx={{
                  mt: 3,
                  mb: 2,
                  borderRadius: '1.563rem',
                  backgroundColor: '#B2B2B3',
                  paddingInline: '2rem',
                  textTransform: 'capitalize',
                }}>
                Crear
              </Button>
            </Box>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};
