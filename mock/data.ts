export interface IRecipe {
  name: string;
  review: number;
  cookedBefore: boolean;
}

export const recipesMock: IRecipe[] = [
  { name: 'Melodía de bayas mixtas', review: 3, cookedBefore: true },
  {
    name: 'Sopa tailandesa de coliflor al curry rojo',
    review: 2,
    cookedBefore: true,
  },
  {
    name: 'Berenjena especiada crujiente',
    review: 4,
    cookedBefore: true,
  },
  {
    name: 'Sopa de calabaza con un toque',
    review: 2,
    cookedBefore: true,
  },
  {
    name: 'Ensalada de tofu carbonizado, maíz y espárragos',
    review: 4,
    cookedBefore: true,
  },
  {
    name: 'Pollo al pesto cremoso en una sartén y ñoquis',
    review: 4,
    cookedBefore: true,
  },
  {
    name: 'Pastel de pollo cremoso',
    review: 3,
    cookedBefore: true,
  },
  {
    name: 'Pollo y papas a la francesa',
    review: 2,
    cookedBefore: false,
  },
  {
    name: 'Estofado de ternera y verduras',
    review: 1,
    cookedBefore: true,
  },
  {
    name: 'Lasaña de calabaza, espinacas y lentejas',
    review: 4,
    cookedBefore: true,
  },
  {
    name: 'Soothing chicken soup',
    review: 4,
    cookedBefore: true,
  },
  {
    name: 'Sopa de pollo calmante',
    review: 3,
    cookedBefore: true,
  },
  {
    name: 'Enchiladas rapidas de carne',
    review: 2,
    cookedBefore: true,
  },
  {
    name: 'Pollo al disco con champignones',
    review: 3,
    cookedBefore: true,
  },
  {
    name: 'Horneado de brócoli con queso',
    review: 4,
    cookedBefore: true,
  },
  {
    name: 'Ragú de pierna de cordero con pappardelle',
    review: 2,
    cookedBefore: true,
  },
];
