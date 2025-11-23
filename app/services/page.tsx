'use client'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import styles from './services.module.scss'
import { TgSVG } from '@/svg/TgSVG'
import { Button } from '@/components/ui/Button/Button'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Blockmodal from '@/components/ui/blockModal/blockmodal'

import {
    offerShape,
    projectsShape,
    skillsShape,
    descriptionBigShape,
    icongear,
    Frametwo,
} from '@/public/img'

interface ServiceItem {
    id: number
    text: string
    href: string
}

export default function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)
    const [isListExpanded, setIsListExpanded] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Хук для отслеживания размера экрана
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 744)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    const handlerButtonClick = () => {
        setIsMenuHeader(true)
        setIsMenu(true)
    }

    const toggleListExpansion = () => {
        setIsListExpanded(!isListExpanded)
    }

    const services: ServiceItem[] = [
        {
            id: 1,
            text: 'Веб-разработка: создание сайта под ключ',
            href: '/developmen',
        },
        {
            id: 2,
            text: 'Разработка ботов и Mini Apps приложений на базе Telegram и VK',
            href: '#',
        },
        {
            id: 3,
            text: 'Интеграция сайта с системами 1C, amoCRM, Bitrix, эквайрингами и др.',
            href: '/integration',
        },
        {
            id: 4,
            text: 'Деплой и поддержка: развертывание highload кластеров, поддержка observability',
            href: '#',
        },
        {
            id: 5,
            text: 'Разработка систем разной сложности CRM, CMS, ERP, LMS',
            href: '#',
        },
        { id: 6, text: 'Backend разработка', href: '/developmen' },
        { id: 7, text: 'Frontend разработка', href: '/developmen' },
        { id: 8, text: 'Проектирование и создание архитектур', href: '#' },
        { id: 9, text: 'Тестирование приложений', href: '#' },
        { id: 10, text: 'Создание и интеграции ИИ', href: '#' },
    ]

    // Определяем количество элементов для показа
    // На мобильных устройствах показываем только первые 4, если список не раскрыт
    const visibleServices =
        isMobile && !isListExpanded ? services.slice(0, 4) : services
    const hasHiddenServices = isMobile && services.length > 4 && !isListExpanded

    return (
        <>
            <Header
                isMenuHeader={isMenuHeader}
                setIsMenuHeader={setIsMenuHeader}
                handlerButtonClick={handlerButtonClick}
            />
            <Blockmodal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                mode="modal"
            />
            <div className={styles.services}>
                {/* <Image
                className={styles['services__shape--skillsShape']}
                src={skillsShape}
                alt=""
                width={150}
                height={150}
                priority={true}
            /> */}
                <div>
                    <div className={styles.services__header}>
                        <div className={styles.services__content}>
                            <h3 className={styles.services__title}>
                                Наши услуги
                            </h3>
                            <p className={styles.services__text}>
                                Наша компания специализируется на создании
                                качественных <br /> и функциональных цифровых
                                продуктов, которые помогают <br /> бизнесу
                                <br /> расти и развиваться.
                                <br /> Мы предлагаем широкий спектр услуг по
                                разработке сайтов,
                                <br /> программного обеспечения и приложений,
                                адаптированных
                                <br /> под потребности вашего бизнеса.
                            </p>
                        </div>
                    </div>
                    <div className={styles.services__offer}>
                        <div className={styles['services__offer-content']}>
                            <div className={styles.services__subtitleblock}>
                                <h4 className={styles.services__subtitle}>
                                    Что мы предлагаем
                                </h4>
                                {/* <Image
                                className={
                                    styles['services__shape--offerShape']
                                }
                                src={offerShape}
                                alt=""
                                width={500}
                                height={500}
                                priority={true}
                            /> */}
                            </div>

                            <section className={styles.servicesContainer}>
                                <ul className={styles.list}>
                                    {visibleServices.map((service) => (
                                        <li
                                            key={service.id}
                                            className={
                                                styles['services__list-item']
                                            }
                                        >
                                            <div
                                                className={styles.iconContainer}
                                            >
                                                <Image
                                                    src={icongear}
                                                    alt=""
                                                    width={38}
                                                    height={37}
                                                    className={
                                                        styles.services__icon
                                                    }
                                                />
                                                <Link
                                                    href={service.href}
                                                    className={
                                                        styles[
                                                            'services__text--large'
                                                        ]
                                                    }
                                                >
                                                    {service.text}
                                                </Link>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                {hasHiddenServices && (
                                    <button
                                        className={styles.expandButton}
                                        onClick={toggleListExpansion}
                                    >
                                        Развернуть список
                                    </button>
                                )}
                                {isMobile && isListExpanded && (
                                    <button
                                        className={styles.expandButton}
                                        onClick={toggleListExpansion}
                                    >
                                        Свернуть список
                                    </button>
                                )}
                            </section>
                            {/* <Image
                            className={styles['services__shape--bigshape']}
                            src={descriptionBigShape}
                            alt=""
                            width={300}
                            height={150}
                            priority={true}
                        /> */}
                        </div>
                    </div>
                    <div className={styles.services__discussion}>
                        <div className={styles.disc}>
                            <p className={styles.services__text}>
                                Готовы сделать первый шаг к успешному <br />
                                цифровому будущему? <br />
                                Свяжитесь с нами сегодня, чтобы обсудить
                                <br />
                                ваш проект и начать работу над его реализацией!
                            </p>
                            <Button className={styles.services__button} onClick={() => setIsModalOpen(true)}>
                                Обсудить проект
                            </Button>
                        </div>
                        {/* <Image
                        className={styles['services__image--discussion']}
                        src={Frametwo}
                        alt=""
                        width={388}
                        height={294}
                        priority={true}
                    /> */}
                    </div>
                </div>
                {/* <Image
                className={styles['services__shape--projectsShape']}
                src={projectsShape}
                alt=""
                width={185}
                height={185}
                priority={true}
            /> */}
                <div className={styles.services__tgFixed}>
                    <TgSVG />
                </div>
                <Footer />
            </div>
        </>
    )
}
