import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const serverUrl = "http://localhost:5000";

  return (
    <AuthContext.Provider value={{ serverUrl }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
  