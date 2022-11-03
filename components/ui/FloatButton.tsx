import { FC, useContext } from 'react';
import { Fab, Tooltip, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { UIContext } from '../../context/ui';

const fabStyle = {
  position: 'absolute',
  bottom: '1rem',
  right: '1.563rem',
};

export const FloatButton: FC = () => {
  const { openSideMenu } = useContext(UIContext);

  const matches = useMediaQuery('(max-width:599px)');

  return (
    <Tooltip title='Añadir receta' placement='left' arrow>
      <Fab
        color='primary'
        aria-label='Añadir receta'
        sx={{
          position: 'absolute',
          bottom: `${matches ? '-0.4rem' : '1rem'}`,
          right: `${matches ? '0.5rem' : '1.563rem'}`,
        }}
        onClick={openSideMenu}>
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};
