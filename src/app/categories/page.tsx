import { Button } from "../components/Button";
import styles from "./page.module.css";
import Link from "next/link";
import { csvToObject, url } from "../functions/fetchMenu";
import { Suspense } from "react";
import { transformString } from "../functions/transformStringToUrl";

export default async function Page() {
  const data = await fetch(url).then((res) => res.text());
  const result = await csvToObject(data);

  return (
    <Suspense fallback="loading">
      <p className={styles.title}>Menu</p>
      <ul className={styles.container}>
        {result?.map((item) => (
          <Link
            key={item.name}
            href={`/categories/${transformString(item.name)}`}
            className={styles.card}
          >
            <div className={styles["card-content"]}>
              <div className={styles["card-title"]}>{item.name}</div>
              {/* <div className={styles["card-description"]}>{item.name}</div> */}
            </div>
          </Link>
        ))}
      </ul>
      <Button href="/">go back</Button>
    </Suspense>
  );
}

export async function generateStaticParams() {
  const data = await fetch(url).then((res) => res.text());
  const result = await csvToObject(data).map((item) => ({ slug: item.name }));

  return result;
}
