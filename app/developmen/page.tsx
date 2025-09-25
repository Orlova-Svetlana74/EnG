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
            answer: 'Доверив разработку веб-ресурса опытным специалистам, вы получаете гарантию того, что итоговый продукт будет полностью соответствовать потребностям вашего бизнеса, учитывая все современные тенденции и требования индустрии. Профессиональные разработчики учитывают все детали, что позволяет создать удобный сайт высокого качества и способствует достижению стратегических целей компании.',
        },
        {
            id: 3,
            question:
                'Почему за созданием сайта стоит обратиться именно к нам?',
            answer: 'Мы предлагаем высокий уровень качества работ по разработке и продвижению сайтов. Наша команда состоит из опытных разработчиков, дизайнеров, менеджеров и программистов. Мы знаем, как создать сайт, который будет соответствовать вашим потребностям и целям.',
        },
        {
            id: 4,
            question: 'Что представляет собой разработка сайта?',
            answer: 'Разработка сайта - это комплексный подход, который подразумевает его изготовление «под ключ» . Это услуга, которая позволит осуществить развитие бизнеса, создать и расширить целевую аудиторию, сделать более удобным и быстрым взаимодействие с пользователями (клиентами, соискателями вакансий, партнёрами). Разработка сайта упростит вам процесс продвижения вашего бизнеса.',
        },
        {
            id: 5,
            question: 'Как можно заказать создание сайта?',
            answer: 'Вы можете написать нам через форму обратной связи и в свободной форме описать ваши требования и пожелания. Мы свяжемся с вами, уточним детали и предложим решение.',
        },
        {
            id: 6,
            question: 'Какова стоимость и сроки создания сайта?',
            answer: 'Базовая стоимость разработки сайта начинается от 50 000 рублей. Минимальные сроки разработки составляют 2 недели. Для получения точного расчёта стоимости и сроков свяжитесь с нами.',
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
                    </div>
                    <div className={styles.page__proektstile}>
                        <Developtitle />
                    </div>
                </section>
                <Button className={styles.page__button}>
                    Заказать разработку
                </Button>

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
                            <p className={styles.page__textcontent}>
                                На этом этапе изучается целевая аудитория,
                                конкуренты, цели
                                <br /> и задачи проекта. <br /> Формулируются
                                конкретные цели, которых нужно достичь
                                <br /> с помощью сайта. Изучаются сайты
                                конкурентов, чтобы выявить <br />
                                их сильные и слабые стороны. Определяются
                                потребности,
                                <br /> предпочтения и ожидания целевой
                                аудитории.
                            </p>
                        </div>
                        <div className={styles.page__proektstile}>
                            <Analitics />
                        </div>
                    </section>
                    <section className={styles.page__developsectionback}>
                        <div className={styles.page__proektstile}>
                            <Proektir />
                        </div>

                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                02. Проектирование
                            </h5>
                            <p className={styles.page__textcontent}>
                                На этапе проектирования создается структура
                                сайта,
                                <br /> разрабатывается прототип, создается
                                черновой вариант <br />
                                сайта, отображающий расположение элементов
                                <br /> и функциональность. Формулируются
                                требования <br /> к функциональности, дизайну и
                                другим аспектам сайта.
                            </p>
                        </div>
                    </section>
                    <section className={styles.page__developsection}>
                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                03. Дизайн
                            </h5>
                            <p className={styles.page__textcontent}>
                                Создаются визуальные макеты всех страниц сайта,
                                <br />
                                определяющие цветовую схему, типографику,
                                расположение
                                <br /> элементов. 
                                <br /> Идет проработка пользовательского
                                интерфейса (UI),
                                <br /> определяется удобство использования
                                сайта, его навигация и взаимодействие с
                                пользователем. 
                            </p>
                        </div>
                        <div className={styles.page__proektstile}>
                            <Desine />
                        </div>
                    </section>
                    <section className={styles.page__developsectionback}>
                        <div className={styles.page__proektstile}>
                            <Develop />
                        </div>
                        <div className={styles.page__developtitle}>
                            <h5 className={styles.page__developsuptitle}>
                                04. Разработка
                            </h5>
                            <p className={styles.page__textcontent}>
                                На этапе разработки делается адаптивная <br />
                                вёрстка. Адаптивный сайт будет автоматически
                                корректно
                                <br /> отображаться на всех типах устройств и с
                                ним удобно будет взаимодействовать. <br />{' '}
                                Готовый сайт должен работать быстро и без сбоев.{' '}
                                <br /> Для этого на этапе разработки постоянно
                                производятся <br />
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
                        <Checkmark className={styles.page__checkmark} />
                        <div className={styles.page__result}>
                            <h5 className={styles.page__developsuptitle}>
                                Коммерческие результаты
                            </h5>
                            <p className={styles.page__textcontent}>
                                При отсутствии предыдущего сайта - многократное
                                увеличение объема <br />
                                продаж. При наличии старого сайта - существенное
                                повышение
                                <br /> конверсии посетителей в покупателей.
                            </p>
                        </div>
                    </div>
                    <div className={styles.page__advantages}>
                        <Checkmark className={styles.page__checkmark} />
                        <div className={styles.page__result}>
                            <h5 className={styles.page__developsuptitle}>
                                Брендовые преимущества 
                            </h5>
                            <p className={styles.page__textcontent}>
                                Повысится узнаваемость бренда. Профессиональный
                                сайт создает
                                <br /> впечатление надежности и серьезности
                                бизнеса,
                                <br /> что повышает лояльность клиентов.
                            </p>
                        </div>
                    </div>

                    <div className={styles.page__advantages}>
                        <Checkmark className={styles.page__checkmark} />
                        <div className={styles.page__result}>
                            <h5 className={styles.page__developsuptitle}>
                                Конкурентные преимущества
                            </h5>
                            <p className={styles.page__textcontent}>
                                Новый сайт позволит укрепить позиций на рынке за
                                счет <br />
                                качественного онлайн-присутствия и более
                                эффективного <br />
                                взаимодействия с клиентами.
                            </p>
                        </div>
                    </div>
                    <Button className={styles.page__button}>
                        Обсудить проект
                    </Button>
                </div>
                <div className={styles.page__faqblock}>
                    <h4 className={styles.page__subtitle}>Вопросы и ответы</h4>
                    <div className={styles.page__faqContainer}>
                        {faqData.map((item) => (
                            <div key={item.id} className={styles.page__faqItem}>
                                <div
                                    className={styles.page__faqQuestion}
                                    onClick={() => toggleQuestion(item.id)}
                                >
                                    <p className={styles.page__faqtext}>
                                        {item.question}
                                    </p>
                                    <div className={styles.page__faqIcon}>
                                        {openQuestionId === item.id ? (
                                            <Minus className={styles.page__minus} />
                                        ) : (
                                            <Plus className={styles.page__plus} />
                                        )}
                                    </div>
                                </div>
                                {openQuestionId === item.id && (
                                    <div className={styles.page__faqAnswer}>
                                        <p className={styles.page__faqtext}>
                                            {item.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.page__blockmodal}>
                    <p className={styles.page__blockmodaltext}>
                        Свяжитесь с нами, чтобы узнать больше о наших услугах и
                        начать работу<br /> над вашим проектом.
                    </p>
                    <Blockmodal />
                </div>
                <Footer />
            </div>
        </>
    )
}
