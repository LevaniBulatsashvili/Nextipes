"use client";
import classes from "../error.module.css";

export default function Error() {
  return (
    <main id={classes.error}>
      <h1>An error has occured!</h1>
      <p>Failed to fetch user recipes. please try again later.</p>
    </main>
  );
}
