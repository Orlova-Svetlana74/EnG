import Link from 'next/link'
import styles from './Header.module.scss'
import Image from 'next/image'
import { LogoSVG } from '@/svg/LogoSVG'
import { PhoneSVG } from '@/svg/PhoneSVG'
import { useState } from 'react'
import { PhoneMiniSVG } from '@/svg/PhoneMiniSVG'
import { Button } from '../ui/Button/Button'
import { usePathname } from 'next/navigation'

interface IHeader {
    isMenuHeader: boolean
    setIsMenuHeader: (isMenuHeader: boolean) => void
    handlerButtonClick?: () => void
}
export function Header({
    isMenuHeader,
    setIsMenuHeader,
    handlerButtonClick,
}: IHeader) {
    const [isMenu, setIsMenu] = useState(false)

    const handleMenuClick = () => {
        setIsMenu(!isMenu)
        document.documentElement.style.overflow = !isMenu ? 'hidden' : 'auto'
    }

    const clickScroll = () => {
        const el = document.getElementById('contacts')
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div
            className={[
                styles.container,
                isMenu ? styles.container_active : '',
            ].join(' ')}
        >
            <div className={styles.container__wrapper}>
                <LogoSVG className={styles.container__logo} />

                <Navigation clickScroll={clickScroll} />
                <div className={styles.container__navlink}>
                    <a href="tel:+79000000000" itemProp="telephone">
                        +7 (900) 000-00-00
                    </a>
                </div>

                <div className={styles.container__phone__menu}>
                    <PhoneMiniSVG />
                    <span onClick={handleMenuClick} />
                </div>
                <div className={styles.container__phone__show}>
                    <Navigation />
                    <Button
                        className={styles.container__phone__button}
                        onClick={handlerButtonClick}
                    >
                        Напишите нам
                    </Button>
                </div>
            </div>
        </div>
    )
}

interface INavigation {
    clickScroll?: () => void
}
const Navigation = ({ clickScroll }: INavigation) => {
    const path = usePathname()

    return (
        <div className={styles.container__menu}>
            <nav className={styles.container__nav}>
                <Link
                    className={[
                        styles.container__navlink,
                        path === '/' && styles.container__navlink_active,
                    ].join(' ')}
                    href="/"
                >
                    Entergen
                </Link>
                <Link className={styles.container__navlink} href="#">
                    Проекты
                </Link>
                <Link className={styles.container__navlink} href="/about">
                    О нас
                </Link>
                <span
                    onClick={clickScroll}
                    className={styles.container__navlink}
                >
                    Контакты
                </span>
                <Link className={styles.container__navlink} href="#">
                    Блог
                </Link>
                <Link className={styles.container__navlink} href="/services">
                    Услуги
                </Link>
            </nav>
        </div>
    )
}
