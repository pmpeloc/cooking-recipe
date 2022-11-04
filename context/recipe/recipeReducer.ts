import { IRecipe } from '../../mock/data';
import { RecipeState } from './';

interface IFilter {
  data: IRecipe[];
  filter: string;
}

interface ISearch {
  data: IRecipe[];
  search: string;
}

type RecipeActionType =
  | { type: '[RECIPE] - Search Recipe'; payload: ISearch }
  | { type: '[RECIPE] - Filter Recipe'; payload: IFilter };

export const recipeReducer = (state: RecipeState, action: RecipeActionType) => {
  switch (action.type) {
    case '[RECIPE] - Search Recipe':
      return {
        ...state,
        recipeSearch: action.payload.search,
        recipeList: action.payload.data,
      };
    case '[RECIPE] - Filter Recipe':
      return {
        ...state,
        recipeFilter: action.payload.filter,
        recipeList: action.payload.data,
      };
    default:
      return state;
  }
};
