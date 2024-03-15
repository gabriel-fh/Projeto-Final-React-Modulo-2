import { useNavigate } from "react-router-dom";

import Alert from "../../../components/Alert/";
import Avatar from "../../../components/Avatar/Avatar";
import { Loader } from "../../../components/Loader/Loader";
import styles from "./DeleteProfile.module.css";

import globalStyles from "../../../styles/index.module.css";
import Button from "../../../components/Button/Button";
import { useDeleteProfile } from "./hooks/use-delete-profile";

export const DeleteProfile = () => {
  const navigate = useNavigate();

  const { profile, err, loading, handleDelete } = useDeleteProfile();

  if (err) {
    return (
      <div className={globalStyles.container}>
        <Alert>
          {err} clica aqui pra voltar{" "}
          <button onClick={() => navigate("/profile")}>
            Voltar para o perfil
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

        <h1 className={globalStyles.title}>Delete Profile ?</h1>

        <p className={styles.p}>
          This will permanently delete all settings and preferences for this
          profile, including My List and Continue Watching.
        </p>

        <div className={styles.actions}>
          <Button onClick={handleDelete} disabled={loading} variant="filled">
            Delete Profile
          </Button>
          <Button
            variant="transparentFill"
            onClick={() => navigate("/profile")}
          >
            Cancel
          </Button>
        </div>
      </div>

      {loading && <Loader />}
    </>
  );
};
