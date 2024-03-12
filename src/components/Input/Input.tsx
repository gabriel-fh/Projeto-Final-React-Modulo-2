import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  placeholder?: string;
  error?: string;
  type?: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, type, error, ...props }: InputProps, ref) => {
    return (
      <div className={styles.inputContent}>
        <label htmlFor={label} className={styles.label}>
          {label}
        </label>
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          id={label}
          ref={ref}
          {...props} // Encaminha todas as outras propriedades
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

export default Input;
