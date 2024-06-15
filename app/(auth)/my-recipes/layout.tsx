"use client";
import Link from "next/link";
import classes from "./layout.module.css";
import { usePathname } from "next/navigation";

export default function MyRecipesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <main id={classes["user-recipes"]}>
      <nav id={classes["user-navigation"]}>
        <Link
          href={
            path.includes("view") ? "/my-recipes/create" : "/my-recipes/view"
          }
        >
          {path.includes("view") ? "Add Recipe" : "View Recipes"}
        </Link>
      </nav>
      {children}
    </main>
  );
}
