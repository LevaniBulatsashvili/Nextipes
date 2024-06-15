import db from "./db";

export function getRecipes() {
  return db.prepare("SELECT * FROM recipes").all();
}

export function getRecipe(id: number) {
  return db.prepare("SELECT * FROM recipes WHERE id = ?").get(id);
}

export function getUserRecipes(id: number) {
  return db.prepare("SELECT * FROM recipes WHERE user_id = ?").all(id);
}

export function createRecipe(
  title: string,
  image: string,
  description: string,
  instructions: string,
  userId: number
) {
  db.exec(`
    INSERT INTO recipes (title, image, description, instructions, user_id)
    VALUES
    ('${title}',
    '${image}',
    '${description}',
    '${instructions}',
    ${userId}
    )
`);
}

export function editRecipe(
  id: number,
  title: string,
  image: string,
  description: string,
  instructions: string,
) {
  db.exec(`
    UPDATE recipes
    SET
    title = '${title}',
    image = '${image}',
    description = '${description}',
    instructions = '${instructions}'
    WHERE id = ${id}
  `);
}

export function deleteRecipe(id: number) {
  db.exec(`DELETE FROM recipes WHERE id = ${id}`);
}
