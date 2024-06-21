import { getUserRecipes } from "@/lib/recipes";
import classes from "./page.module.css";
import { cookies } from "next/headers";
import { RecipeInterface } from "@/interface/recipe";
import Image from "next/image";
import Link from "next/link";
import ViewDeleteForm from "@/components/view/view-delete-form";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ViewRecipes() {
  const result = await verifyAuth();
  if (!result.user) return redirect("/");

  const user = cookies().get("userId")?.value;
  const recipes: RecipeInterface[] = getUserRecipes(+user!);
  return (
    <div id={classes["recipes-view"]}>
      {recipes.length < 1 && <p>Oops... you haven't shared any recipes</p>}
      <ul>
        {recipes.map((recipe) => (
          <li id={classes["recipe-card"]} key={recipe.id}>
            <div id={classes.details}>
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={200}
                height={150}
                priority
              />
              <div>
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
              </div>
            </div>

            <div id={classes.actions}>
              <ViewDeleteForm id={recipe.id} />
              <div>
                <Link
                  id={classes["edit-btn"]}
                  href={`/my-recipes/edit/${recipe.id}`}
                >
                  Edit <span>Recipe</span>
                </Link>
                <Link id={classes["view-btn"]} href={`/dish/${recipe.id}`}>
                  View <span>Details</span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
