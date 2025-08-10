import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

interface IInput
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {}

export const Input = ({ className, ...rest }: IInput) => {
    const classname = clsx(className, styles.input)
    return <input className={classname} {...rest} />
}
