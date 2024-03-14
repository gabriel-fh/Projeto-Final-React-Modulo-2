import { useCallback, useState } from "react";

import { useCurrentProfile } from "../../../../providers/CurrentProfileProvider";
import { useGetProfiles } from "../../../../hooks/use-get-profiles";
import { useNavigate } from "react-router-dom";

export const useProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { changeProfile } = useCurrentProfile();
  const { data: profiles, isLoading } = useGetProfiles();

  const navigate = useNavigate();

  const handleClick = useCallback(
    (id: number) => {
      if (isEditing) {
        navigate(isEditing ? `/edit-profile/${id}` : "/");
        return;
      }
      const profile = profiles?.find((profile) => profile.id === id);
      changeProfile(profile!);
      navigate("/");
    },
    [isEditing, profiles, changeProfile, navigate]
  );

  return {
    goToPage: handleClick,
    isEditing,
    toggleEditing: () => setIsEditing(!isEditing),
    profiles,
    isLoading,
  };
};
