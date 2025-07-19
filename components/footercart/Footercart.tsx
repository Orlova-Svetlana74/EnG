import Link from "next/link";
import Image from "next/image";
import styles from "./Footercart.module.scss";

export const Footercart = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.navlink} href="#">
        © 2025 Entergen. Все права защищены.
      </Link>
      <Link className={styles.navlink} href="#">
        Карта сайта
      </Link>
      <Link className={styles.navlink} href="#">
        Политика защиты и обработки персональных данных
      </Link>
    </footer>
  );
};
