import { LogoSVG } from "@/svg/LogoSVG";
import styles from "./Footer.module.scss";
import { Button } from "../ui/Button/Button";
import { VkSVG } from "@/svg/VkSVG";
import { WhatsupSVG } from "@/svg/WhatsupSVG";
import { InSVG } from "@/svg/InSVG";
import { MailSVG } from "@/svg/MailSVG";
import { TgSVG } from "@/svg/TgSVG";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__left}>
        <LogoSVG className={styles.footer__left__svg} />
        <Button>Напишите нам</Button>
      </div>
      <div className={styles.footer__right}>
        <p>Связаться с нами:</p>
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
    </footer>
  );
};
