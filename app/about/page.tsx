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
    offerShape,
    projectsShape,
} from '@/public/img'

import { useState } from 'react'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { TgSVG } from '@/svg/TgSVG'

export default function Home() {
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)
    const handlerButtonClick = () => {
        setIsMenuHeader(true)
        setIsMenu(true)
    }

    return (
        <>
            <Header
                isMenuHeader={isMenuHeader}
                setIsMenuHeader={setIsMenuHeader}
                handlerButtonClick={handlerButtonClick}
            />
            <div className={styles.home}>
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
                                    современного и эффективного онлайн-
                                    присутствия. Наша миссия — создавать сайты,
                                    которые не просто выглядят привлекательно,
                                    но и приносят реальную пользу, помогая
                                    достигать бизнес-целей наших клиентов.
                                </p>
                            </div>
                            <Image
                                className={styles['container__image--frame']}
                                src={frame}
                                alt=""
                                width={600}
                                height={431}
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
                                    className={
                                        styles['container__shape--bigshape']
                                    }
                                    src={descriptionBigShape}
                                    alt=""
                                    width={330}
                                    height={330}
                                    priority={true}
                                />
                            </div>

                            <div
                                className={
                                    styles['container__advantages-list1']
                                }
                            >
                                <div className={styles.container__advantage}>
                                    <div
                                        className={
                                            styles[
                                                'container__advantage-header'
                                            ]
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
                                        <h4
                                            className={
                                                styles.container__subtitle
                                            }
                                        >
                                            Опыт
                                            <br /> и профессионализм
                                        </h4>
                                    </div>
                                    <div
                                        className={
                                            styles.container__subtitletext
                                        }
                                    >
                                        <p className={styles.container__text}>
                                            Наша команда состоит из опытных
                                            разработчиков, дизайнеров и
                                            тестировщиков. Мы знаем, как создать
                                            сайт, который будет соответствовать
                                            вашим потребностям и целям, а также
                                            понравится аудитории.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.container__advantage}>
                                    <div
                                        className={
                                            styles[
                                                'container__advantage-header'
                                            ]
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
                                        <h4
                                            className={
                                                styles.container__subtitle
                                            }
                                        >
                                            Индивидуальный <br /> подход
                                        </h4>
                                    </div>
                                    <div
                                        className={
                                            styles.container__subtitletext
                                        }
                                    >
                                        <p className={styles.container__text}>
                                            Мы не предлагаем готовые решения, мы
                                            разрабатываем уникальные сайты и
                                            приложения, которые учитывают
                                            особенности вашего бизнеса и целевую
                                            аудиторию.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    styles['container__advantages-list2']
                                }
                            >
                                <div className={styles.container__advantage}>
                                    <div
                                        className={
                                            styles[
                                                'container__advantage-header'
                                            ]
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
                                        <h4
                                            className={
                                                styles.container__subtitle
                                            }
                                        >
                                            Современные
                                            <br /> технологии
                                        </h4>
                                    </div>
                                    <div
                                        className={
                                            styles.container__subtitletext
                                        }
                                    >
                                        <p className={styles.container__text}>
                                            Мы используем современные технологии
                                            и инструменты для создания сайтов и
                                            приложений, которые соответствуют
                                            последним тенденциям в
                                            веб-разработке.
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.container__advantage}>
                                    <div
                                        className={
                                            styles[
                                                'container__advantage-header'
                                            ]
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
                                        <h4
                                            className={
                                                styles.container__subtitle
                                            }
                                        >
                                            Комплексный <br /> подход
                                        </h4>
                                    </div>
                                    <div
                                        className={
                                            styles.container__subtitletext
                                        }
                                    >
                                        <p className={styles.container__text}>
                                            Помимо разработки, мы предлагаем
                                            услуги по интеграции с популярными
                                            сервисами, пишем боты для Telegram,
                                            VK, WhatsApp, Mini App. Пишем
                                            системы автоматизации для бизнеса и
                                            многое другое.
                                        </p>
                                    </div>

                                    <Image
                                        className={
                                            styles['container__shape--projects']
                                        }
                                        src={projectsShape}
                                        alt=""
                                        width={330}
                                        height={330}
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container__team}>
                        <div className={styles['container__team-block']}>
                            <div className={styles['container__title--team']}>
                                <Image
                                    className={
                                        styles['container__shape--offerShape']
                                    }
                                    src={offerShape}
                                    alt=""
                                    width={200}
                                    height={200}
                                    priority={true}
                                />
                                <h2 className={styles.container__title}>
                                    Наша команда
                                </h2>
                                <p className={styles['container__text--team']}>
                                    В нашей команде работают профессионалы
                                    своего дела:
                                </p>
                            </div>
                            <Slider />
                            <Image
                                className={
                                    styles['container__shape--description']
                                }
                                src={descriptionBigShape}
                                alt=""
                                width={330}
                                height={330}
                                priority={true}
                            />
                        </div>
                    </div>                    
                    <Footer />
                </div>
            </div>
        </>
    )
}
