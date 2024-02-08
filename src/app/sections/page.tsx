import { Button } from "../components/Button";
import styles from "./page.module.css";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback="loading">
      <p className={styles.title}>Menu</p>
      <div className={styles.grid}>
        <Button href="/sections/food">food</Button>
        <Button href="/sections/drinks">drinks</Button>
      </div>
      <Button href="/">go back</Button>
    </Suspense>
  );
}

export async function generateStaticParams() {
  return [{ type: "food" }, { type: "drinks" }];
}
