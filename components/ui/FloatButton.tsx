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
        size='large'
        sx={{
          position: 'fixed',
          bottom: `${'1rem'}`,
          right: `${'1.563rem'}`,
          width: matches ? 100 : 50,
          height: matches ? 100 : 50,
        }}
        onClick={action}>
        <AddIcon
          style={{ width: matches ? 56 : 30, height: matches ? 56 : 30 }}
        />
      </Fab>
    </Tooltip>
  );
};
