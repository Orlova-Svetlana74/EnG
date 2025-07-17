import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';
import { logo } from '@/img';

export function Header() {
  return (
    <div className={styles.container}>
      <a href="#">
        <Image
          className={styles.logo}
          src={logo}
          alt="логотип компании EnterGen"
          width={295}
          height={141}
          priority={true}
        />{' '}
      </a>

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
        <a href="tel:+79000000000" itemProp ="telephone">+7 (900) 000-00-00</a>
      </div>
    </div>
  );
}
