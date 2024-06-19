import { verifyAuth } from "@/lib/auth";
import classes from "./header.module.css";
import Link from "next/link";
import { logout } from "@/actions/auth-actions";

export default async function Header() {
  const { user } = await verifyAuth();
  return (
    <header id={classes["main-header"]}>
      <div id={classes.logo}>
        <Link href="/">Nextipe</Link>
      </div>
      <nav>
        <ul>
          {user && (
            <li>
              <Link href="/my-recipes/view">My Recipes</Link>
            </li>
          )}
          <li>
            {!user && <Link href="/auth?mode=login">login</Link>}

            {user && (
              <form action={logout}>
                <button>Logout</button>
              </form>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
