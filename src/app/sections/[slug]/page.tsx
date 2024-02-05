import { Button } from "../../components/Button";
import styles from "./page.module.css";
import { ListItem } from "../../components/ListItem";
import {
  fetchCategories,
  fetchPage,
  fetchSections,
} from "../../components/FireStoreData";

export default async function Page({ params }: any) {
  const menu: any[] = await fetchPage(params.slug);

  const categories = await fetchCategories(params.slug);

  return (
    <>
      <p className={styles.title}>{menu[0].section}</p>
      <ul className={styles.list}>
        {
          <li>
            {categories.map((category) => (
              <div key={category.id} className={styles.category}>
                <h2 className={styles.categoryHeader}>{category.name}</h2>
                <ul>
                  {menu
                    .filter((item) => item.categoryId === category.id)
                    .map((item, index) => (
                      <ListItem key={index} dish={item} />
                    ))}
                </ul>
              </div>
            ))}
          </li>
        }
      </ul>
      <Button href="/sections">go back</Button>
    </>
  );
}

export async function generateStaticParams() {
  const sections = await fetchSections();

  return sections.map((item) => ({ slug: item.id }));
}
