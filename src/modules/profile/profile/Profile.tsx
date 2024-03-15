import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar/Avatar";
import styles from "./Profile.module.css";
import globalStyles from "../../../styles/index.module.css";
import Button from "../../../components/Button/Button";
import { Loader } from "../../../components/Loader/Loader";
import { useProfile } from "./hooks/use-profile";
const Profile = () => {

  const { profiles, goToPage, isEditing, toggleEditing, isLoading } = useProfile();

  return (
    <main className={globalStyles.container}>
      <div className={styles.section}>
        <h1 className={globalStyles.title}>Who’s Watching?</h1>

        <div className={styles.avatars}>
          {profiles?.map((profile) => (
            <button
              className={styles.avatar__item}
              key={profile.id}
              onClick={() => goToPage(profile.id)}
            >
              <Avatar image={profile.avatar.image} name={profile.name} isEdit={isEditing} />
            </button>
          ))}
          <Link to="/create-profile" className={`${styles.avatar__item} ${styles.avatar_item__new}`} >
            <Avatar name="New Profile" />
          </Link>
        </div>

        <div className={styles.avatar__actions}>
          <Button variant="transparentFill" onClick={toggleEditing}>
            {isEditing ? "Done" : "Edit"}
          </Button>
        </div>
      </div>
      {isLoading && <Loader />}
    </main>
  );
};

export default Profile;
