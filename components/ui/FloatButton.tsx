import { FC } from 'react';
import { Fab, Tooltip, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  title: string;
  action: () => void;
}

export const FloatButton: FC<Props> = ({
  title = 'Añadir receta',
  action = () => {},
}) => {
  const matches = useMediaQuery('(max-width:599px)');

  return (
    <Tooltip title={title} placement='left' arrow>
      <Fab
        color='primary'
        aria-label={title}
        sx={{
          position: 'absolute',
          bottom: `${matches ? '-0.4rem' : '1rem'}`,
          right: `${matches ? '0.5rem' : '1.563rem'}`,
        }}
        onClick={action}>
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};
