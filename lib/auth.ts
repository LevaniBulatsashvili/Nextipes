import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { Lucia } from "lucia";
import db from "./db";
import { cookies } from "next/headers";

const adapter = new BetterSqlite3Adapter(db, {
  user: "users",
  session: "sessions",
});

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});

export async function createSession(id: string) {
  const session = await lucia.createSession(id, {});
  const cookie = lucia.createSessionCookie(session.id);
  cookies().set(cookie.name, cookie.value, cookie.attributes);
}

export async function verifyAuth() {
  const cookie = cookies().get(lucia.sessionCookieName);

  if (!cookie || !cookie.value) return null;

  const result = await lucia.validateSession(cookie.value);

  try {
    if (result.session && result.session.fresh) {
      const cookie = lucia.createSessionCookie(result.session.id);
      cookies().set(cookie.name, cookie.value, cookie.attributes);
    }
    if (!result.session) {
      const cookie = lucia.createBlankSessionCookie();
      cookies().set(cookie.name, cookie.value, cookie.attributes);
    }
  } catch {}

  return result;
}

export async function removeSession() {
  const result = await verifyAuth();

  if (!result!.session) return { error: "Unauthorized!" };

  lucia.invalidateSession(result!.session.id);
  const cookie = lucia.createBlankSessionCookie();
  cookies().set(cookie.name, cookie.value, cookie.attributes);
}
