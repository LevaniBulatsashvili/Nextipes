"use client";
import classes from "./page.module.css"

export default function Error() {
  return (
    <main id={classes.error}>
      <h1>An error has occured!</h1>
      <p>Failed to fetch user recipe. please try again later.</p>
    </main>
  );
}