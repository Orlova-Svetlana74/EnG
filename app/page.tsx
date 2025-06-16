"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { LogoSVG } from "@/svg/LogoSVG";
import { Button } from "@/components/ui/Button/Button";
import { mainShape, project1Img } from "@/img";
import { MenuSVG } from "@/svg/MenuSVG";
import { useState } from "react";
import clsx from "clsx";
import { Footer } from "@/components/footer/Footer";
import Modal from "@/components/ui/modal/Modal";

export default function Home() {
  const [isMenu, setIsMenu] = useState(true);

  console.log(isMenu);

  return (
    <div className={styles.page}>
      <Image className={styles.page__mainShape} src={mainShape} alt="" />
      <Modal isOpen={isMenu} onClose={() => setIsMenu(false)} />
      <div className={styles.container}>
        <header
          className={clsx(
            styles.container__header,
            isMenu && styles.container__header_open
          )}
        >
          <LogoSVG className={styles.container__logo} />
          <div className={styles.container__header__menu}>
            <MenuSVG onClick={() => setIsMenu(!isMenu)} />
            <ul className={styles.container__header__list}>
              <li className={styles.container__header__item}>Entergen</li>
              <li className={styles.container__header__item}>Наши работы</li>
              <li className={styles.container__header__item}>О нас</li>
              <li className={styles.container__header__item}>Контакты</li>
            </ul>
          </div>
        </header>
        <p className={styles.container__header__title}>
          <b>Entergen</b> — команда, создающая <br /> современные,
          масштабируемые
          <br /> и эффективные приложения
          <br /> для бизнеса.
        </p>
        <div className={styles.container__description}>
          <div className={styles.container__description__text}>
            <div className={styles.container__description__actions}>
              <p>
                Мы возьмем ваш проект <b>под ключ</b>, чтобы задача целиком
                решалась одной командой, а вам не пришлось искать много
                специалистов.
              </p>
              <p>
                Все задачи решаются одной командой! Хочешь заказать проект -
                <b> тебе к нам</b>!
              </p>
            </div>
            <Button>Мне понравилось! Тоже хочу проект! </Button>
          </div>
          <div className={styles.container__description__adding}>
            <p>
              <b>Мы собрались вместе чтобы сделать вам крутой сайт</b>. Крутым
              будет не только сайт, но и работа с нами. Мы поможем вам
              сформировать идею, задизайним, сверстаем, запрограммируем и
              протестируем Давай посмотрим что мы уже сделали:
            </p>
          </div>
        </div>
        <div className={styles.container__projects}>
          <div className={styles.container__projects__item}>
            <Image src={project1Img} alt="f" />
            <p>текст текст текст текст текст текст текст текст</p>
          </div>
          <div className={styles.container__projects__item}>
            <Image src={project1Img} alt="f" />
            <p>текст текст текст текст текст текст текст текст</p>
          </div>
          <div className={styles.container__projects__item}>
            <Image src={project1Img} alt="f" />
            <p>текст текст текст текст текст текст текст текст</p>
          </div>
          <div className={styles.container__projects__item}>
            <Image src={project1Img} alt="f" />
            <p>текст текст текст текст текст текст текст текст</p>
          </div>
        </div>
        <div className={styles.container__we}>
          <p>
            <b>Что мы умеем? </b>
          </p>
          <p>
            Мы — создаем цифровые продукты, которые упрощают
            <br /> бизнес-процессы и повышают их эффективность. <br />А еще с
            нами легко работать — мы ценим прозрачность,
            <br /> удобство взаимодействия и нацелены на результат.
          </p>
        </div>
        <div className={styles.container__skills}>
          <div className={styles.container__skills__item}>
            <h4>Адаптивность</h4>
            <p>
              У нас уже есть готовые решения, но мы также открыты к новым
              задачам и готовы адаптироваться под потребности вашего бизнеса.
            </p>
          </div>
          <div className={styles.container__skills__item}>
            <h4>Приложения</h4>
            <p>
              Мы берем на себя разработку и поддержку веб-приложений, интеграцию
              автоматизированных систем.
            </p>
          </div>
          <div className={styles.container__skills__item}>
            <h4>Детали</h4>
            <p>
              Мы внимательны к деталям, соблюдаем сроки и подходим к каждому
              проекту с глубоким пониманием задач.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
