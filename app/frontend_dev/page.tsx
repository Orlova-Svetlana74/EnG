'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Button } from '@/components/ui/Button/Button'
import { useState } from 'react'
import { Footer } from '@/components/footer/Footer'
import FrontendDevTopSVG from '@/svg/FrontendDevTopSVG'
import Plus from '@/svg/PlusSVG'
import { faqDatafront } from '@/data/datafrontend'
import Blockmodal from '@/components/ui/blockModal/blockmodal'
import { Frametwo } from '@/public/img'

import { descriptionSmallShape, offerShape, projectsShape } from '@/public/img'

export default function Backdev() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)
    const [openQuestionId, setOpenQuestionId] = useState<number | null>(null)

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
            <Image
                className={styles.page__descriptionSmallShape}
                src={descriptionSmallShape}
                alt=""
                priority={true}
            />

            <div className={styles.page}>
                <h1 className={styles.page__title}>
                    Frontend-разработка: <br /> создание удобного <br /> и
                    функционального интерфейса
                </h1>
                <section className={styles.page__developsection}>
                    <div className="">
                        <div className={styles.page__developtitle}>
                            <p className={styles.page__titletext}>
                                Мы создадим удобный пользовательский интерфейс
                                для достижения новых целей вашего бизнеса.
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
                        <FrontendDevTopSVG />
                    </div>
                </section>

                <h2 className={styles.page__subtitle}>
                    Что включает в себя Frontend-разработка?
                </h2>
                <div className={styles.page__subtitlecontent}>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            • Вёрстка
                        </h5>
                        <p className={styles.page__text}>
                            создание структуры веб-страницы с помощью HTML.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            • Оформление
                        </h5>
                        <p className={styles.page__text}>
                            применение стилей с помощью CSS для придания
                            визуального оформления.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            • Программирование
                        </h5>
                        <p className={styles.page__text}>
                            написание кода на JavaScript для реализации
                            интерактивности и функциональности.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            • Адаптивная вёрстка
                        </h5>
                        <p className={styles.page__text}>
                            обеспечение корректного отображения веб-сайта на
                            различных устройствах и экранах.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            • Интеграция с backend-системой
                        </h5>
                        <p className={styles.page__text}>
                            взаимодействие с сервером и базами данных для
                            получения данных и выполнения операций.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className={styles.page__subtitle}>
                        Почему вам стоит обратиться за Frontend- <br />разработкой в
                        студию Entergen?
                    </h2>
                    <p className={styles.page__titletextcontent}>
                        Мы предлагаем услуги профессиональных
                        frontend-разработчиков. Поможем сделать удобный и
                        интуитивно понятный интерфейс, который обеспечит
                        эффективное взаимодействие пользователей с веб-сайтом
                        или приложением.
                    </p>
                </div>
                <Image
                    className={styles.page__projectsShape}
                    src={projectsShape}
                    alt=""
                    width={300}
                    height={300}
                    priority={true}
                />

                <div className={styles.page__faqblock}>
                    <h4 className={styles.page__subtitle}>Вопросы и ответы</h4>

                    <div className={styles.page__faqContainer}>
                        {faqDatafront.map((item) => (
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
                    <p className={styles.page__textblock}>
                        Свяжитесь с нами, чтобы узнать больше о наших услугах и
                        начать работу <br /> над вашим проектом.
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
