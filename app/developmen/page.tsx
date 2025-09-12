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

export default function Developmen() {
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
                    <div className={styles.page__questions}>
                        <p className={styles.page__titletext}>
                            Почему важно создавать качественный сайт?
                        </p>
                        <Plus />
                    </div>
                    <div className={styles.page__questions}>
                        <p className={styles.page__titletext}>
                            Для чего нужно профессиональное сопровождение?
                        </p>
                        <Plus />
                    </div>
                    <div className={styles.page__questions}>
                        <p className={styles.page__titletext}>
                            Почему за созданием сайта стоит обратиться именно к
                            нам?
                        </p>
                        <Plus />
                    </div>
                    <div className={styles.page__questions}>
                        <p className={styles.page__titletext}>
                            Что представляет собой разработка сайта?
                        </p>
                        <Plus />
                    </div>
                    <div className={styles.page__questions}>
                        <p className={styles.page__titletext}>
                            Как можно заказать создание сайта?
                        </p>
                        <Plus />
                    </div>
                    <div className={styles.page__questions}>
                        <p className={styles.page__titletext}>
                            Какова стоимость и сроки создания сайта ?
                        </p>
                        <Plus />
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            Свяжитесь с нами, чтобы узнать больше о наших
                            услугах и начать работу над вашим проектом.
                        </p>
                        <div>
                            <p>Обсудить проект</p>
                            <Input></Input>
                            <Input />
                            <Input />
                            <Checkbox />
                            <Button>Обсудить проект</Button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
