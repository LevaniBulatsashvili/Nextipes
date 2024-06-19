import { getRecipe } from "@/lib/recipes";

import { RecipeInterface } from "@/interface/recipe";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import EditRecipeForm from "@/components/recipe-form/edit-recipe-form/edit-form";

export default async function EditRecipe({ params }: any) {
  const result = await verifyAuth();
  if (!result.user) return redirect("/");

  const recipe: RecipeInterface = getRecipe(params.id);

  return <EditRecipeForm recipe={recipe} />;
}
