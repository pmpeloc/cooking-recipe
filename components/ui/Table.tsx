import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Table as TableMui, useMediaQuery } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt 2', 159, 6.0, 24, 4.0),
  createData('Ice cream sawwwndwich', 237, 9.0, 37, 4.3),
  createData('Eclawewir', 262, 16.0, 24, 6.0),
  createData('Cupcasawke', 305, 3.7, 67, 4.3),
  createData('Gingerbressad', 356, 16.0, 49, 3.9),
  createData('Frozen yoghursd', 159, 6.0, 24, 4.0),
  createData('Ice cream676 sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair32', 262, 16.0, 24, 6.0),
  createData('Cu020pcake', 305, 3.7, 67, 4.3),
  createData('Ginqqqqgerbread', 356, 16.0, 49, 3.9),
];

export const Table: FC = () => {
  const matchesMobile = useMediaQuery('(max-width:599px)');
  const matchesTablet = useMediaQuery('(max-width:768px)');
  const matchesLaptop = useMediaQuery('(max-width:1024px)');

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer
        sx={{
          maxHeight: `calc(100vh - ${matchesMobile ? '0rem' : '24.3rem'})`,
        }}>
        <TableMui
          stickyHeader
          sx={{ minWidth: 700, width: 'calc(100vw - 28rem)' }}
          aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align='right'>Calories</StyledTableCell>
              <StyledTableCell align='right'>Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align='right'>Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align='right'>Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='right'>{row.calories}</StyledTableCell>
                <StyledTableCell align='right'>{row.fat}</StyledTableCell>
                <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
                <StyledTableCell align='right'>{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </TableMui>
      </TableContainer>
    </Paper>
  );
};
