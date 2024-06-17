"use server";

import { createRecipe, deleteRecipe, editRecipe } from "@/lib/recipes";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { imageIsValid, inputNotEmpty } from "./validations";

export async function createRecipeAction(prevState: Object, formData: any) {
  const errors = [];
  const title = formData.get("title");
  const image = "/foods.png";
  const description = formData.get("description");
  const instructions = formData.get("instructions");
  const userId = +cookies().get("userId")?.value!;

  if (!inputNotEmpty(title)) errors.push({ message: "title is empty." });
  if (!imageIsValid(image))
    errors.push({ message: "selected image is invalid" });
  if (!inputNotEmpty(description))
    errors.push({ message: "description is empty." });
  if (!inputNotEmpty(instructions))
    errors.push({ message: "instructions are empty." });
  if (errors.length) return errors;

  createRecipe(title, image, description, instructions, userId);
  revalidatePath("/my-recipes/view");
  redirect("/my-recipes/view");
}

export async function editRecipeAction(
  id: number,
  prevState: Object,
  formData: any
) {
  const errors = [];
  const title = formData.get("title");
  const image = "/foods.png";
  const description = formData.get("description");
  const instructions = formData.get("instructions");

  if (!inputNotEmpty(title)) errors.push({ message: "title is empty." });
  if (!imageIsValid(image))
    errors.push({ message: "selected image is invalid" });
  if (!inputNotEmpty(description))
    errors.push({ message: "description is empty." });
  if (!inputNotEmpty(instructions))
    errors.push({ message: "instructions are empty." });
  if (errors.length) return errors;

  editRecipe(id, title, image, description, instructions);
  revalidatePath("/my-recipes/view");
  redirect("/my-recipes/view");
}

export async function deleteRecipeAction(id: number) {
  deleteRecipe(id);
  revalidatePath("/my-recipes/view");
}
