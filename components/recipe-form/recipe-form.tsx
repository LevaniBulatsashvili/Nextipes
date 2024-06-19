import { FormError } from "@/interface/form";
import classes from "./recipe-form.module.css";
import { RecipeInterface } from "@/interface/recipe";

export default function RecipeForm({
  formState,
  formAction,
  title,
  description,
  instructions,
}: {
  formState: FormError[];
  formAction: (payload: FormData) => void;
  title: string;
  description: string;
  instructions: string;
}) {
  return (
    <form id={classes["recipe-form"]} action={formAction}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" defaultValue={title} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input id="description" name="description" defaultValue={description} />
      </div>
      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows={5}
          defaultValue={instructions}
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
      {formState.length > 0 &&
        formState.map((error) => (
          <p className={classes.error} key={error.message}>
            {error.message}
          </p>
        ))}
    </form>
  );
}
