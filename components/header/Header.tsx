import Link from 'next/link'
import styles from './Header.module.scss'
import Image from 'next/image'
import { PhoneSVG } from '@/svg/PhoneSVG'
import { useState, useEffect } from 'react'
import { PhoneMiniSVG } from '@/svg/PhoneMiniSVG'
import { Button } from '../ui/Button/Button'
import { usePathname } from 'next/navigation'
import { WebsiteLogo } from '@/svg/Website_logo'
import Blockmodal from '@/components/ui/blockModal/blockmodal'

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
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Определяем мобильное устройство
    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth <= 768) // или ваш порог для мобильных
        }

        checkScreenWidth()
        window.addEventListener('resize', checkScreenWidth)

        return () => {
            window.removeEventListener('resize', checkScreenWidth)
        }
    }, [])

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

    // Обработчик клика по кнопке "Напишите нам"
    const handleWriteUsClick = () => {
        if (isMobile) {
            // На мобильных открываем Blockmodal
            setIsModalOpen(true)
            document.documentElement.style.overflow = 'hidden'
        } else {
            // На десктопах используем переданный обработчик или стандартную логику
            if (handlerButtonClick) {
                handlerButtonClick()
            } else {
                // Стандартная логика для десктопа (например, открытие формы)
                setIsModalOpen(true)
            }
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
        document.documentElement.style.overflow = 'auto'
    }

    return (
        <div
            className={[
                styles.container,
                isMenu ? styles.container_active : '',
            ].join(' ')}
        >
            <Blockmodal
                isOpen={isModalOpen}
                onClose={closeModal}
                mode="modal"
            />
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
                        onClick={handleWriteUsClick}
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

    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') {
            return true
        }

        if (path !== '/' && pathname.startsWith(path)) {
            return true
        }
        return false
    }

    const isServicesActive = () => {
        return (
            pathname === '/services' ||
            pathname.startsWith('/developmen') ||
            pathname.startsWith('/integration') ||
            pathname.includes('services')
        )
    }
    //
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
