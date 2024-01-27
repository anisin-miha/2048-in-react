import { PropsWithChildren } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

type Props = PropsWithChildren & {
  href?: string;
};

export const Button: React.FC<Props> = ({ href, children }) => {
  if (href) {
    return (
      <Link className={styles.button} href={href}>
        {children}
      </Link>
    );
  }
  return <button className={styles.button}>{children}</button>;
};
