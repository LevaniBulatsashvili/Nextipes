import sql from "better-sqlite3";

const db = sql("recipes.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY,
    title TEXT,
    image TEXT,
    description TEXT,
    instructions TEXT
  );
`);

const checkRecipes =
  db.prepare("SELECT COUNT(*) as count FROM recipes").get().count > 0;

if (!checkRecipes)
  db.exec(`
    INSERT INTO recipes (title, image, description, instructions)
    VALUES
    ('Pizza',
    '/foods.png',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat sequi est explicabo facilis saepe. Culpa!',
    '1. Lorem ipsum dolor, sit amet consectetur adipisicing.
    2. Lorem ipsum dolor, sit amet consectetur adipisicing.
    3. Lorem ipsum dolor, sit amet consectetur adipisicing.'
    ),
    ('Turkey',
    '/foods.png',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat sequi est explicabo facilis saepe. Culpa!',
    '1. Lorem ipsum dolor, sit amet consectetur adipisicing.
    2. Lorem ipsum dolor, sit amet consectetur adipisicing.
    3. Lorem ipsum dolor, sit amet consectetur adipisicing.'
    )
  `);

export default db;
