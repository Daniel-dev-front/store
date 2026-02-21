import { createContext, useContext, useReducer, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const googleProvider = new GoogleAuthProvider();
const ADMIN_EMAIL = "emirsaparbecav0701@gmail.com";

const initialState = {
  user: null,
  isAdmin: false,
  loading: true,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        user: action.payload.user,
        isAdmin: action.payload.isAdmin,
        loading: false,
      };
    case "LOGOUT":
      return {
        user: null,
        isAdmin: false,
        loading: false,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          payload: {
            user,
            isAdmin: user.email === ADMIN_EMAIL,
          },
        });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });

    return () => unsub();
  }, []);

  const register = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    dispatch({
      type: "SET_USER",
      payload: {
        user: res.user,
        isAdmin: res.user.email === ADMIN_EMAIL,
      },
    });
  };

  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    dispatch({
      type: "SET_USER",
      payload: {
        user: res.user,
        isAdmin: res.user.email === ADMIN_EMAIL,
      },
    });
  };

  const loginWithGoogle = async () => {
    const res = await signInWithPopup(auth, googleProvider);
    dispatch({
      type: "SET_USER",
      payload: {
        user: res.user,
        isAdmin: res.user.email === ADMIN_EMAIL,
      },
    });
  };

  const logout = async () => {
    await signOut(auth);
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        register,
        login,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
