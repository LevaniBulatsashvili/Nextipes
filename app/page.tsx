import classes from "./page.module.css";

import { RecipeInterface } from "@/interface/recipe";
import { getRecipes } from "@/lib/recipes";
import RecipeCard from "@/components/recipe-card/recipe-card";

export default function Home() {
  const recipes: RecipeInterface[] = getRecipes();

  return (
    <main>
      <ul id={classes.recipes}>
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </ul>
    </main>
  );
}
