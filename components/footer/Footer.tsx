'use client'
import Link from 'next/link'
import LogoSVG from '@/svg/LogoSVG'
import styles from './Footer.module.scss'
import { VkSVG } from '@/svg/VkSVG'
import { WhatsupSVG } from '@/svg/WhatsupSVG'
import { InSVG } from '@/svg/InSVG'
import { TgSVG } from '@/svg/TgSVG'
import { Footercart } from '../footercart/Footercart'
import { usePathname } from 'next/navigation'
import TGreverse from '@/svg/TGreverseSVG'

export const Footer = () => {
    const path = usePathname()

    return (
        <footer id="contacts">
            <div className={styles.footer}>
                <div className={styles.footer__contents}>
                    <div className={styles.footer__logotg}>
                        <Link className={styles.footer__logoLink} href="/">
                            <LogoSVG className={styles.footer__leftsvg} />
                        </Link>

                        <TGreverse className={styles.footer__tgrev} />
                    </div>

                    <div className={styles.footer__stylephone}>
                        <h6>Почта</h6>
                        <Link
                            className={styles.footer__navlink}
                            href="mailto:enter.gen@mail.ru"
                        >
                            enter.gen@mail.ru
                        </Link>
                        <Link
                            className={styles.footer__navlink}
                            href="mailto:entergen.company@gmail.com"
                        >
                            entergen.company@gmail.com
                        </Link>
                        <h6 className={styles.footer__phone}>Телефон</h6>
                        <Link
                            className={styles.footer__navlink}
                            href="tel:+79266661028"
                            itemProp="telephone"
                        >
                            + 7 (926) 666-10-28
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
                        </ul>
                    </div>
                </div>
            </div>
            <Footercart />
        </footer>
    )
}
