"use client";

import classes from "./page.module.css";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../actions/auth-actions";
import { useFormState } from "react-dom";

export default function Auth() {
  const mode = useSearchParams().get("mode") || "register";
  const [formState, formAction]: [{ message: string }[], fn: any] =
    useFormState(
      (prevState: any, formData: any) => auth(mode, prevState, formData),
      []
    );
  const register = mode === "register";
  return (
    <form id={classes.auth} action={formAction}>
      <Image
        src="/auth.png"
        width={300}
        height={200}
        alt="authentication"
        priority
      />
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      {register && (
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
          />
        </div>
      )}

      <button type="submit">{register ? "Create account" : "Login"}</button>
      <p>
        <Link href={register ? "/auth?mode=login" : "/auth?mode=register"}>
          {register ? "Have an account?" : "Create an account"}
        </Link>
      </p>
      {formState.length > 0 &&
        formState.map((error) => (
          <p className={classes.error} key={error.message}>
            {error.message}
          </p>
        ))}
    </form>
  );
}
