"use client";
import classes from "./page.module.css";
import { createRecipeAction } from "@/actions/recipes-actions";
import { useFormState } from "react-dom";

export default function CreateRecipe() {
  const [formState, formAction] = useFormState(
    (prevState, formData) => createRecipeAction(prevState, formData),
    {}
  );

  return (
    <form id={classes["recipe-create"]} action={formAction}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input id="description" name="description" />
      </div>
      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea id="instructions" name="instructions" rows={5} />
      </div>
      <div>
        <label id={classes["image-upload"]} htmlFor="image">
          Upload File
        </label>
        <input type="file" id="image" name="image" />
      </div>

      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
