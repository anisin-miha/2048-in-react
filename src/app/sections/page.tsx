import { Button } from "../components/Button";
import styles from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";
import { fetchSections } from "../components/FireStoreData";
// import { addOrUpdateItemToCollection } from "../functions/addOrUpdateItemToCollection";
// import { deleteAllDocumentsInCollection } from "../functions/deleteAllDocumentsInCollection";
// import { updateCategoriesAndSectionsFromMenu } from "../functions/updateCategoriesAndSectionsFromMenu";

export default async function Page() {
  const sections = await fetchSections();

  return (
    <Suspense fallback="loading">
      <p className={styles.title}>Menu</p>
      <ul className={styles.container}>
        {sections.map(
          ({ id, name }) =>
            id && (
              <Link key={id} href={`/sections/${id}`} className={styles.card}>
                <div className={styles["card-content"]}>
                  <div className={styles["card-title"]}>{name}</div>
                </div>
              </Link>
            ),
        )}
      </ul>
      <Button href="/">go back</Button>
    </Suspense>
  );
}

export async function generateStaticParams() {
  const sections = await fetchSections();

  return sections.map((item) => ({ slug: item.id }));
}
