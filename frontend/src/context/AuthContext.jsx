import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const getStoredUser = () => {
    try {
   
      const storedUser = localStorage.getItem("chatUser");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      return null;
    }
  };

  const [authUser, setAuthUser] = useState(getStoredUser);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// import { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// // eslint-disable-next-line react-refresh/only-export-components
// export const useAuthContext = () => {
// 	return useContext(AuthContext);
// };

// export const AuthContextProvider = ({ children }) => {
// 	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

// 	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
// };

