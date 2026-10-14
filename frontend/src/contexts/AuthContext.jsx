import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth/auth.service.js";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [authError, setAuthError] = useState(null);

  const navigate = useNavigate();

  // Verify the saved session when the application starts.
  useEffect(() => {
    let isMounted = true;

    const initializeAuthStatus = async () => {
      try {
        const savedToken = authService.retrieveAuthToken();

        if (savedToken) {
          const verifiedUser = await authService.verifyActiveSession();

          if (isMounted) {
            setCurrentUser(verifiedUser);
          }
        } else {
          authService.clearSessionData();

          if (isMounted) {
            setCurrentUser(null);
          }
        }
      } catch {
        authService.clearSessionData();

        if (isMounted) {
          setCurrentUser(null);
        }
      } finally {
        if (isMounted) {
          setIsAuthenticating(false);
        }
      }
    };

    initializeAuthStatus();

    return () => {
      isMounted = false;
    };
  }, []);

  const clearAuthError = () => {
    setAuthError(null);
  };

  // Register a new account and establish an authenticated session.
  const signup = async (data) => {
    setIsAuthenticating(true);
    setAuthError(null);

    try {
      const result = await authService.registerAccount(data);

      let user = result.user;
      let token = result.token;

      // If registration did not return both a token and user,
      // attempt to log in with the newly created account.
      if (!token || !user) {
        const loginResult = await authService.loginAccount({
          email: data.email,
          password: data.password,
        });

        user = loginResult.user;
        token = loginResult.token;
      } else {
        // Save the session returned by registration.
        localStorage.setItem("authToken", token);
        localStorage.setItem("activeUser", JSON.stringify(user));
      }

      // Never report success without an authenticated session.
      if (!token || !user) {
        authService.clearSessionData();

        throw new Error(
          "Account created, but automatic login failed. Please sign in.",
        );
      }

      setCurrentUser(user);

      return {
        success: true,
        user,
      };
    } catch (err) {
      const errorMsg = err.message || "Registration failed. Please try again.";

      setAuthError(errorMsg);

      return {
        success: false,
        error: errorMsg,
      };
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Log in an existing user.
  const signin = async (credentials) => {
    setIsAuthenticating(true);
    setAuthError(null);

    try {
      const { user, token } = await authService.loginAccount(credentials);

      if (!token || !user) {
        authService.clearSessionData();

        throw new Error(
          "Login failed. The server did not return a valid session.",
        );
      }

      setCurrentUser(user);

      return {
        success: true,
        user,
      };
    } catch (err) {
      const errorMsg = err.message || "Invalid email or password.";

      setAuthError(errorMsg);

      return {
        success: false,
        error: errorMsg,
      };
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Log out the current user.
  const logoutUser = () => {
    authService.clearSessionData();
    setCurrentUser(null);
    setAuthError(null);
    navigate("/auth", { replace: true });
  };

  // Update the current user's profile in local application state.
  const updateUserProfile = (updatedFields) => {
    setCurrentUser((prev) => (prev ? { ...prev, ...updatedFields } : null));
  };

  const contextValue = {
    currentUser,
    isAuthenticating,
    loading: isAuthenticating,
    authError,
    signup,
    signin,
    logoutUser,
    updateUserProfile,
    clearAuthError,
    isLoggedIn: Boolean(currentUser),
    isAuthenticated: Boolean(currentUser),
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const authVal = useContext(AuthContext);

  if (!authVal) {
    throw new Error("useAuth must be wrapped inside AuthProvider");
  }

  return authVal;
}
