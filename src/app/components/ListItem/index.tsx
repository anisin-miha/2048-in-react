"use client";

import { Dish } from "../../functions/fetchMenu";
import { useLanguage } from "../LanguageProvider";

import styles from "./style.module.css";

export const ListItem: React.FC<{ dish: Dish }> = ({ dish }) => {
  const { language } = useLanguage();

  return (
    <li className={styles.item}>
      <div>
        <p className={styles.title}>
          {language === "en" ? dish.dish : dish.dish_ru}
        </p>
        <p className={styles.desc}>
          {language === "en" ? dish.ingridients : dish.ingridients_ru}
        </p>
      </div>
      <div className={styles.price}>
        {dish.price ||
          dish["Shot price"] ||
          dish["Glass price"] ||
          dish["Bottle price"] ||
          dish["30ml Price"] ||
          dish["30ml Price"] ||
          dish["180ml Price"]}{" "}
        ₹
      </div>
    </li>
  );
};
