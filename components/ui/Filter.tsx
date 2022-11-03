import { FC, useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  ListItemText,
  MenuItem,
  Radio,
  Select,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: '16.25rem',
      color: '#1E3646',
      borderRadius: '1rem',
    },
  },
};

export const filters = ['Todos', 'Activos', 'Inactivos'];

export const Filter: FC = () => {
  const [cookedBefore, setCookedBefore] = useState<string>('Todos');

  const theme = useTheme();

  const isXS = useMediaQuery(theme.breakpoints.only('xs'));

  const handleChange = (event: SelectChangeEvent<typeof cookedBefore>) => {
    const {
      target: { value },
    } = event;
    setCookedBefore(value);
  };

  return (
    <FormControl sx={{ width: '100%', maxWidth: `${isXS ? 'none' : '14rem'}` }}>
      <Select
        labelId='filter-checkbox-label'
        id='filter-checkbox'
        defaultValue={filters[0]}
        defaultChecked={true}
        value={cookedBefore}
        onChange={handleChange}
        renderValue={(selected) => {
          return (
            <>
              Cocido antes:
              <strong> {selected}</strong>
            </>
          );
        }}
        MenuProps={MenuProps}
        style={{
          backgroundColor: '#EBF0F3',
          color: '#1E3646',
        }}>
        {filters.map((filter) => (
          <MenuItem key={filter} value={filter} style={{ paddingBlock: 0 }}>
            <ListItemText primary={filter} />
            <FormControlLabel
              value={filter}
              control={<Radio />}
              label=''
              checked={cookedBefore === filter}
              style={{ marginRight: 0 }}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
