import styles from './Button.module.scss'
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    loading?: boolean
}

export const Button = ({
    children,
    onClick,
    disabled,
    loading,
    className,
    ...rest
}: IButton) => {
    return (
        <button
            className={`${styles.button} ${className} ${
                loading ? styles.loading : ''
            }`}
            disabled={disabled}
            onClick={onClick}
            {...rest}
        >
            {loading && <span className={styles.spinner} />}
            {children}
        </button>
    )
}
