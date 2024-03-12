import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { IconEyeClosed, IconEyeOpened } from "../../assets/Icons";
import { useLogin } from "./hooks/use-login";
import { Alert } from "../../components/Alert";

const Login = () => {
  const {
    showPassword,
    errors,
    isPending,
    isError,
    register,
    togglePassword,
    handleSubmit,
  } = useLogin();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Link to="/login" className={styles.logo}>
          <img src="/max.webp" alt="Ada Max" />
        </Link>
        <Button variant="transparent">Sign Up Now</Button>
      </header>
      <section className={styles.content}>
        <h1 className={styles.title}>Get Started</h1>
        <div className={styles.login}>
          <h2 className={styles.title}>Sign In</h2>
          <p className={styles.description}>
            Enter your Max or HBO Max account email address and password.
          </p>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email Address"
              placeholder="email@email.com"
              type="email"
              disabled={isPending}
              error={errors.email?.message}
              {...register("email")}
            />
            <div className={styles.inputWithIcon}>
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                disabled={isPending}
                error={errors.password?.message}
                {...register("password")}
              />
              <button
                className={styles.eye}
                type="button"
                onClick={togglePassword}
              >
                {showPassword ? <IconEyeClosed /> : <IconEyeOpened />}
              </button>
            </div>
            <div className={styles.btnContainer}>
              <Button type="submit" variant="filled" isLoading={isPending}>
                Sign In
              </Button>
            </div>
            {isError && <Alert>Credencias inválidas</Alert>}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
