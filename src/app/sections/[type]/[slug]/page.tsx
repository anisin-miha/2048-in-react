import { Button } from "../../../components/Button";
import styles from "./page.module.css";
import { ListItem } from "../../../components/ListItem";
import {
  fetchCategories,
  fetchPage,
  fetchSections,
} from "../../../components/FireStoreData";

export default async function Page({ params }: any) {
  const menu: any[] = await fetchPage(params.slug);
  const sections = await fetchSections();
  const section = sections.find((item) => item.id === params.slug);
  const categories = await fetchCategories(params.slug);

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
                    .map((item) => (
                      <ListItem key={item.id} dish={item} />
                    ))}
                </ul>
              </div>
            ))}
          </li>
        }
      </ul>
      <Button href={`/sections/${section?.type}`}>go back</Button>
    </>
  );
}

export async function generateStaticParams() {
  const sections = await fetchSections();

  console.log(sections.map((item) => ({ slug: `${item.type}/${item.id}` })));

  return sections.map((item) => ({ type: item.type, slug: item.id }));
}
