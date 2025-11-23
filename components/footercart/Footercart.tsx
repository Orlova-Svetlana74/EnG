import Link from 'next/link'
import Image from 'next/image'
import styles from './Footercart.module.scss'

export const Footercart = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer__text}>
                © 2025 Entergen. Все права защищены.
            </p>
            <p className={styles.footer__text}>Карта сайта</p>
            <Link className={styles.footer__navlink} href="/cookie">
                Политика защиты и <br /> обработки
                <br /> персональных данных
            </Link>
        </footer>
    )
}
