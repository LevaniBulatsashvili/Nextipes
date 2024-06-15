"use server";

import { createRecipe, deleteRecipe, editRecipe } from "@/lib/recipes";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createRecipeAction(prevState: Object, formData: any) {
  const title = formData.get("title");
  const image = "/foods.png";
  const description = formData.get("description");
  const instructions = formData.get("instructions");
  const userId = +cookies().get("userId")?.value!;

  createRecipe(title, image, description, instructions, userId);
  revalidatePath("/my-recipes/view");
  redirect("/my-recipes/view");
}

export async function editRecipeAction(
  id: number,
  prevState: Object,
  formData: any
) {
  const title = formData.get("title");
  const image = "/foods.png";
  const description = formData.get("description");
  const instructions = formData.get("instructions");

  editRecipe(id, title, image, description, instructions);
  revalidatePath("/my-recipes/view");
  redirect("/my-recipes/view");
}

export async function deleteRecipeAction(id: number) {
  deleteRecipe(id);
  revalidatePath("/my-recipes/view");
}
