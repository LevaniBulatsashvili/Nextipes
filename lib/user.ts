import { cookies } from "next/headers";
import db from "./db";

export function createUser(email: string, password: string) {
  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);

  cookies().set("userId", result.lastInsertRowid);
  return result.lastInsertRowid;
}

export function getUser(email: string) {
  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
  cookies().set("userId", user.id);
  return user;
}
