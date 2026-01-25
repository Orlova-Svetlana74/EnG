'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Button } from '@/components/ui/Button/Button'
import { useState } from 'react'
import { Footer } from '@/components/footer/Footer'
import BotApp from '@/svg/BotAppSVG'
import Plus from '@/svg/PlusSVG'
import RobotAvatar from '@/svg/RobotAvatarSVG'
import { faqDatabotApp } from '@/data/databotApp'
// import { faqDatabotApp } from '@/data/faqDatabotApp'
import Blockmodal from '@/components/ui/blockModal/blockmodal'
import { Frametwo } from '@/public/img'

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
} from '@/public/img'

export default function DevelopmenBotApp() {
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
                <h3 className={styles.page__title}>
                    Разработка ботов <br /> и Mini Apps приложений <br /> на
                    базе Telegram и VK
                </h3>

                <section className={styles.page__developsection}>
                    <div className={styles.page__developtitle}>
                        <p className={styles.page__titletext}>
                            Мы создаем чат-боты, web-боты и Mini Apps
                            приложения, которые могут автоматизировать и
                            геймифицировать процессы для эффективного
                            взаимодействия с целевой аудиторией. Поможем вам
                            оптимизировать работу с клиентами, сделать
                            внутренние процессы эффективнее и снизить нагрузку
                            на систему поддержки и отдел продаж.  
                        </p>
                        <Button
                            className={styles.page__button}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Заказать разработку
                        </Button>
                    </div>
                    <div className={styles.page__proektstile}>
                        <BotApp />
                    </div>
                </section>
                <Image
                    className={styles.page__descriptionSmallShape}
                    src={descriptionSmallShape}
                    alt=""
                    priority={true}
                />

                <h2 className={styles.page__subtitle}>
                    Mini Apps: удобство и функциональность
                </h2>
                <p className={styles.page__subtext}>
                    Mini Apps — это небольшие приложения, которые предназначены
                    для выполнения конкретных задач на мобильных устройствах.
                    Они отличаются от полноценных мобильных приложений своей
                    компактностью и специализацией.
                </p>

                <h5 className={styles.page__toptext}>
                    Mini Apps могут быть разных видов, например:
                </h5>
                <div className={styles.page__blockminiapps}>
                    <div className={styles.page__shoppingcart}>
                        <Image
                            src={shoppingcart}
                            alt=""
                            width={38}
                            height={37}
                            className={styles.services__icon}
                        />
                        <p className={styles.page__subtextlist}>
                            сервисы для заказа товаров и услуг
                        </p>
                    </div>
                    <div className={styles.page__shoppingcart}>
                        <Image
                            src={sms}
                            alt=""
                            width={38}
                            height={37}
                            className={styles.services__icon}
                        />
                        <p className={styles.page__subtextlist}>
                            сервисы для заказа товаров и услуг
                        </p>
                    </div>
                    <div className={styles.page__shoppingcart}>
                        <Image
                            src={game}
                            alt=""
                            width={38}
                            height={37}
                            className={styles.services__icon}
                        />
                        <p className={styles.page__subtextlist}>
                            сервисы для заказа товаров и услуг
                        </p>
                    </div>
                    <div className={styles.page__shoppingcart}>
                        <Image
                            src={creditcard}
                            alt=""
                            width={38}
                            height={37}
                            className={styles.services__icon}
                        />
                        <p className={styles.page__subtextlist}>
                            сервисы для заказа товаров и услуг
                        </p>
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
                    <h2 className={styles.page__subtitle}>
                        Почему Mini Apps так популярны?  
                    </h2>
                    <div className={styles.page__listblock}>
                        <li className={styles.page__list}>
                            Удобство использования
                        </li>
                        <p className={styles.page__listtext}>
                            Mini Apps разработаны для быстрой интеграции и
                            обеспечения удобного пользовательского опыта. Они
                            позволяют выполнять необходимые задачи быстро и
                            эффективно.
                        </p>
                        <li className={styles.page__list}>
                             Отсутствие необходимости загрузки полноценного
                            приложения.
                        </li>
                        <p className={styles.page__listtext}>
                            Благодаря своей специализации, Mini Apps могут
                            предлагать более узкий, но глубокий функционал по
                            сравнению с универсальными приложениями.
                        </p>
                        <li className={styles.page__list}>
                            Разнообразие функций.
                        </li>
                        <p className={styles.page__listtext}>
                            Mini Apps можно установить и использовать без
                            необходимости загрузки полноценного мобильного
                            приложения. Это особенно удобно для пользователей,
                            которые хотят попробовать новое приложение без
                            лишних усилий.
                        </p>
                    </div>
                </div>

                {/* <div className={styles.page__subtitlerobot}> */}
                <div className={styles.page__subtitlerobot}>
                    <div>
                        <div className={styles.page__subtitleblock}>
                            <h2 className={styles.page__subtitle}>
                                Чат-боты: ваш надёжный помощник <br /> в
                                бизнесе 
                            </h2>
                        </div>
                        <div className={styles.page__titleblock}>
                            <p className={styles.page__titletext}>
                                Чат-боты — это программы, которые могут вести
                                диалог с пользователями в режиме реального
                                времени. Они могут быть интегрированы в
                                различные приложения и сервисы.
                            </p>
                        </div>
                    </div>

                    <div>
                        <RobotAvatar />
                    </div>
                </div>
                {/* </div> */}
                <h2 className={styles.page__subtitle}>
                    Преимущества использования чат-ботов:
                </h2>
                <div className={styles.page__blockadvantages}>
                    <h5 className={styles.page__titletext}>
                        01. Быстрый ответ на запросы
                    </h5>
                    <p className={styles.page__titletext}>
                        Чат-боты могут выполнять рутинные и повторяющиеся
                        задачи, такие как обработка заказов, предоставление
                        информации о продуктах или услугах, оформление заявок и
                        т. д.
                    </p>

                    <h5 className={styles.page__titletext}>
                        02. Автоматизация рутинных задач
                    </h5>
                    <p className={styles.page__titletext}>
                        Чат-боты могут обрабатывать большое количество запросов
                        одновременно и предоставлять ответы в кратчайшие сроки.
                    </p>

                    <h5 className={styles.page__titletext}>
                        03. Доступность 24/7
                    </h5>
                    <p className={styles.page__titletext}>
                        Чат-боты доступны пользователям круглосуточно, что
                        особенно удобно в ситуациях, когда нужно получить помощь
                        или информацию вне рабочего времени.  
                    </p>

                    <h5 className={styles.page__titletext}>
                        04. Персонализация
                    </h5>
                    <p className={styles.page__titletext}>
                        Современные чат-боты могут адаптироваться к
                        индивидуальным потребностям пользователей, предлагая
                        персонализированные рекомендации и решения.  
                    </p>

                    <h5 className={styles.page__titletext}>
                        05. Интеграция с другими приложениями и сервисами.
                    </h5>
                    <p className={styles.page__titletext}>
                        Чат-боты можно интегрировать с различными системами и
                        платформами, что позволяет расширить их функциональность
                        и использовать для решения более сложных задач.
                    </p>
                </div>

                <div>
                    <h2 className={styles.page__subtitle}>
                        Применение чат-ботов:
                    </h2>
                    <p className={styles.page__titletext}>
                        Чат-боты могут быть использованы в различных <br />{' '}
                        сферах, включая:
                    </p>

                    <div className={styles.page__block}>
                        <div className={styles.page__imgblockpage}>
                            <div className={styles.page__imgblock}>
                                <Image
                                    src={currency_exchange}
                                    alt=""
                                    width={38}
                                    height={37}
                                    className={styles.page__icon}
                                />
                                <h5 className={styles.page__titletext}>
                                    Бизнес и коммерция
                                </h5>
                            </div>
                            <p className={styles.page__titletext}>
                                Чат-боты могут помочь компаниям автоматизировать
                                обработку заказов, предоставлять клиентам
                                информацию о продуктах и услугах, проводить
                                опросы и собирать обратную связь.
                            </p>
                        </div>

                        <div>
                            <div className={styles.page__imgblock}>
                                <Image
                                    src={school}
                                    alt=""
                                    width={38}
                                    height={37}
                                    className={styles.page__icon}
                                />
                                <h5 className={styles.page__titletext}>
                                    Образование
                                </h5>
                            </div>
                            <p className={styles.page__titletext}>
                                Чат-боты могут стать помощниками в обучении,
                                предоставляя студентам информацию, отвечая на
                                вопросы и помогая с выполнением заданий.
                            </p>
                        </div>
                        <div>
                            <div className={styles.page__imgblock}>
                                <Image
                                    src={health_and_safety}
                                    alt=""
                                    width={38}
                                    height={37}
                                    className={styles.page__icon}
                                />
                                <h5 className={styles.page__titletext}>
                                    Здравоохранение
                                </h5>
                            </div>
                            <p className={styles.page__titletext}>
                                Чат-боты могут быть использованы для
                                предоставления медицинских консультаций,
                                напоминаний о приёме лекарств, записи на приём к
                                врачу и т. д.
                            </p>
                        </div>
                        <div>
                            <div className={styles.page__imgblock}>
                                <Image
                                    src={joystick}
                                    alt=""
                                    width={38}
                                    height={37}
                                    className={styles.page__icon}
                                />
                                <h5 className={styles.page__titletext}>
                                    Развлечения и игры
                                </h5>
                            </div>
                            <p className={styles.page__titletext}>
                                Чат-боты могут использоваться для создания
                                интерактивных игр и развлечений, которые
                                вовлекают пользователей в увлекательный диалог.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.page__faqblock}>
                    <Image
                        className={styles.page__descriptionBigShape}
                        src={descriptionBigShape}
                        alt=""
                        width={330}
                        height={330}
                        priority={true}
                    />
                    <h4 className={styles.page__subtitle}>Вопросы и ответы</h4>

                    <div className={styles.page__faqContainer}>
                        {faqDatabotApp.map((item) => (
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
                <p className={styles.page__blockmodalpunkt}>
                    Профессиональная команда разработчиков студии Entergen
                    помогает компаниям в России и Европе автоматизировать рутину
                    и сделать рабочие процессы быстрее, проще и эффективнее.
                    Работайте не на время, а на результат. 
                </p>
                <p className={styles.page__blockmodalpunkt}>
                    Свяжитесь с нами, чтобы узнать больше о наших услугах и
                    начать работу над вашим проектом.
                </p>

                <div className={styles.page__blockmodal}>
                    <p className={styles.page__blockmodaltext}>
                        Напишите нам
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
