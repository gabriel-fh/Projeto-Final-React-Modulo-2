import * as S from "../styles";

import { useMemo, useState } from "react";


import { DropDownMenu } from "./DropDownMenu";
import { ProfileType } from "../../../types";
import { useAuth } from "../../../providers/AuthProvider";
import { useCurrentProfile } from "../../../providers/CurrentProfileProvider";
import { useGetProfiles } from "../../../hooks/use-get-profiles";
import { useNavigate } from "react-router-dom";
import Avatar from "../../../components/Avatar/Avatar";

export const HomeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentProfile, changeProfile } = useCurrentProfile();
  const { data } = useGetProfiles();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const profiles = useMemo(() => {
    return data?.filter((profile) => profile.id !== currentProfile?.id);
  }, [data, currentProfile]);
  
  const handleChangeProfile = (profile: ProfileType) => {
    setIsOpen(false);
    changeProfile(profile);
    navigate(0);
  };

  return (
    <span>
      <S.Avatar onClick={() => setIsOpen(!isOpen)}>
        <Avatar image={currentProfile?.avatar.image} size="small" disabled />
      </S.Avatar>
      {isOpen && profiles && currentProfile && (
        <DropDownMenu
          onClose={() => setIsOpen(false)}
          profile={currentProfile}
          profiles={profiles}
          onChangeProfile={handleChangeProfile}
          onLogout={logout}
        />
      )}
    </span>
  );
};
