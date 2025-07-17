'use client';
import Image from 'next/image';
import styles from './page.module.scss';
// import { LogoSVG } from '@/svg/LogoSVG';
import Slider from '@/components/slider/slider';

import { Button } from '@/components/ui/Button/Button';
import {
  mainShape,
  project1Img,
  Frame,
  Shape_left_hi,
  Shape_left_down,
  Shape_right_hi,
  Shape_right_down,
  icon1,
  icon2,
  icon3,
  icon4,
  senior_back,
  senior_frontend,
} from '@/img';
import { MenuSVG } from '@/svg/MenuSVG';
import { useState } from 'react';
// import clsx from 'clsx';
import { Footer } from '@/components/footer/Footer';
import Modal from '@/components/ui/modal/Modal';
import { Header } from '@/components/header/header';

export default function Home() {
  const [isMenu, setIsMenu] = useState(true);

  console.log(isMenu);

  return (
    <div className={styles.bodypage}>
      <Header />
      <div className={styles.page}>
        <div className={styles.container}>
          <Image
            className={styles.shape_left_hi}
            src={Shape_left_hi}
            alt="геометрическая фигура"
            width={600}
            height={400}
            priority={true}
          />{' '}
          <div className={styles.textblock}>
            <div className={styles.toptextblock}>
              <h3 className={styles.toptext}>Наша миссия</h3>
              <p className={styles.textteam}>
                Мы верим, что каждый бизнес заслуживает современного и
                эффективного онлайн-присутствия. Наша миссия — создавать сайты,
                которые не просто выглядят привлекательно, но и приносят
                реальную пользу, помогая достигать бизнес-целей наших клиентов.
              </p>
            </div>
            <Image
              className={styles.Frame}
              src={Frame}
              alt="фигуры людей"
              width={460}
              height={331}
              priority={true}
            />{' '}
          </div>
          <Image
            className={styles.shape_left_hi_hidden}
            src={Shape_left_hi}
            alt="геометрическая фигура"
            width={600}
            height={400}
            priority={true}
          />{' '}
        </div>
        <div className={styles.blockcontent}>
          <Image
            className={styles.shape_left_down}
            src={Shape_left_down}
            alt="геометрическая фигура"
            width={700}
            height={500}
            priority={true}
          />
          <div className={styles.topblock}>
            {' '}
            <h3 className={styles.toptext}>Наши преимущества</h3>
            <div className={styles.advantages}>
              <div className={styles.advant}>
                <div className={styles.toptitle}>
                  <Image
                    className={styles.icon}
                    src={icon2}
                    alt="иконка"
                    width={71}
                    height={62}
                    priority={true}
                  />{' '}
                  <h4 className={styles.subtitle}>
                    Опыт <br /> и профессионализм
                  </h4>
                </div>
                <p className={styles.textteam}>
                  Наша команда состоит из опытных разработчиков, дизайнеров и
                  тестировщиков. Мы знаем, как создать сайт, который будет
                  соответствовать вашим потребностям и целям.
                </p>
              </div>
              <div className={styles.advant}>
                <div className={styles.toptitle}>
                  <Image
                    className={styles.icon}
                    src={icon1}
                    alt="иконка"
                    width={71}
                    height={62}
                    priority={true}
                  />{' '}
                  <h4 className={styles.subtitle}>
                    Индивидуальный <br /> подход
                  </h4>
                </div>
                <p className={styles.textteam}>
                  Мы не предлагаем готовые решения, мы разрабатываем уникальные
                  сайты и приложения, которые учитывают особенности вашего
                  бизнеса и целевую аудиторию
                </p>
              </div>
              <div className={styles.advant}>
                <div className={styles.toptitle}>
                  <Image
                    className={styles.icon}
                    src={icon3}
                    alt="иконка"
                    width={71}
                    height={62}
                    priority={true}
                  />{' '}
                  <h4 className={styles.subtitle}>
                    Современные
                    <br /> технологии
                  </h4>
                </div>
                <p className={styles.textteam}>
                  Мы используем современные технологии и инструменты для
                  создания сайтов и приложений, которые соответствуют последним
                  тенденциям в веб-разработке.
                </p>
              </div>
              <div className={styles.advant}>
                <div className={styles.toptitle}>
                  <Image
                    className={styles.icon}
                    src={icon3}
                    alt="иконка"
                    width={71}
                    height={62}
                    priority={true}
                  />{' '}
                  <h4 className={styles.subtitle}>Комплексный подход</h4>
                </div>
                <p className={styles.textteam}>
                  Помимо разработки, мы предлагаем услуги по интеграции с
                  популярными сервисами, пишем боты для Telegram, VK, WhatsApp,
                  Mini App. Пишем системы автоматизации для бизнеса и многое
                  другое.
                </p>
              </div>
            </div>
          </div>{' '}
          <Image
            className={styles.shape_right_hi}
            src={Shape_right_hi}
            alt="геометрическая фигура"
            width={700}
            height={500}
            priority={true}
          />
        </div>
        <div className={styles.teamblock}>
          <Image
            className={styles.Shape_right_down_hidden}
            src={Shape_right_down}
            alt="геометрическая фигура"
            width={700}
            height={500}
            priority={true}
          />{' '}
          <div className={styles.team}>
            <div className={styles.toptexteam}>
              <h3 className={styles.toptext}>Наша команда</h3>
              <p className={styles.textteam}>
                В нашей команде работают профессионалы
                <br /> своего дела
              </p>
            </div>

            <Slider />
          </div>{' '}
          <Image
            className={styles.Shape_right_down}
            src={Shape_right_down}
            alt="геометрическая фигура"
            width={700}
            height={500}
            priority={true}
          />{' '}
        </div>
      </div>

      <Footer />
    </div>
  );
}
