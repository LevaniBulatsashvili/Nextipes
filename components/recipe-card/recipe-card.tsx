import classes from "./recipe-card.module.css";
import { RecipeInterface } from "@/interface/recipe";
import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ recipe }: { recipe: RecipeInterface }) {
  return (
    <li id={classes["recipe-card"]} key={recipe.id}>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={400}
        height={250}
        priority
      />
      <div>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
      </div>
      <Link href={`/dish/${recipe.id}`}>View Details</Link>
    </li>
  );
}
