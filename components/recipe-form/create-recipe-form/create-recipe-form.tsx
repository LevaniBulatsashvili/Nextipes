"use client";
import { useFormState } from "react-dom";
import { createRecipeAction } from "@/actions/recipes-actions";
import { FormError } from "@/interface/form";
import RecipeForm from "../recipe-form";

export default function CreateRecipeForm() {
  const [formState, formAction] = useFormState(
    (prevState: FormError[], formData: FormData) =>
      createRecipeAction(prevState, formData),
    []
  );

  return (
    <RecipeForm
      formState={formState}
      formAction={formAction}
      title=""
      description=""
      instructions=""
    />
  );
}
