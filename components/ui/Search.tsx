import { FC } from 'react';
import { FormControl, IconButton, TextField } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';

export const Search: FC = () => {
  return (
    <FormControl sx={{ m: 1, width: 490, ml: 0 }}>
      <TextField
        fullWidth
        id='search-recipe'
        variant='outlined'
        placeholder='Buscador'
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchOutlined />
            </IconButton>
          ),
        }}
      />
    </FormControl>
  );
};
