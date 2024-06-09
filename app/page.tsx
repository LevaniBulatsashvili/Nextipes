import classes from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { getRecipes } from "@/lib/recipes";
import { RecipeInterface } from "@/interface/recipe";

export default function Home() {
  const recipes: RecipeInterface[] = getRecipes();

  return (
    <main>
      <ul id={classes.recipes}>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={400}
              height={250}
              priority
            />
            <div>
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </div>
            <Link href={`/dish/${recipe.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
