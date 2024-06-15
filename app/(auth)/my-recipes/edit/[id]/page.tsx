import { getRecipe } from "@/lib/recipes";
import EditRecipeForm from "@/components/edit/edit-form";
import { RecipeInterface } from "@/interface/recipe";

export default function EditRecipe({ params }: any) {
  const recipe: RecipeInterface = getRecipe(params.id);

  return <EditRecipeForm recipe={recipe} />;
}
