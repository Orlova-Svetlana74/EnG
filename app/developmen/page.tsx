'use client'
import styles from './page.module.scss'
import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'

import { Button } from '@/components/ui/Button/Button'
import { useState } from 'react'
import Developtitle from '@/svg/DeveloptitleSVG'
import Analitics from '@/svg/AnaliticsSVG'
import Proektir from '@/svg/ProektirSVG'
import Desine from '@/svg/DesineSVG'
import Develop from '@/svg/DevelopSVG'
import { Input } from '@/components/ui/input/Input'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import Checkmark from '@/svg/CheckmarkSVG'
import Plus from '@/svg/PlusSVG'
import Minus from '@/svg/MinusSVG'
// import Modal from '@/components/ui/modal/Modal'
import Blockmodal from '@/components/ui/blockModal/blockmodal'

interface FAQItem {
    id: number
    question: string
    answer: string
}

export default function Developmen() {
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuHeader, setIsMenuHeader] = useState(false)
    const [openQuestionId, setOpenQuestionId] = useState<number | null>(null) // Для отслеживания открытого вопроса

    const handlerButtonClick = () => {
        setIsMenuHeader(true)
        setIsMenu(true)
    }

    // Функция для переключения состояния вопроса
    const toggleQuestion = (id: number) => {
        setOpenQuestionId(openQuestionId === id ? null : id)
    }

    // Данные для вопросов и ответов
    const faqData: FAQItem[] = [
        {
            id: 1,
            question: 'Почему важно создавать качественный сайт?',
            answer: 'Качественный веб-сайт, обладающий интуитивно понятным интерфейсом и оптимизированный для быстрой загрузки, является ключевым элементом маркетинговой стратегии компании. Он не только способствует увеличению конверсии и росту продаж, но и формирует положительное восприятие бренда, повышая его конкурентоспособность на рынке.',
        },
        {
            id: 2,
            question: 'Для чего нужно профессиональное сопровождение?',
            answer: 'Профессиональное сопровождение обеспечивает бесперебойную работу сайта и его постоянное развитие.',
        },
        {
            id: 3,
            question:
                'Почему за созданием сайта стоит обратиться именно к нам?',
            answer: 'Мы имеем многолетний опыт и предлагаем комплексные решения под ключ.',
        },
        {
            id: 4,
            question: 'Что представляет собой разработка сайта?',
            answer: 'Это комплексный процесс, включающий проектирование, дизайн, программирование и тестирование.',
        },
        {
            id: 5,
            question: 'Как можно заказать создание сайта?',
            answer: 'Свяжитесь с нами через форму на сайте или по телефону для консультации.',
        },
        {
            id: 6,
            question: 'Какова стоимость и сроки создания сайта?',
            answer: 'Стоимость и сроки зависят от сложности проекта и обсуждаются индивидуально.',
        },
    ]

    return (
        <>
            <Header
                isMenuHeader={isMenuHeader}
                setIsMenuHeader={setIsMenuHeader}
                handlerButtonClick={handlerButtonClick}
            />
            <div className={styles.page}>
                <section className={styles.page__developsection}>
                    <div className={styles.page__developtitle}>
                        <h3 className={styles.page_title}>
                            Веб-разбработка: <br />
                            создание сайта под ключ
                        </h3>
                        <p className={styles.page__titletext}>
                            Веб-разработка представляет собой многогранный
                            процесс создания интерактивного веб-сайта, который
                            станет мощным инструментом для выхода бизнеса в
                            онлайн-пространство и привлечения целевой
                            аудитории.  Мы тщательно анализируем и прорабатывам
                            все аспекты проекта, обеспечивая его
                            функциональность, эргономичность и эстетическую
                            привлекательность. 
                        </p>
                        <Button className={styles.page__button}>
                            Заказать разработку
                        </Button>
                    </div>
                    <div className={styles.page__icon}>
                        <Developtitle />
                    </div>
                </section>

                <h4 className={styles.page__subtitle}>
                    Этапы разработки сайта с нуля
                </h4>
                <p className={styles['page__subtitle--text']}>
                    Разработка сайта от идеи до запуска включает <br /> в себя
                    несколько этапов:
                </p>
                <div className={styles.page__blockcontent}>
                    <section className={styles.page__developsection}>
                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                01. Аналитика
                            </h5>
                            <p className={styles.page__titletext}>
                                На этом этапе изучается целевая аудитория,
                                конкуренты, цели и задачи проекта. Формулируются
                                конкретные цели, которых нужно достичь с помощью
                                сайта. Изучаются сайты конкурентов, чтобы
                                выявить их сильные и слабые стороны.
                                Определяются потребности, предпочтения и
                                ожидания целевой аудитории.
                            </p>
                        </div>
                        <div>
                            <Analitics />
                        </div>
                    </section>
                    <section className={styles.page__developsection}>
                        <div>
                            <Proektir />
                        </div>

                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                02. Проектирование
                            </h5>
                            <p className={styles.page__titletext}>
                                На этапе проектирования создается структура
                                сайта, разрабатывается прототип, создается
                                черновой вариант сайта, отображающий
                                расположение элементов и
                                функциональность. Формулируются требования к
                                функциональности, дизайну и другим аспектам
                                сайта.
                            </p>
                        </div>
                    </section>
                    <section className={styles.page__developsection}>
                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                03. Дизайн
                            </h5>
                            <p className={styles.page__titletext}>
                                Создаются визуальные макеты всех страниц сайта,
                                определяющие цветовую схему, типографику,
                                расположение элементов.  Идет проработка
                                пользовательского интерфейса (UI), определяется
                                удобство использования сайта, его навигация и
                                взаимодействие с пользователем. 
                            </p>
                        </div>
                        <div>
                            <Desine />
                        </div>
                    </section>
                    <section className={styles.page__developsection}>
                        <div>
                            <Develop />
                        </div>
                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                04. Разработка
                            </h5>
                            <p className={styles.page__titletext}>
                                На этапе разработки делается адаптивная
                                вёрстка. Адаптивный сайт будет автоматически
                                корректно отображаться на всех типах устройств и
                                с ним удобно будет взаимодействовать. Готовый
                                сайт должен работать быстро и без сбоев. Для
                                этого на этапе разработки постоянно производятся
                                различные тестирования и ведутся работы по
                                оптимизации.
                            </p>
                        </div>
                    </section>
                </div>
                <div>
                    <h4 className={styles.page__subtitle}>Результаты</h4>
                    <p className={styles['page__subtitle--text']}>
                        Заказывая разработку сайта в EnterGen вы получите:
                    </p>
                    <div className={styles.page__advantages}>
                        <Checkmark />
                        <div className={styles.page__result}>
                            <h5 className={styles.page__developsuptitle}>
                                Коммерческие результаты
                            </h5>
                            <p className={styles.page__titletext}>
                                При отсутствии предыдущего сайта - многократное
                                увеличение объема продаж. При наличии старого
                                сайта - существенное повышение конверсии
                                посетителей в покупателей.
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantages}>
                        <Checkmark />
                        <div className={styles.page__result}>
                            <h5 className={styles.page__developsuptitle}>
                                Брендовые преимущества 
                            </h5>
                            <p className={styles.page__titletext}>
                                Повысится узнаваемость бренда. Профессиональный
                                сайт создает впечатление надежности и
                                серьезности бизнеса, что повышает лояльность
                                клиентов.
                            </p>
                        </div>
                    </div>

                    <div className={styles.page__advantages}>
                        <Checkmark />
                        <div className={styles.page__result}>
                            <h5 className={styles.page__developsuptitle}>
                                Конкурентные преимущества
                            </h5>
                            <p className={styles.page__titletext}>
                                Новый сайт позволит укрепить позиций на рынке за
                                счет качественного онлайн-присутствия и более
                                эффективного взаимодействия с клиентами.
                            </p>
                        </div>
                    </div>
                    <Button>Обсудить проект</Button>
                </div>
                <div>
                    <h4 className={styles.page__subtitle}>Вопросы и ответы</h4>
                    <div className={styles.page__faqContainer}>
                        {faqData.map((item) => (
                            <div key={item.id} className={styles.page__faqItem}>
                                <div
                                    className={styles.page__faqQuestion}
                                    onClick={() => toggleQuestion(item.id)}
                                >
                                    <p className={styles.page__titletext}>
                                        {item.question}
                                    </p>
                                    <div className={styles.page__faqIcon}>
                                        {openQuestionId === item.id ? (
                                            <Minus />
                                        ) : (
                                            <Plus />
                                        )}
                                    </div>
                                </div>
                                {openQuestionId === item.id && (
                                    <div className={styles.page__faqAnswer}>
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.page__blockmodal}>
                    <Blockmodal />                    
                </div>
                <Footer />
            </div>
        </>
    )
}
