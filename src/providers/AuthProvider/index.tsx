import { createContext, useCallback, useContext, useMemo } from "react";


import { User } from "../../types";
import { decodeJwt } from "jose";
import { useLocalStorage } from "@rehooks/local-storage";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

const useAuthBase = () => {
  const [token, setToken] = useLocalStorage<string | null>("token", null);

  const navigate = useNavigate();

  const login = useCallback(
    (token: string) => {
      setToken(token);
      navigate('/profile');
    },
    [setToken, navigate]
  );

  const logout = useCallback(() => {
    setToken(null);
    navigate('/login');
  }, [navigate, setToken]);

  const user = useMemo(() => {
    if (!token) return null;

    try {
      const decodedToken = decodeJwt<{ user: User }>(token);
      return decodedToken.user;
    } catch (error) {
      return null;
    }
  }, [token]);

  return {
    user,
    login,
    logout,
  };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useAuthBase();
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
