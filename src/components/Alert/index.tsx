
import { IconWarning } from "../../assets/Icons";
import styles from "./index.module.css";

type AlertProps = {
  children: React.ReactNode;
};

const Alert = ({ children }: AlertProps) => {
  return (
    <div className={styles.container}>
      <IconWarning />
      {children}
    </div>
  );
};

export default Alert;