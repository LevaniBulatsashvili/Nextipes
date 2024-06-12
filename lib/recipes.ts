import db from "./db";

export function getRecipes() {
  return db.prepare("SELECT * FROM recipes").all();
}

export function getRecipe(id: number) {
  return db.prepare("SELECT * FROM recipes WHERE id = ?").get(id);
}
