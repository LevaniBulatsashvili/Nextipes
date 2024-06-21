"use client";
import classes from "./view-delete-form.module.css";
import { deleteRecipeAction } from "@/actions/recipes-actions";
import { useFormState } from "react-dom";

export default function ViewDeleteForm({ id }: { id: number }) {
  const [formState, formAction] = useFormState(
    () => deleteRecipeAction(id),
    []
  );

  return (
    <form id={classes["delete-form"]} action={formAction}>
      <button>Delete <span>Recipe</span></button>
    </form>
  );
}
