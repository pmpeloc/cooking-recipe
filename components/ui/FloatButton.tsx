import { FC, useContext } from 'react';
import { Fab, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { UIContext } from '../../context/ui';

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 25,
};

export const FloatButton: FC = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <Tooltip title='Añadir receta' placement='left' arrow>
      <Fab
        color='primary'
        aria-label='Añadir receta'
        sx={fabStyle}
        onClick={openSideMenu}>
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};
