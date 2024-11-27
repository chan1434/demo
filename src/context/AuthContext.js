import React, { createContext, useContext, useState } from "react";

// Create Auth Context
const AuthContext = createContext();

// Hook to use Auth Context
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to log in a user
  const signIn = (email) => setUser({ email });

  // Function to log out
  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
