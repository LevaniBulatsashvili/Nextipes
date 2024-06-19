"use server";
import { createSession, removeSession } from "@/lib/auth";
import { hashPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUser } from "@/lib/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { emailIsValid, passwordIsValid, passwordsMatch } from "./validations";

async function register(
  email: string,
  password: string,
  confirmPassword: string
) {
  const errors = [];

  if (!emailIsValid(email)) errors.push({ message: "email is invalid." });
  if (!passwordIsValid(password))
    errors.push({ message: "password must be atleast 6 characters long." });
  if (passwordsMatch(password, confirmPassword))
    errors.push({ message: "passwords don't match." });
  if (errors.length) return errors;

  try {
    const id: string = createUser(email, hashPassword(password));
    await createSession(id);
  } catch (error: any) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      errors.push({ message: "email already exists." });
      return errors;
    }
  }
  redirect("/");
}

async function login(email: string, password: string) {
  const user = getUser(email);
  if (!user) return [{ message: "email doesnt exist." }];
  if (!verifyPassword(user.password, password))
    return [{ message: "password is invalid." }];

  await createSession(user.id);
  cookies().set("userId", user.id);
  redirect("/");
}

export async function auth(
  mode: string,
  prevState: Object,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm-password") as string;

  if (mode === "register") return register(email, password, confirmPassword);
  return login(email, password);
}

export async function logout() {
  await removeSession();
  redirect("/");
}
