export interface RecipeInterface {
  id: number;
  title: string;
  image: string;
  description: string;
  instructions: string;
}

export interface RecipeSearchParams {
  params: {
    id: string;
  };
}
