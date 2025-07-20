import styles from "./Button.module.scss";
interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({ children, onClick, disabled, loading }: IButton) => {
  return (
    <button
      className={`${styles.button} ${loading ? styles.loading : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {loading && <span className={styles.spinner} />}
      {children}
    </button>
  );
};
