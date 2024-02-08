import { Button } from "../../components/Button";
import styles from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";
import { fetchSections } from "../../components/FireStoreData";

export default async function Page({ params }: any) {
  const sections = await fetchSections();

  return (
    <Suspense fallback="loading">
      <p className={styles.title}>Menu</p>
      <ul className={styles.container}>
        {sections
          .filter(({ type }) => type === params.type)
          .map(
            ({ id, name, hidden }) =>
              !hidden &&
              id && (
                <Link
                  key={id}
                  href={`/sections/${params.type}/${id}`}
                  className={styles.card}
                >
                  <div className={styles["card-content"]}>
                    <div className={styles["card-title"]}>{name}</div>
                  </div>
                </Link>
              ),
          )}
      </ul>
      <Button href="/sections">go back</Button>
    </Suspense>
  );
}

export async function generateStaticParams() {
  return [{ type: "food" }, { type: "drinks" }];
}
