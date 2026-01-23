'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Button } from '@/components/ui/Button/Button'
import { useState } from 'react'
import { Footer } from '@/components/footer/Footer'
import TestingSVG from '@/svg/TestingSVG'
import Plus from '@/svg/PlusSVG'
import { faqDatatest } from '@/data/datatest'
import Blockmodal from '@/components/ui/blockModal/blockmodal'
import { Frametwo } from '@/public/img'

import { descriptionSmallShape, offerShape, projectsShape } from '@/public/img'

export default function Testing() {
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
                className={styles.page__descriptionSmallShape}
                src={descriptionSmallShape}
                alt=""
                priority={true}
            />

            <div className={styles.page}>
                <h1 className={styles.page__title}>
                    Тестирование и обеспечение <br /> качества (Quality
                    Assurance) 
                </h1>
                <section className={styles.page__developsection}>
                    <div className={styles.page__developsectioncontent}>
                        <div className={styles.page__developtitle}>
                            <p className={styles.page__titletext}>
                                Проверим соответствие IT-продукта установленным
                                <br />
                                требованиям и стандартам качества. <br />
                                Предотвратим ошибки и дефекты в продукте <br />
                                на всех этапах его разработки и внедрения.
                            </p>                            
                            <Button
                                className={styles.page__button}
                                onClick={() => setIsModalOpen(true)}
                            >
                                Заказать проект
                            </Button>
                        </div>
                    </div>

                    <div className={styles.page__proektstile}>
                        <TestingSVG />
                    </div>
                </section>

                <h2 className={styles.page__subtitle}>
                    Какие методы QA мы используем:
                </h2>
                <div className={styles.page__subtitlecontent}>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            1 Планирование тестирования
                        </h5>
                        <p className={styles.page__text}>
                            Определяем стратегии, подходы и методы тестирования,
                            выбираем тестовые <br /> сценарии и планируем
                            ресурсы.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            2 Разработка тест-кейсов
                        </h5>
                        <p className={styles.page__text}>
                            Создаем подробные инструкции для проверки
                            функциональности продукта, <br /> включая
                            положительные и отрицательные тесты.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            3 Автоматизация тестирования
                        </h5>
                        <p className={styles.page__text}>
                            Используем специализированные инструменты для
                            автоматического выполнения <br /> тестовых
                            сценариев, что позволяет ускорить процесс
                            тестирования и повысить <br />
                            его эффективность.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            4 Выполнение тестов
                        </h5>
                        <p className={styles.page__text}>
                            Тестируем IT-продукты в соответствии с
                            разработанными тест-кейсами.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            5 Отчётность и анализ результатов
                        </h5>
                        <p className={styles.page__text}>
                            Собираем и анализируем данные о найденных ошибках и
                            дефектах, готовим <br /> отчёты для разработчиков и
                            руководства.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            6 Мониторинг качества
                        </h5>
                        <p className={styles.page__text}>
                            Контролируем качество продукта на всех этапах
                            разработки, выявляем <br /> и устраняем причины
                            возникновения дефектов.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            7 Регрессионное тестирование
                        </h5>
                        <p className={styles.page__text}>
                            Проверяем IT-продукты после внесения изменений на
                            предмет сохранения <br /> его функциональности и
                            соответствия требованиям.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.page__subtitleblock}>
                            8 Верификация и валидация
                        </h5>
                        <p className={styles.page__text}>
                            Проверяем соответствие продукта требованиям
                            (верификация) <br /> и ожиданиям пользователей
                            (валидация).
                        </p>
                    </div>
                    <p className={styles.page__titletext}>
                        Тестирование и обеспечение качества являются важными
                        составляющими процесса разработки программного
                        обеспечения и помогают создавать надёжные и качественные
                        продукты.
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
                        {faqDatatest.map((item) => (
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
