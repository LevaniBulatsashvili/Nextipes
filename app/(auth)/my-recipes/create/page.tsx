import CreateRecipeForm from "@/components/recipe-form/create-recipe-form/create-recipe-form";
import { verifyAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function CreateRecipe() {
  const result = await verifyAuth();
  if (!result.user) return redirect("/");

  return <CreateRecipeForm />;
}
