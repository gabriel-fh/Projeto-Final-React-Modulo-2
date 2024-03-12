import styles from "./Input.module.css";

type InputProps = {
  label: string;
  placeholder?: string;
  disabled: boolean;
  error: string;
};

const Input = ({ label, placeholder, disabled, error }: InputProps) => {
  return (
    <div className={styles.inputContent}>
      <label htmlFor="email" className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        id="email"
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;
