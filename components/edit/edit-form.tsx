"use client";
import { RecipeInterface } from "@/interface/recipe";
import classes from "./edit-form.module.css";
import { useFormState } from "react-dom";
import { editRecipeAction } from "@/actions/recipes-actions";

export default function EditRecipeForm({
  recipe,
}: {
  recipe: RecipeInterface;
}) {
  const [formState, formAction] = useFormState(
    (prevState, formData) => editRecipeAction(recipe.id, prevState, formData),
    {}
  );

  return (
    <form id={classes["recipe-create"]} action={formAction}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={recipe.title}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          defaultValue={recipe.description}
        />
      </div>
      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows={5}
          defaultValue={recipe.instructions}
        />
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
