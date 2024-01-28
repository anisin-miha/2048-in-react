import { Dish, csvToObject, url } from "@/src/app/functions/fetchMenu";
import { Button } from "../../components/Button";
import styles from "./page.module.css";
import { transformString } from "../../functions/transformStringToUrl";

export default async function Page({ params }: any) {
  const data = await fetch(url).then((res) => res.text());
  const result = await csvToObject(data);

  const item = result.find(
    (item) => transformString(item.name) === params.slug,
  );

  const renderMenu = (dishes: Record<string, Dish[]> | undefined) => {
    if (dishes) {
      return (
        <li>
          {Object.keys(dishes).map((category) => (
            <div key={category} className={styles.category}>
              <h2 className={styles.categoryHeader}>{category}</h2>
              <ul>
                {dishes[category].map((item, index) => (
                  <Item key={index} dish={item} />
                ))}
              </ul>
            </div>
          ))}
        </li>
      );
    }
    return <li>error</li>;
  };

  console.log(item?.categories);

  return (
    <>
      <p className={styles.title}>{item?.name}</p>
      <ul className={styles.list}>{renderMenu(item?.categories)}</ul>
      <Button href="/categories">go back</Button>
    </>
  );
}

const Item: React.FC<{ dish: Dish }> = ({ dish }) => {
  return (
    <li className={styles.item}>
      <div>
        <p className={styles["item-title"]}>{dish.Dish}</p>
        <p className={styles["item-desc"]}>{dish.Ingridients}</p>
      </div>
      <div className={styles.price}>{dish.Price} ₹</div>
    </li>
  );
};

export async function generateStaticParams() {
  const data = await fetch(url).then((res) => res.text());
  const result = await csvToObject(data).map((item) => ({
    slug: transformString(item.name),
  }));

  return result;
}
