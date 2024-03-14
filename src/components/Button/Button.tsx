
import clsx from "clsx";
import styles from "./Button.module.css";
import { IconLoading } from "../../assets/Icons";

type ButtonProps = {
  variant?: "transparent" | "filled" | "transparentFill";
  fullWidth?: boolean;
  isLoading?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

const Button = ({
  children,
  variant,
  isLoading,
  fullWidth,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.btn, {
        [styles.transparent]: variant === "transparent",
        [styles.filled]: variant === "filled",
        [styles.transparentFill]: variant === "transparentFill",
        [styles.fullWidth]: fullWidth,

      })}
      disabled={props.disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className={styles.icon}>
          <IconLoading />
        </span>
      ) : children}
    </button>
  );
};

export default Button;