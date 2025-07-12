import Link from 'next/link';
import { LogoSVG } from '@/svg/LogoSVG';
import styles from './Footer.module.scss';
import { Button } from '../ui/Button/Button';
import { VkSVG } from '@/svg/VkSVG';
import { WhatsupSVG } from '@/svg/WhatsupSVG';
import { InSVG } from '@/svg/InSVG';
import { MailSVG } from '@/svg/MailSVG';
import { TgSVG } from '@/svg/TgSVG';
import { tg_invert } from '@/img';
import { Footercart } from '../Footercart/Footercart'; 

import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__left}>
        <LogoSVG className={styles.footer__left__svg} />
        <Image
          className={styles.icon}
          src={tg_invert}
          alt="иконка телеграма"
          width={94}
          height={83}
          priority={true}
        />{' '}
      </div>
      <div>
        <div className={styles.footerbox}>
          <div className={styles.footerstile}>
            <Link className={styles.navlink_blog} href="#">
              Entergen
            </Link>
            <Link className={styles.navlink_blog} href="#">
              Проекты
            </Link>
            <Link className={styles.navlink_blog} href="#">
              О нас
            </Link>
          </div>

          <div className={styles.footerstile}>
            <Link className={styles.navlink_blog} href="#">
              Услуги
            </Link>
            <Link className={styles.navlink_blog} href="#">
              Контакты
            </Link>
            <Link className={styles.navlink_blog} href="#">
              Блог
            </Link>
          </div>
          <div className={styles.footerstilephone}>
            <p className={styles.phon}>Телефон</p>
            <Link
              className={styles.navlink_blog}
              href="tel:+79000000000"
              itemProp="telephone">
              +7 (900) 000-00-00"
            </Link>
            <p className={styles.phon}>Почта</p>
            <Link
              className={styles.navlink_blog}
              href="mailto:info@example.com">
              info@example.com
            </Link>
          </div>
        </div>
        <div></div>
      </div>
      {/* <Image src={footerShape} alt="f" className={styles.footer__shape} /> */}
      <div className={styles.footer__right}>
        <p className={styles.navlink_blog}>Напишите нам:</p>
        <ul>
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
          <li>
            <TgSVG />
          </li>
        </ul>
      </div>
      {/* <Footercart /> */}
    </footer>
  );
};
