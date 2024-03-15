import Avatar from "../../../../components/Avatar/Avatar";
import { AvatarType } from "../../../../types";
import styles from "./AvatarPicker.module.css";
import globalStyles from "../../../../styles/index.module.css";
import { useGetAvatars } from "../../hooks/use-get-avatars";
import Button from "../../../../components/Button/Button";

type Props = {
  onSelectAvatar: (avatar: AvatarType) => void;
  onClose: () => void;
};
const AvatarPicker = ({ onSelectAvatar, onClose }: Props) => {
  const { data, isLoading } = useGetAvatars();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.wrapper}>
      <div className={globalStyles.container}>
        <div className={styles.section}>
          <Button onClick={onClose} variant="transparentFill">
            Back
          </Button>
          <h1 className={globalStyles.title}>Choose an Avatar</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.scroll}>
            {data?.map((avatar) => {
              return (
                <div className={styles.box} key={avatar.name}>
                  <h4 id={avatar.name}>{avatar.name}</h4>
                  <div className={styles.box__items}>
                    {avatar.items.map((item) => (
                      <span
                        onClick={() => onSelectAvatar(item)}
                        key={item.id}
                        className={styles.box__items__item}
                      >
                        <Avatar image={item.image} size="large" />
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarPicker;
