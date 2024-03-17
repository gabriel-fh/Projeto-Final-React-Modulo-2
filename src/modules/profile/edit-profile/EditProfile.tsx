import Alert from "../../../components/Alert";
import Avatar from "../../../components/Avatar/Avatar";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { Loader } from "../../../components/Loader/Loader";
import AvatarPicker from "../components/avatar-picker/AvatarPicker";
import globalStyles from "../../../styles/index.module.css";
import styles from "./index.module.css";
import { useEditProfile } from "./hooks/use-edit-profile";
import { useTranslation } from "react-i18next";
export const EditProfile = () => {

  const {
    id,
    name,
    selectedAvatar,
    isOpen,
    loading,
    error,
    isDisabled,
    setIsOpen,
    setName,
    handleSelectAvatar,
    handleSave,
    navigate,
  } = useEditProfile();

  const { t } = useTranslation();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={globalStyles.container}>
            <div className={styles.limiter}>
              <div className={styles.container}>
                <h1 className={globalStyles.title}>{t('editProfile.title')}</h1>
                <div className="flex-center" onClick={() => setIsOpen(!isOpen)}>
                  <Avatar image={selectedAvatar?.image} isEdit />
                </div>
                <div>
                  <Input
                    label={`${t('editProfile.input.name')}`}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    disabled={loading}
                  />
                </div>
                <div className={styles.actions}>
                  <Button
                    fullWidth
                    variant="filled"
                    onClick={handleSave}
                    disabled={isDisabled}
                  >
                    {t('editProfile.button.save')}
                  </Button>
                  <Button
                    variant="transparent"
                    fullWidth
                    onClick={() => navigate(`/delete-profile/${id}`)}
                  >
                    {t('editProfile.button.delete')}
                  </Button>
                </div>
                {error && <Alert>{error}</Alert>}
              </div>
            </div>
          </div>
          {isOpen ? (
            <AvatarPicker
              onSelectAvatar={handleSelectAvatar}
              onClose={() => setIsOpen(false)}
            />
          ) : null}
        </>
      )}
    </>
  );
};
