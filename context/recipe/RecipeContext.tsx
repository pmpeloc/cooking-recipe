import { createContext } from 'react';
import { IRecipe } from '../../mock/data';

interface ContextProps {
  recipeList: IRecipe[];
  recipeSearch: string;
  recipeFilter: string;
  searchRecipe: (text: string, filter: string) => void;
  filterRecipe: (
    filter: 'Todos' | 'Activos' | 'Inactivos',
    search: string
  ) => void;
}

export const RecipeContext = createContext({} as ContextProps);
