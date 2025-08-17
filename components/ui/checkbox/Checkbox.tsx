import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Input } from '../input/Input'
import styles from './Checkbox.module.scss'
import { CheckSVG } from '@/svg/CheckSVG'
import clsx from 'clsx'

interface ICheckbox
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {}
export const Checkbox = ({ ...rest }: ICheckbox) => {
    return (
        <label className={styles.checkbox}>
            <Input
                type="checkbox"
                className={styles.checkbox__hidden}
                {...rest}
            />
            <div
                className={clsx(
                    styles.checkbox__square,
                    rest.checked && styles.checkbox__square_active
                )}
            >
                <CheckSVG />
            </div>
            <p>Согласен с политикой конфиденциальности</p>
        </label>
    )
}
