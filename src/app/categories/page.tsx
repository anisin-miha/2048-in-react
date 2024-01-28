import { Button } from "../components/Button";
import styles from "./page.module.css";
import Link from "next/link";
import { csvToObject, url } from "../functions/fetchMenu";
import { Suspense } from "react";
import { transformString } from "../functions/transformStringToUrl";
import { addOrUpdateItemToCollection, fetchData } from "../components/FireStoreData";

export default async function Page() {
  // const data = await fetch(url).then((res) => res.text());
  // const result = await csvToObject(data);

  // for (let index = 0; index < result.length; index++) {
  //   addOrUpdateItemToCollection(result[index]);
  // }

  const menu = await fetchData();




  return (
    <Suspense fallback="loading">
      <p className={styles.title}>Menu</p>
      <ul className={styles.container}>
        {menu.map((item) => (
          <Link
            key={transformString(item.name)}
            href={`/categories/${transformString(item.name)}`}
            className={styles.card}
          >
            <div className={styles["card-content"]}>
              <div className={styles["card-title"]}>{item.name}</div>
            </div>
          </Link>
        ))}
      </ul>
      <Button href="/">go back</Button>
    </Suspense>
  );
}

export async function generateStaticParams() {

  const menu = await fetchData();
  // const data = await fetch(url).then((res) => res.text());
  // const result = await csvToObject(data).map((item) => ({ slug: item.name }));

  return menu.map((item) => ({ slug: transformString(item.name) }));
}
