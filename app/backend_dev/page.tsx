'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Button } from '@/components/ui/Button/Button'
import { useState } from 'react'
import { Footer } from '@/components/footer/Footer'
import BackendDevTopSVG from '@/svg/BackendDevTopSVG'
import Plus from '@/svg/PlusSVG'
import { faqDatadeploy } from '@/data/datadeploy'
// import { faqDatabotApp } from '@/data/faqDatabotApp'
import Blockmodal from '@/components/ui/blockModal/blockmodal'
import { Frametwo } from '@/public/img'

import {icondatabase} from

import {
    settingsalert,
    descriptionSmallShape,
    descriptionBigShape,
    offerShape,
    projectsShape,
    webhook,
    workspacepremium,
    shoppingcart,
    sync,
    group,
    handyman,
    paymentarrowdown,
    sms,
    game,
    creditcard,
    joystick,
    health_and_safety,
    school,
    currency_exchange,
    checkcircle,
    iconapplication,
    icondatabase


} from '@/public/img'

export default function Backdev() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)
    const [openQuestionId, setOpenQuestionId] = useState<number | null>(null) // Для отслеживания открытого вопроса

    const handlerButtonClick = () => {
        setIsMenuHeader(true)
        setIsMenu(true)
    }

    const toggleQuestion = (id: number) => {
        setOpenQuestionId(openQuestionId === id ? null : id)
    }

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
            <Image
                className={styles.page__offerShape}
                src={offerShape}
                alt=""
                priority={true}
            />

            <div className={styles.page}>
                <h1 className={styles.page__title}>Backend-разработка</h1>

                <section className={styles.page__developsection}>
                    <div className="">
                        <div className={styles.page__developtitle}>
                            <p className={styles.page__titletext}>
                                Мы оказываем услуги, направленные на обеспечение
                                бесперебойной работы проектов, которые
                                испытывают большие нагрузки.  
                            </p>
                        </div>
                        <Button
                            className={styles.page__button}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Заказать проект
                        </Button>
                    </div>

                    <div className={styles.page__proektstile}>
                        <BackendDevTopSVG />
                    </div>
                </section>
                <Image
                    className={styles.page__descriptionSmallShape}
                    src={descriptionSmallShape}
                    alt=""
                    priority={true}
                />

                <h2 className={styles.page__subtitle}>Что мы делаем?</h2>
                <div className={styles['page__advantages-block']}>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={iconapplication}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                разрабатываем и настраиваем серверные
                                приложения;
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={icondatabase}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                работаем с различными базами данных;
                            </p>
                        </div>
                    </div>

                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={checkcircle}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                обеспечиваем высокий уровень безопасности;
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={checkcircle}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                интегрируем приложения с внешними сервисами;
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={checkcircle}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p className={styles.page__text}>
                                разрабатываем бизнес-логику приложения.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.page__subtitleblock}>
                    <Image
                        className={styles.page__projectsShape}
                        src={projectsShape}
                        alt=""
                        width={330}
                        height={330}
                        priority={true}
                    />
                </div>

                <div className={styles.page__faqblock}>
                    {/* <Image
                        className={styles.page__descriptionBigShape}
                        src={descriptionBigShape}
                        alt=""
                        width={330}
                        height={330}
                        priority={true}
                    /> */}
                    <h4 className={styles.page__subtitle}>Вопросы и ответы</h4>

                    <div className={styles.page__faqContainer}>
                        {faqDatadeploy.map((item) => (
                            <div
                                key={item.id}
                                className={`${styles.page__faqItem} ${openQuestionId === item.id ? styles.page__faqItemOpen : ''}`}
                            >
                                <div
                                    className={styles.page__faqQuestion}
                                    onClick={() => toggleQuestion(item.id)}
                                >
                                    <p className={styles.page__faqtext}>
                                        {item.question}
                                    </p>
                                    <div className={styles.page__faqIcon}>
                                        <Plus className={styles.page__plus} />
                                    </div>
                                </div>
                                <div
                                    className={`${styles.page__faqAnswer} ${
                                        openQuestionId === item.id
                                    }`}
                                >
                                    <p className={styles.page__faqtext}>
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="">
                    <p className={styles.page__textblocknon}>
                        Мы имеем большой опыт работы с высоконагруженными
                        проектами и используем современные инструменты и
                        технологии для обеспечения их стабильной работы.
                    </p>
                </div>

                <div className="">
                    <p className={styles.page__textblock}>
                        Свяжитесь с нами, чтобы узнать больше о наших услугах и
                        начать работу над вашим проектом.
                    </p>
                </div>

                <div className={styles.page__blockmodal}>
                    <p className={styles.page__blockmodaltext}>
                        Обсудить проект
                    </p>
                    <div className={styles.page__blockmodalform}>
                        <Blockmodal
                            mode="inline"
                            showImage={false}
                            className={styles.customFormStyle}
                        />
                        <div className={styles.page__imageSection}>
                            <Image
                                className={styles.page__formImage}
                                src={Frametwo}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
