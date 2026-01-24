'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Button } from '@/components/ui/Button/Button'
import { useState } from 'react'
import { Footer } from '@/components/footer/Footer'
import { AlcreationSVG } from '@/svg/AlcreationSVG'
import Plus from '@/svg/PlusSVG'
import { faqDataAlcreation } from '@/data/dataAIcreation'
import Blockmodal from '@/components/ui/blockModal/blockmodal'
import { Frametwo } from '@/public/img'

import {
    descriptionSmallShape,
    offerShape,
    projectsShape,
    AI1,
    AI2,
    AI3,
    AI4,
    AI5,
    AI6,
    AI7,
    AI8,
    check_box,
} from '@/public/img'

export default function AIcreation() {
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
                <h1 className={styles.page__title}>Создание и интеграции ИИ</h1>
                <section className={styles.page__developsection}>
                    <div className="">
                        <div className={styles.page__developtitle}>
                            <p className={styles.page__titletext}>
                                Интегрируем ИИ-технологии в ваш бизнес <br />
                                для максимальной эффективности. Автоматизируем
                                рутинные задачи, увеличиваем прибыль и
                                освобождаем время для стратегических решений.  
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
                        <AlcreationSVG />
                    </div>
                </section>
                <Image
                    className={styles.page__descriptionSmallShape}
                    src={descriptionSmallShape}
                    alt=""
                    priority={true}
                />

                <h2 className={styles.page__subtitle}>
                    Преимущества внедрения ИИ:
                </h2>
                <p>
                    Внедрение ИИ позволяет бизнесу не только оптимизировать
                    текущие процессы, но и открывать новые возможности для роста
                    и развития.
                </p>
                <div className={styles['page__advantages-block']}>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={AI6}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p>Автоматизация рутинных задач</p>
                            <p className={styles.page__text}>
                                ИИ освобождает сотрудников от монотонной работы,
                                такой как обработка счетов, составление отчетов
                                и ответы на частые запросы, позволяя им
                                сосредоточиться на более творческих и
                                стратегических задачах.
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={AI1}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p>Повышение эффективности</p>
                            <p className={styles.page__text}>
                                Системы ИИ способны выполнять задачи быстрее и
                                точнее, чем человек, что приводит к общему
                                ускорению рабочих процессов и увеличению
                                производительности.
                            </p>
                        </div>
                    </div>

                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={AI5}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p>Снижение затрат</p>
                            <p className={styles.page__text}>
                                Автоматизация и оптимизация процессов с помощью
                                ИИ позволяют сократить расходы на персонал,
                                устранить избыточные операции и минимизировать
                                издержки, связанные с ручным трудом.
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={AI3}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p>Улучшение клиентского опыта</p>
                            <p className={styles.page__text}>
                                ИИ обеспечивает персонализированный подход к
                                каждому клиенту, предоставляет быстрые ответы и
                                релевантные рекомендации, что повышает
                                удовлетворенность и лояльность.
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={AI2}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p>Гибкость и масштабируемость</p>
                            <p className={styles.page__text}>
                                Решения на основе ИИ легко адаптируются к
                                изменениям на рынке и позволяют масштабировать
                                бизнес без пропорционального увеличения штата,
                                что делает их универсальными для компаний любого
                                размера.
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={AI4}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p>Точные прогнозы и более быстрые решения</p>
                            <p className={styles.page__text}>
                                Аналитические возможности ИИ позволяют делать
                                точные прогнозы спроса, оптимизировать запасы и
                                принимать обоснованные решения на основе данных
                                в режиме реального времени.
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={AI7}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p>Оптимизация логистики и управления запасами</p>
                            <p className={styles.page__text}>
                                ИИ помогает оптимизировать транспортные
                                маршруты, прогнозировать спрос и эффективно
                                управлять складскими запасами, сокращая издержки
                                и повышая эффективность цепочки поставок. 
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantage}>
                        <div className={styles['page__advantage-header']}>
                            <Image
                                className={styles.page__icon}
                                src={AI8}
                                alt=""
                                width={82}
                                height={82}
                                priority={true}
                            />
                        </div>
                        <div className={styles.page__subtitletext}>
                            <p>Минимизация ошибок</p>
                            <p className={styles.page__text}>
                                ИИ снижает вероятность человеческих ошибок, что
                                особенно важно при обработке больших объемов
                                данных или выполнении критически важных
                                операций.
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

                    <h4 className={styles.page__subtitle}>Результаты</h4>
                    <div>
                        <p>Заказывая интеграцию ИИ в бизнес вы получите:</p>
                        <div>
                            <div>
                                <Image
                                    className={styles.page__icon}
                                    src={check_box}
                                    alt=""
                                    width={82}
                                    height={82}
                                    priority={true}
                                />
                            </div>
                            <div>
                                <p>
                                    Рост эффективности бизнес-процессов на
                                    30-40%
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image
                                    className={styles.page__icon}
                                    src={check_box}
                                    alt=""
                                    width={82}
                                    height={82}
                                    priority={true}
                                />
                            </div>
                            <div>
                                <p>Сокращение затрат на рутинные операции</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image
                                    className={styles.page__icon}
                                    src={check_box}
                                    alt=""
                                    width={82}
                                    height={82}
                                    priority={true}
                                />
                            </div>
                            <div>
                                <p>
                                    Увеличение продаж благодаря персонализации
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image
                                    className={styles.page__icon}
                                    src={check_box}
                                    alt=""
                                    width={82}
                                    height={82}
                                    priority={true}
                                />
                            </div>
                            <div>
                                <p>Улучшение клиентского опыта</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image
                                    className={styles.page__icon}
                                    src={check_box}
                                    alt=""
                                    width={82}
                                    height={82}
                                    priority={true}
                                />
                            </div>
                            <div>
                                <p>Повышение конкурентоспособности компании</p>
                            </div>
                        </div>
                    </div>

                    <h4 className={styles.page__subtitle}>Вопросы и ответы</h4>

                    <div className={styles.page__faqContainer}>
                        {faqDataAlcreation.map((item) => (
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
                {/* <div className="">
                    <p className={styles.page__textblocknon}>
                        Мы имеем большой опыт работы с высоконагруженными
                        проектами и используем современные инструменты и
                        технологии для обеспечения их стабильной работы.
                    </p>
                </div> */}

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
