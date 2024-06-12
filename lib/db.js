import sql from "better-sqlite3";

const db = sql("recipe.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER NOT NULL PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS sessions (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER NOT NULL PRIMARY KEY,
    title TEXT,
    image TEXT,
    description TEXT,
    instructions TEXT,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

const checkUsers =
  db.prepare("SELECT COUNT(*) as count FROM users").get().count > 0;

const checkRecipes =
  db.prepare("SELECT COUNT(*) as count FROM recipes").get().count > 0;

if (!checkUsers)
  db.exec(`
      INSERT INTO users (email, password)
      VALUES
      ('test@gmail.com',
      '12345'
      )
    `);

if (!checkRecipes)
  db.exec(`
      INSERT INTO recipes (title, image, description, instructions, user_id)
      VALUES
      ('Pizza',
      '/foods.png',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat sequi est explicabo facilis saepe. Culpa!',
      '1. Lorem ipsum dolor, sit amet consectetur adipisicing.
      2. Lorem ipsum dolor, sit amet consectetur adipisicing.
      3. Lorem ipsum dolor, sit amet consectetur adipisicing.',
      1
      ),
      ('Turkey',
      '/foods.png',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat sequi est explicabo facilis saepe. Culpa!',
      '1. Lorem ipsum dolor, sit amet consectetur adipisicing.
      2. Lorem ipsum dolor, sit amet consectetur adipisicing.
      3. Lorem ipsum dolor, sit amet consectetur adipisicing.',
      1
    );
  `);

export default db;
