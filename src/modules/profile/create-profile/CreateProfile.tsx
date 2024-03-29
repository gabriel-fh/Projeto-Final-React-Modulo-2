import styles from "./CreateProfile.module.css";
import Alert from "../../../components/Alert";
import Avatar from "../../../components/Avatar/Avatar";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { Loader } from "../../../components/Loader/Loader";
import globalStyles from "../../../styles/index.module.css";
import AvatarPicker from "../components/avatar-picker/AvatarPicker";
import { useCreateProfile } from "./hooks/use-create-profile";
import { useTranslation } from "react-i18next";

const CreateProfile = () => {
  const {
    register,
    handleSubmit,
    handleClose,
    errors,
    isPending,
    isError,
    avatar,
    selectAvatar,
    isDisabled,
    open,
    close,
    isOpen,
  } = useCreateProfile();

  const { t } = useTranslation();

  return (
    <>
      <div className={globalStyles.container}>
        <div className={styles.limiter}>
          <div className={styles.container}>
            <h1 className={globalStyles.title}>{t('createProfile.title')}</h1>
            <div className="flex-center" onClick={open}>
              <Avatar image={avatar?.image} isEdit />
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <Input
                  label={""}
                  type="hidden"
                  error={errors?.avatarId?.message}
                  {...register("avatarId")}
                />
                <Input
                  label={`${t('createProfile.input.name')}`}
                  disabled={isPending}
                  error={errors.name?.message}
                  {...register("name")}
                />
              </div>
              <div className={styles.actions}>
                <Button
                  type="submit"
                  fullWidth
                  isLoading={isPending}
                  disabled={isDisabled}
                  variant={!isDisabled ? "filled" : undefined}
                >
                  {t('createProfile.button.save')}
                </Button>
                <Button
                  variant="transparentFill"
                  onClick={handleClose}
                  type="button"
                >
                  {t('createProfile.button.cancel')}
                </Button>
              </div>
            </form>
            {isError && <Alert>Ocorreu um erro ao criar o perfil</Alert>}
          </div>
        </div>
      </div>
      {isOpen ? (
        <AvatarPicker onSelectAvatar={selectAvatar} onClose={close} />
      ) : null}

      {isPending && <Loader />}
    </>
  );
};

export default CreateProfile;
