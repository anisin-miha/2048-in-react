import Image from "next/image";
import styles from "./page.module.css";
import logo from "./logo.png";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Image src={logo} alt="logo" priority />
      <nav>
        <ul>
          <li>
            <select className={styles.select} name="lang" id="">
              <option value="en">🇺🇸</option>
              <option value="ru">🇷🇺</option>
            </select>
          </li>
          <li>
            <Button href={`/categories`}>menu</Button>
          </li>
          <li>
            <Button>call waiter</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
