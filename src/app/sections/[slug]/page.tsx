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

  console.log(menu);

  const categories = await fetchCategories(params.slug);

  const sections = await fetchSections();

  const section = sections.find((item) => item.id === params.slug);

  return (
    <>
      <p className={styles.title}>{section?.name}</p>
      <ul className={styles.list}>
        {
          <li>
            {categories.map((category) => (
              <div key={category.id} className={styles.category}>
                {categories.length > 1 && (
                  <h2 className={styles.categoryHeader}>{category.name}</h2>
                )}
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
