"use client";

import styles from "./page.module.css";
import { Button } from "./components/Button";
import dynamic from "next/dynamic";
import { useLanguage } from "./components/LanguageProvider";


const DynamicCallWaiter = dynamic(() => import("./components/CallWaiter"), {
  ssr: false, // This ensures that the component is not included in SSR
});

const DynamicLogoThemed = dynamic(() => import("./components/LogoThemed"), {
  ssr: false, // This ensures that the component is not included in SSR
});

export default function Home() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <DynamicLogoThemed />

      <nav>
        <ul>
          <li>
            <select
              className={styles.select}
              name="lang"
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">🇺🇸</option>
              <option value="ru">🇷🇺</option>
            </select>
          </li>
          <li>
            <Button href={`/sections`}>menu</Button>
          </li>
          <li>
            <DynamicCallWaiter />
          </li>
        </ul>
      </nav>
    </div>
  );
}
