import React, { FC, useReducer } from 'react';
import { IRecipe, recipesMock } from '../../mock/data';

import { RecipeContext, recipeReducer } from './';

export interface RecipeState {
  recipeList: IRecipe[];
  recipeSearch: string;
  recipeFilter: string;
}

const RECIPE_INITIAL_STATE: RecipeState = {
  recipeList: recipesMock,
  recipeSearch: '',
  recipeFilter: 'Todos',
};

interface Props {
  children?: React.ReactNode;
}

export const RecipeProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, RECIPE_INITIAL_STATE);

  const searchRecipe = (text: string, filter: string) => {
    const res = recipesMock.filter((recipe) => {
      if (filter === 'Activos') {
        return (
          recipe.name.toLowerCase().includes(text.toLowerCase()) &&
          recipe.cookedBefore === true
        );
      }
      if (filter === 'Inactivos') {
        return (
          recipe.name.toLowerCase().includes(text.toLowerCase()) &&
          recipe.cookedBefore === false
        );
      }
      return recipe.name.toLowerCase().includes(text.toLowerCase());
    });
    dispatch({
      type: '[RECIPE] - Search Recipe',
      payload: { data: res, search: text },
    });
  };

  const filterRecipe = (filter: string, search: string) => {
    const res = recipesMock.filter((recipe) => {
      if (filter === 'Activos') {
        return (
          recipe.name.toLowerCase().includes(search.toLowerCase()) &&
          recipe.cookedBefore === true
        );
      }
      if (filter === 'Inactivos') {
        return (
          recipe.name.toLowerCase().includes(search.toLowerCase()) &&
          recipe.cookedBefore === false
        );
      }
      return recipe.name.toLowerCase().includes(search.toLowerCase());
    });
    dispatch({
      type: '[RECIPE] - Filter Recipe',
      payload: { data: res, filter },
    });
  };

  return (
    <RecipeContext.Provider
      value={{
        ...state,
        searchRecipe,
        filterRecipe,
      }}>
      {children}
    </RecipeContext.Provider>
  );
};
