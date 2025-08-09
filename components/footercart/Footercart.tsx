import Link from "next/link";
import Image from "next/image";
import styles from "./Footercart.module.scss";

export const Footercart = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.footer__navlink} href="#">
        © 2025 Entergen.
        <br /> Все права
        <br /> защищены.
      </Link>
      <Link className={styles.footer__navlink} href="#">
        Карта сайта
      </Link>
      <Link className={styles.footer__navlink} href="#">
        Политика защиты и<br /> обработки
        <br /> персональных данных
      </Link>
    </footer>
  );
};
