import { Button } from "../../components/Button";
import { categories } from "../../data";
import styles from "./page.module.css";

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.link,
    name: cat.name,
  }));
}

export default function Menu({
  params,
}: {
  params: { slug: string; name: string };
}) {
  return (
    <>
      <p className={styles.title}>Hot beverages</p>
      <ul className={styles.list}>
        {[1, 2, 3].map((item) => (
          <Item key={item} />
        ))}
      </ul>
      <Button href="/categories">go back</Button>
    </>
  );
}

const Item: React.FC = () => {
  return (
    <li className={styles.item}>
      <div>
        <p className={styles["item-title"]}>Milk masala tea</p>
        <p className={styles["item-desc"]}>Чай масала с молоком</p>
      </div>
      <div className={styles.price}>20 ₹</div>
    </li>
  );
};
