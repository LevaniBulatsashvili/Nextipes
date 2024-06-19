"use client";
import { RecipeInterface } from "@/interface/recipe";
import { useFormState } from "react-dom";
import { editRecipeAction } from "@/actions/recipes-actions";
import { FormError } from "@/interface/form";
import RecipeForm from "../recipe-form";

export default function EditRecipeForm({
  recipe,
}: {
  recipe: RecipeInterface;
}) {
  const [formState, formAction] = useFormState(
    (prevState: FormError[], formData: FormData) =>
      editRecipeAction(recipe.id, prevState, formData),
    []
  );

  return (
    <RecipeForm
      formState={formState}
      formAction={formAction}
      title={recipe.title}
      description={recipe.description}
      instructions={recipe.instructions}
    />
  );

  // return (
  //   <form id={classes["recipe-edit"]} action={action}>
  //     <div>
  //       <label htmlFor="title">Title</label>
  //       <input
  //         type="text"
  //         id="title"
  //         name="title"
  //         defaultValue={recipe.title}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="description">Description</label>
  //       <input
  //         id="description"
  //         name="description"
  //         defaultValue={recipe.description}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="instructions">Instructions</label>
  //       <textarea
  //         id="instructions"
  //         name="instructions"
  //         rows={5}
  //         defaultValue={recipe.instructions}
  //       />
  //     </div>
  //     <div>
  //       <label id={classes["image-upload"]} htmlFor="image">
  //         Upload File
  //       </label>
  //       <input type="file" id="image" name="image" />
  //     </div>

  //     <div>
  //       <button>Submit</button>
  //     </div>
  //     {formState.length > 0 &&
  //       formState.map((error) => (
  //         <p className={classes.error} key={error.message}>
  //           {error.message}
  //         </p>
  //       ))}
  //   </form>
  // );
}
