import styles from "./Button.module.scss";
interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
}



export const Button = ({ children, onClick }: IButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
