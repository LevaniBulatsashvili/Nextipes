"use server";
import { createSession, removeSession } from "@/lib/auth";
import { hashPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUser } from "@/lib/user";
import { redirect } from "next/navigation";

async function register(
  email: string,
  password: string,
  confirmPassword: string
) {
  if (password !== confirmPassword)
    return { errors: { password: "passwords don't match." } };

  try {
    const id: string = createUser(email, hashPassword(password));
    await createSession(id);
  } catch (error: any) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return { errors: { email: "email already exists." } };
    }
  }
  redirect("/");
}

async function login(email: string, password: string) {
  const user = getUser(email);

  if (!user) return { errors: { email: "email doesn't exist." } };

  if (!verifyPassword(user.password, password))
    return { errors: { password: "password is invalid." } };

  await createSession(user.id);
  redirect("/");
}

export async function auth(mode: string, prevState: Object, formData: any) {
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");

  if (mode === "register") return register(email, password, confirmPassword);
  return login(email, password);
}

export async function logout() {
  await removeSession();
  redirect("/");
}
