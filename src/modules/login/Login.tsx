import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import globalStyles from "../../styles/index.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { IconEyeClosed, IconEyeOpened, IconLang } from "../../assets/Icons";

import Alert from "../../components/Alert";
import useLogin from "./hooks/use-login";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    showPassword,
    errors,
    isPending,
    isError,
    register,
    togglePassword,
    handleSubmit,
  } = useLogin();

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string | undefined) => {
    setIsOpen(!isOpen);
    i18n.changeLanguage(language);
  };

  return (
    <main className={globalStyles.container}>
      <header className={styles.header}>
        <Link to="/login" className={styles.logo}>
          <img src="/max.webp" alt="Ada Max" />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
          <div className={styles.langMenu}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                backgroundColor: `${isOpen ? "rgba(134, 151, 206, 0.3)" : ""}`,
              }}
            >
              <IconLang />
            </button>
            {isOpen && (
              <div className={styles.langOptions}>
                <span onClick={() => changeLanguage('en-US')}>{t('login.button.lang.en-US')}</span>
                <span onClick={() => changeLanguage('pt-BR')}>{t('login.button.lang.pt-BR')}</span>
              </div>
            )}
          </div>
          <Button variant="transparent">{t('login.button.singUp')}</Button>
        </div>
      </header>
      <section className={styles.content}>
        <h1 className={globalStyles.title}>{t('login.title.getStarted')}</h1>
        <div className={styles.login}>
          <h2 className={styles.title}>{t('login.title.signIn')}</h2>
          <p className={styles.description}>
            {t('login.description')}
          </p>
          <form onSubmit={handleSubmit}>
            <Input
              label={t('login.input.email')}
              placeholder="email@email.com"
              type="email"
              disabled={isPending}
              error={errors.email?.message}
              {...register("email")}
            />
            <div className={styles.inputWithIcon}>
              <Input
                label={t('login.input.password')}
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
                {t('login.button.signIn')}
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
