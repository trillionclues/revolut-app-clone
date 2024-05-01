// --------------- clerk mock function to mimick signed and signout ------------- //

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<{
  isSignedIn: boolean;
  mockSignIn: () => void;
  mockSignOut: () => void;
}>({
  isSignedIn: false,
  mockSignIn: () => {},
  mockSignOut: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const mockSignIn = () => {
    setIsSignedIn(true);
  };

  const mockSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, mockSignIn, mockSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// --------------- clerk mock function to mimick signed and signout ------------- //
