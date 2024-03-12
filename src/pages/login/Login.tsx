import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { FormEvent } from "react";

const Login = () => {

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Link to="/login" className={styles.logo}>
          <img src="/max.webp" alt="Ada Max" />
        </Link>
        <Button type={'transparent'}>Sign Up Now</Button>
      </header>
      <section className={styles.content}>
        <h1 className={styles.title}>Get Started</h1>
        <div className={styles.login}>
          <h2 className={styles.title}>Sign In</h2>
          <p className={styles.description}>Enter your Max or HBO Max account email address and password.</p>
          <form onSubmit={(e) => handleSubmitForm(e)}>
            <Input
              label="Email Address"
              placeholder="email@email.com"
              disabled={false}
              error={''} 
            />
            <div className="form-group">
            <Input
              label="Password"
              disabled={false}
              error={''} 
            />
            </div>
            <div className={styles.btnContainer}>
              <Button type="filled">
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
