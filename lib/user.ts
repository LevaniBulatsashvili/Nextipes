import db from "./db";

export function createUser(email: string, password: string) {
  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);

  return result.lastInsertRowid;
}

export function getUser(email: string) {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}
