'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import Slider from '@/components/slider/slider'

import {
    frame,
    descriptionSmallShape,
    descriptionBigShape,
    icon1,
    icon2,
    icon3,
    icon4,
} from '@/img'

import { useState } from 'react'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'

export default function Home() {
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)
    const handlerButtonClick = () => {
        setIsMenuHeader(true)
        setIsMenu(true)
    }

    return (
        <div className={styles.home}>
            <Header
                isMenuHeader={isMenuHeader}
                setIsMenuHeader={setIsMenuHeader}
                handlerButtonClick={handlerButtonClick}
            />
            <div className={styles.container}>
                <div className={styles.container__content}>
                    <Image
                        className={styles['container__shape--smallshap']}
                        src={descriptionSmallShape}
                        alt=""
                        width={200}
                        height={200}
                        priority={true}
                    />
                    <div className={styles.container__mission}>
                        <div className={styles.container__block}>
                            <h1 className={styles['container__titlemis']}>
                                Наша миссия
                            </h1>
                            <p className={styles.container__toptext}>
                                Мы верим, что каждый бизнес заслуживает
                                современного и эффективного онлайн- присутствия
                                Наша миссия — создавать сайты, которые не просто
                                выглядят привлекательно, но и приносят реальную
                                пользу, помогая достигать бизнес-целей наших
                                клиентов.
                            </p>
                        </div>
                        <Image
                            className={styles['container__image--frame']}
                            src={frame}
                            alt=""
                            width={600}
                            height={432}
                            priority={true}
                        />
                    </div>
                </div>
                <div className={styles.container__advantages}>
                    <div className={styles['container__advantages-block']}>
                        <div className={styles.container__blocktitle}>
                            <h2 className={styles.container__title}>
                                Наши преимущества
                            </h2>
                            <Image
                                className={styles['container__shape--bigshape']}
                                src={descriptionBigShape}
                                alt=""
                                width={330}
                                height={330}
                                priority={true}
                            />
                        </div>

                        <div className={styles['container__advantages-list1']}>
                            <div className={styles.container__advantage}>
                                <div
                                    className={
                                        styles['container__advantage-header']
                                    }
                                >
                                    <Image
                                        className={styles.container__icon}
                                        src={icon1}
                                        alt=""
                                        width={71}
                                        height={62}
                                        priority={true}
                                    />
                                    <h4 className={styles.container__subtitle}>
                                        Опыт <br /> и профессионализм
                                    </h4>
                                </div>
                                <p className={styles.container__text}>
                                    Наша команда состоит из опытных <br />
                                    разработчиков, дизайнеров и тестировщиков.
                                    <br />
                                    Мы знаем, как создать сайт, который будет
                                    соответствовать вашим потребностям и целям,
                                    <br />а также понравится аудитории.
                                </p>
                            </div>
                            <div className={styles.container__advantage}>
                                <div
                                    className={
                                        styles['container__advantage-header']
                                    }
                                >
                                    <Image
                                        className={styles.container__icon}
                                        src={icon2}
                                        alt=""
                                        width={71}
                                        height={62}
                                        priority={true}
                                    />
                                    <h4 className={styles.container__subtitle}>
                                        Индивидуальный <br /> подход
                                    </h4>
                                </div>
                                <p className={styles.container__text}>
                                    Мы не предлагаем готовые решения,
                                    <br /> мы разрабатываем уникальные сайты
                                    <br />и приложения, которые учитывают <br />{' '}
                                    особенности вашего бизнеса <br />и целевую
                                    аудиторию.
                                </p>
                            </div>
                        </div>
                        <div className={styles['container__advantages-list2']}>
                            <div className={styles.container__advantage}>
                                <div
                                    className={
                                        styles['container__advantage-header']
                                    }
                                >
                                    <Image
                                        className={styles.container__icon}
                                        src={icon3}
                                        alt=""
                                        width={71}
                                        height={62}
                                        priority={true}
                                    />
                                    <h4 className={styles.container__subtitle}>
                                        Современные
                                        <br /> технологии
                                    </h4>
                                </div>
                                <p className={styles.container__text}>
                                    Мы используем современные <br /> технологии
                                    и инструменты <br /> для создания сайтов и
                                    приложений,
                                    <br /> которые соответствуют последним
                                    <br />
                                    тенденциям в веб-разработке.
                                </p>
                            </div>
                            <div className={styles.container__advantage}>
                                <div
                                    className={
                                        styles['container__advantage-header']
                                    }
                                >
                                    <Image
                                        className={styles.container__icon}
                                        src={icon4}
                                        alt=""
                                        width={71}
                                        height={62}
                                        priority={true}
                                    />
                                    <h4 className={styles.container__subtitle}>
                                        Комплексный <br /> подход
                                    </h4>
                                </div>
                                <p className={styles.container__text}>
                                    Помимо разработки, мы предлагаем услуги по
                                    <br />
                                    интеграции с популярными сервисами, пишем
                                    <br />
                                    боты для Telegram, VK, WhatsApp, Mini App.
                                    <br />
                                    Пишем системы автоматизации для бизнеса и
                                    многое другое.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.container__team}>
                    <div className={styles['container__team-block']}>
                        <div className={styles['container__title--team']}>
                            <h2 className={styles.container__title}>
                                Наша команда
                            </h2>
                            <p className={styles['container__text--team']}>
                                В нашей команде работают профессионалы своего
                                дела
                            </p>
                        </div>
                        <Slider />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
