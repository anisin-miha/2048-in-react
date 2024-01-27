import { Button } from "../components/Button";
import { categories } from "../data";
import styles from "./page.module.css";
import Link from "next/link";

export default function Categories() {
  return (
    <>
      <p className={styles.title}>Menu</p>
      <ul className={styles.container}>
        {categories.map((item) => (
          <Link
            key={item.link}
            href={`/categories/${item.link}`}
            className={styles.card}
          >
            <div className={styles["card-content"]}>
              <div className={styles["card-title"]}>{item.name}</div>
              <div className={styles["card-description"]}>{item.name}</div>
            </div>
          </Link>
        ))}
      </ul>
      <Button href="/" >
        go back
      </Button>
    </>
  );
}
