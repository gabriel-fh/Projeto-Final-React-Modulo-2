import clsx from "clsx";
import styles from "./Button.module.css";


type ButtonProps = {
    children: string;
    type?: 'transparent' | 'filled';
}

const Button = ({children, type}: ButtonProps) => {
    return(
        <button className={clsx(styles.btn, {
            [styles.transparent]: type === 'transparent',
            [styles.filled]: type === 'filled',
        })}>{children}</button>
    )
}

export default Button;