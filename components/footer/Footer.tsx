'use client'

import Link from 'next/link'
import { LogoSVG } from '@/svg/LogoSVG'
import styles from './Footer.module.scss'
import { VkSVG } from '@/svg/VkSVG'
import { WhatsupSVG } from '@/svg/WhatsupSVG'
import { InSVG } from '@/svg/InSVG'
import { MailSVG } from '@/svg/MailSVG'
import { TgSVG } from '@/svg/TgSVG'
import { Footercart } from '../footercart/Footercart'
import { usePathname } from 'next/navigation'

export const Footer = () => {
    const path = usePathname()

    return (
        <footer id="contacts">
            <div className={styles.footer}>
                <div className={styles.footer__contents}>
                    <div className={styles.footer__left}>
                        <LogoSVG className={styles.footer__left__svg} />
                    </div>

                    <div className={styles.footer__stylephone}>
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
                            generals22@mail.ru generals22@mail.ru
                        </Link>
                    </div>
                </div>

                <div className={styles.footer__contents}>
                    <div className={styles.footer__footerstile}>
                        <Link
                            className={[
                                styles.footer__navlink,
                                path === '/' && styles.footer__navlink_active,
                            ].join(' ')}
                            href="/"
                        >
                            Entergen
                        </Link>
                        <Link className={styles.footer__navlink} href="#">
                            Проекты
                        </Link>
                        <Link className={styles.footer__navlink} href="/about">
                            О нас
                        </Link>
                        <Link
                            className={styles.footer__navlink}
                            href="/services"
                        >
                            Услуги
                        </Link>
                        <Link className={styles.footer__navlink} href="#">
                            Контакты
                        </Link>
                        <Link className={styles.footer__navlink} href="#">
                            Блог
                        </Link>
                    </div>

                    <div className={styles.footer__right}>
                        <h6>Напишите нам:</h6>
                        <ul>
                            <li>
                                <TgSVG />
                            </li>
                            <li>
                                <VkSVG />
                            </li>
                            <li>
                                <WhatsupSVG />
                            </li>
                            <li>
                                <InSVG />
                            </li>
                            <li>
                                <MailSVG />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footercart />
        </footer>
    )
}
