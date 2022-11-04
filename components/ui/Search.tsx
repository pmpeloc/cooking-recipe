import { FC, useContext } from 'react';
import { FormControl, IconButton, TextField } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { RecipeContext } from '../../context/recipe';

export const Search: FC = () => {
  const { searchRecipe, recipeFilter } = useContext(RecipeContext);

  return (
    <FormControl sx={{ mt: 1, width: '100%', ml: 0 }}>
      <TextField
        fullWidth
        id='search-recipe'
        variant='outlined'
        placeholder='Buscador'
        onChange={(e) => searchRecipe(e.target.value, recipeFilter)}
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchOutlined style={{ width: '2rem', height: '2rem' }} />
            </IconButton>
          ),
        }}
      />
    </FormControl>
  );
};
