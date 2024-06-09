import classes from "./page.module.css";
import { RecipeInterface } from "@/interface/recipe";
import { getRecipe } from "@/lib/recipes";
import Image from "next/image";

interface searchParams {
  params: {
    id: string;
  };
}

export default function Recipe({ params }: searchParams) {
  const recipe: RecipeInterface = getRecipe(+params.id);
  const instructions = recipe.instructions.split("\n");

  return (
    <main id={classes.dish}>
      <Image
        src={recipe.image}
        width={400}
        height={250}
        alt={recipe.title}
        priority
      />
      <div>
        <h1>{recipe.title}</h1>
        {instructions.map((instruction) => (
          <p>{instruction}</p>
        ))}
      </div>
    </main>
  );
}
