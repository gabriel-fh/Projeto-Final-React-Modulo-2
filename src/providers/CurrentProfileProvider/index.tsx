import { createContext, useCallback, useContext } from "react";

import { ProfileType } from "../../types";
import useLocalStorage from "@rehooks/local-storage";

type CurrentProfileContextType = {
  currentProfile: ProfileType | null;
  changeProfile: (profile: ProfileType) => void;
};

const CurrentProfileContext = createContext<CurrentProfileContextType>({
  currentProfile: null,
  changeProfile: () => {},
});

const useCurrentProfileBase = () => {
  const [value, setValue] = useLocalStorage<ProfileType | null>(
    "profile",
    null
  );

  const changeProfile = useCallback(
    (profile: ProfileType) => {
      setValue(profile);
    },
    [setValue]
  );

  return {
    currentProfile: value,
    changeProfile,
  };
};

export const CurrentProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value = useCurrentProfileBase();
  return (
    <CurrentProfileContext.Provider value={value}>
      {children}
    </CurrentProfileContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrentProfile = () => {
  const context = useContext(CurrentProfileContext);
  if (!context) {
    throw new Error(
      "useCurrentProfile must be used within an CurrentProfileProvider"
    );
  }

  return context;
};
