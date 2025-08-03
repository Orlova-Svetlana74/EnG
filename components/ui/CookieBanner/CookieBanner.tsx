import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.scss";

const COOKIE_STORAGE_KEY = "cookie-consent";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.cookieBanner}>
      <p>
        Наш сайт использует файлы cookie, сервисы веб-аналитики. Оставаясь на
        сайте, вы подтверждаете свое согласие на использование данных.
      </p>
      <button onClick={handleAccept}>Ок</button>
    </div>
  );
};
