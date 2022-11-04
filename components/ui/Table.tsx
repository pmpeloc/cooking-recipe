import { FC } from 'react';
import { styled } from '@mui/material/styles';
import {
  Table as TableMui,
  useMediaQuery,
  Rating,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { Switch } from './Switch';
import { recipesMock } from '../../mock/data';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#79797A',
    fontSize: '0.75rem',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '0.875rem',
    color: '#19191A',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.common.white,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const createData = (
  name: string,
  review: number,
  cookedBefore: boolean
) => {
  return {
    name,
    review: (
      <Rating
        name='read-only'
        value={review}
        max={4}
        readOnly
        style={{ fontSize: '1.2rem' }}
      />
    ),
    cookedBefore: <Switch sx={{ m: 1 }} defaultChecked={cookedBefore} />,
  };
};

const rows = recipesMock.map((recipe) =>
  createData(recipe.name, recipe.review, recipe.cookedBefore)
);

export const Table: FC = () => {
  const matchesMobile = useMediaQuery('(max-width:599px)');

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} elevation={0}>
      <TableContainer
        sx={{
          maxHeight: `calc(100vh - ${matchesMobile ? '0rem' : '24.3rem'})`,
          overflowX: 'hidden',
        }}>
        <TableMui
          size='small'
          stickyHeader
          sx={{ minWidth: 700, width: 'calc(100vw - 28rem)' }}
          aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre de la receta</StyledTableCell>
              <StyledTableCell align='right'>Reseñas</StyledTableCell>
              <StyledTableCell align='right'>Cocinado antes</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='right'>{row.review}</StyledTableCell>
                <StyledTableCell align='right'>
                  {row.cookedBefore}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </TableMui>
      </TableContainer>
    </Paper>
  );
};
