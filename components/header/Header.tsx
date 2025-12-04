import Link from 'next/link'
import styles from './Header.module.scss'
import Image from 'next/image'
import { PhoneSVG } from '@/svg/PhoneSVG'
import { useState, useEffect } from 'react'
import { PhoneMiniSVG } from '@/svg/PhoneMiniSVG'
import { Button } from '../ui/Button/Button'
import { usePathname } from 'next/navigation'
import { WebsiteLogo } from '@/svg/Website_logo'

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
        const newMenuState = !isMenu
        setIsMenu(newMenuState)
        document.documentElement.style.overflow = newMenuState
            ? 'hidden'
            : 'auto'
    }
    useEffect(() => {
        return () => {
            document.documentElement.style.overflow = 'auto'
        }
    }, [])

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
                <Link href="/">
                    <WebsiteLogo className={styles.container__logo} />
                </Link>

                <Navigation clickScroll={clickScroll} />
                <div className={styles.container__navlink}>
                    <a
                        href="tel:+79266661028"
                        className={styles.container__navlink__phone}
                        itemProp="telephone"
                    >
                        + 7 (926) 666-10-28
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
    const pathname = usePathname()

    // Определяем активные пути для каждого пункта меню
    const isActive = (path: string) => {
        // Для главной страницы
        if (path === '/' && pathname === '/') {
            return true
        }
        // Для других страниц - проверяем начало пути
        if (path !== '/' && pathname.startsWith(path)) {
            return true
        }
        return false
    }
    // Проверяем, находится ли пользователь на странице услуг или её подстраницах
    const isServicesActive = () => {
        return (
            pathname === '/services' ||
            pathname.startsWith('/developmen') ||
            pathname.startsWith('/integration') ||
            // Добавьте сюда другие пути, которые относятся к услугам
            pathname.includes('services')
        ) // на случай если будут страницы вида /services/что-то
    }
    // Проверяем, находится ли пользователь в разделе "Контакты" (якорная ссылка)
    const isContactsActive =
        pathname === '/' &&
        typeof window !== 'undefined' &&
        window.location.hash === '#contacts'

    return (
        <div className={styles.container__menu}>
            <nav className={styles.container__nav}>
                <Link
                    className={[
                        styles.container__navlink,
                        isActive('/') && styles.container__navlink_active,
                    ].join(' ')}
                    href="/"
                >
                    Entergen
                </Link>
                <Link
                    className={[
                        styles.container__navlink,
                        isActive('/projects') &&
                            styles.container__navlink_active,
                    ].join(' ')}
                    href="/projects"
                >
                    Проекты
                </Link>
                <Link
                    className={[
                        styles.container__navlink,
                        isActive('/about') && styles.container__navlink_active,
                    ].join(' ')}
                    href="/about"
                >
                    О нас
                </Link>
                <span
                    onClick={clickScroll}
                    className={styles.container__navlink}
                >
                    Контакты
                </span>
                <Link 
                    className={[
                        styles.container__navlink,
                        isServicesActive() && styles.container__navlink_active,
                    ].join(' ')}
                    href="/services"
                >
                    Услуги
                </Link>
            </nav>
        </div>
    )
}
