import { useNavigate } from "react-router-dom";

import Alert from "../../../components/Alert/";
import Avatar from "../../../components/Avatar/Avatar";
import { Loader } from "../../../components/Loader/Loader";
import styles from "./DeleteProfile.module.css";

import globalStyles from "../../../styles/index.module.css";
import Button from "../../../components/Button/Button";
import { useDeleteProfile } from "./hooks/use-delete-profile";
import { useTranslation } from "react-i18next";

export const DeleteProfile = () => {
  const navigate = useNavigate();

  const { profile, err, loading, handleDelete } = useDeleteProfile();

  const { t } = useTranslation();

  if (err) {
    return (
      <div className={globalStyles.container}>
        <Alert>
          {err} {t("deleteProfile.alert.backToProfile")}
          <button onClick={() => navigate("/profile")}>
            {t("deleteProfile.alert.button.backToProfile")}
          </button>
        </Alert>
      </div>
    );
  }

  return (
    <>
      <div className={globalStyles.container}>
        <div className={styles.header}>
          <Avatar image={profile?.avatar.image} name={profile?.name} disabled />
        </div>

        <h1 className={globalStyles.title}>{t("deleteProfile.title")}</h1>

        <p className={styles.p}>{t("deleteProfile.description")}</p>

        <div className={styles.actions}>
          <Button onClick={handleDelete} disabled={loading} variant="filled">
            {t("deleteProfile.button.delete")}
          </Button>
          <Button
            variant="transparentFill"
            onClick={() => navigate("/profile")}
          >
            {t("deleteProfile.button.cancel")}
          </Button>
        </div>
      </div>

      {loading && <Loader />}
    </>
  );
};
