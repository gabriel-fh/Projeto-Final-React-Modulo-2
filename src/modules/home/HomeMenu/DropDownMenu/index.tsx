import * as S from "../../styles";

import { useEffect, useRef } from "react";


import { ProfileType } from "../../../../types";
import Avatar from "../../../../components/Avatar/Avatar";

type Props = {
  onClose: () => void;
  onLogout: () => void;
  onChangeProfile: (id: ProfileType) => void;
  profile: ProfileType;
  profiles: ProfileType[];
};

export const DropDownMenu = ({
  profile,
  profiles,
  onClose,
  onChangeProfile,
  onLogout,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClose]);

  return (
    <S.DropDownMenu ref={ref}>
      <S.DropDownMenuItem $active>
        <Avatar image={profile.avatar.image} size="small" disabled />
        <span>{profile.name}</span>
      </S.DropDownMenuItem>

      {profiles.map((profile) => (
        <S.DropDownMenuItem
          key={profile.id}
          onClick={() => onChangeProfile(profile)}
        >
          <Avatar image={profile.avatar.image} size="small" disabled />
          <span>{profile.name}</span>
        </S.DropDownMenuItem>
      ))}

      <S.DropDownMenuItem $border onClick={onLogout}>
        Sign Out
      </S.DropDownMenuItem>
    </S.DropDownMenu>
  );
};
