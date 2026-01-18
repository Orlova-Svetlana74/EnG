'use client'
import Link from 'next/link'
import styles from './Footer.module.scss'
import { VkSVG } from '@/svg/VkSVG'
import { WhatsupSVG } from '@/svg/WhatsupSVG'
import { InSVG } from '@/svg/InSVG'
import { TgSVG } from '@/svg/TgSVG'
import { Footercart } from '../footercart/Footercart'
import { usePathname } from 'next/navigation'
import { WebsiteLogo } from '@/svg/Website_logo'

export const Footer = () => {
    const path = usePathname()

    return (
        <footer id="contacts">
            <div className={styles.footer}>
                <div className={styles.footer__contents}>
                    <div className={styles.footer__logotg}>
                        <Link className={styles.footer__logoLink} href="/">
                            <WebsiteLogo className={styles.footer__logo} />
                        </Link>
                    </div>

                    <div className={styles.footer__stylephone}>
                        <h6>Почта</h6>

                        <Link
                            className={styles.footer__navlink}
                            href="mailto:enter.gen@mail.ru"
                        >
                            enter.gen@mail.ru
                        </Link>

                        <h6 className={styles.footer__phone}>Телефон</h6>
                        <Link
                            className={styles.footer__navlink}
                            href="tel:+79266661028"
                            itemProp="telephone"
                        >
                            + 7 (926) 666-10-28
                        </Link>

                        <h6>Почта</h6>
                        <Link
                            className={styles.footer__navlink}
                            href="mailto:generals22@mail.ru"
                        >
                            generals22@mail.ru
                        </Link>
                    </div>
                </div>

                <div className={styles.footer__contents}>
                    <div className={styles.footer__footerstile}>
                        <Link
                            className={styles.footer__navlink}
                            href="/projects"
                        >
                            Проекты
                        </Link>
                        <Link className={styles.footer__navlink} href="/about">
                            О нас
                        </Link>
                        <Link className={styles.footer__navlink} href="#">
                            Контакты
                        </Link>
                        <Link
                            className={styles.footer__navlink}
                            href="/services"
                        >
                            Услуги
                        </Link>
                    </div>

                    <div className={styles.footer__right}>
                        <h6>Напишите нам:</h6>
                        <ul>
                            <li>
                                <a
                                    href="https://t.me/entergen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Мы в Телеграмме"
                                >
                                    <TgSVG />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://vk.com/entergen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Мы в ВКонтакте"
                                >
                                    <VkSVG />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/79266661028"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <WhatsupSVG />
                                </a>
                            </li>
                            
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    // aria-label="Мы в ВКонтакте"
                                >
                                    <InSVG />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.footer__tgFixed}>
                <a
                    href="https://t.me/entergen"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Мы в Телеграмме"
                >
                    <TgSVG />
                </a>
            </div>
            <Footercart />
        </footer>
    )
}
