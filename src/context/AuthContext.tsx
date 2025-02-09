import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { User } from "../types/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
  getToken: () => string | null;
  isLoading: boolean;
}

interface AuthState {
  accessToken: string | null;
  user: User | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Cookie helper functions
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;secure;samesite=strict`;
};

const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
};

const removeCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

export const AuthProvider = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [authState, setAuthState] = useState<AuthState>(() => ({
    accessToken: getCookie("accessToken"),
    user: (() => {
      const userData = getCookie("user");
      try {
        return userData ? JSON.parse(atob(userData)) : null;
      } catch {
        return null;
      }
    })()
  }));

  // Token refresh logic
  const refreshToken = useCallback(async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/refresh`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setAuthState({
          accessToken: data.accessToken,
          user: data.user,
        });
        setCookie("accessToken", data.accessToken, 1); // Store for 1 day
        setCookie("user", btoa(JSON.stringify(data.user)), 1);
      } else {
        // If refresh fails, log out
        logout();
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
      logout();
    }
  }, []);

  // Set up periodic token refresh
  useEffect(() => {
    if (authState.accessToken) {
      const REFRESH_INTERVAL = 14 * 60 * 1000; // 14 minutes
      const intervalId = setInterval(refreshToken, REFRESH_INTERVAL);
      return () => clearInterval(intervalId);
    }
  }, [authState.accessToken, refreshToken]);

  // Initial auth state check
  useEffect(() => {
    const validateInitialToken = async () => {
      if (authState.accessToken) {
        try {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/validate`, {
            headers: {
              Authorization: `Bearer ${authState.accessToken}`,
            },
          });
          
          if (!response.ok) {
            throw new Error("Token invalid");
          }
        } catch {
          logout();
        }
      }
      setIsLoading(false);
    };

    validateInitialToken();
  }, []);

  const login = useCallback((token: string, userData: User) => {
    setCookie("accessToken", token, 1);
    setCookie("user", btoa(JSON.stringify(userData)), 1);
    setAuthState({
      accessToken: token,
      user: userData,
    });
    navigate("/admin");
  }, [navigate]);

  const logout = useCallback(() => {
    removeCookie("accessToken");
    removeCookie("user");
    setAuthState({
      accessToken: null,
      user: null,
    });
    navigate("/login");
  }, [navigate]);

  const getToken = useCallback(() => authState.accessToken, [authState.accessToken]);

  const value = {
    isAuthenticated: !!authState.accessToken,
    user: authState.user,
    login,
    logout,
    getToken,
    isLoading,
  };

  if (isLoading) {
    return <div>Loading...</div>; // Consider using a proper loading component
  }

  return (
    <AuthContext.Provider value={value}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};