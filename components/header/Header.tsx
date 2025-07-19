import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import { LogoSVG } from "@/svg/LogoSVG";

export function Header() {
  return (
    <div className={styles.container}>
      <LogoSVG className={styles.container__logo} />

      <div className={styles.menu}>
        <nav className={styles.nav}>
          <Link className={styles.navlink} href="/post-page">
            Entergen
          </Link>
          <Link className={styles.navlink} href="#">
            Проекты
          </Link>
          <Link className={styles.navlink} href="#">
            О нас
          </Link>
          <Link className={styles.navlink} href="#">
            Контакты
          </Link>
          <Link className={styles.navlink} href="#">
            Блог
          </Link>
          <Link className={styles.navlink} href="#">
            Услуги
          </Link>
        </nav>
      </div>
      <div className={styles.navlink}>
        <a href="tel:+79000000000" itemProp="telephone">
          +7 (900) 000-00-00
        </a>
      </div>
    </div>
  );
}
