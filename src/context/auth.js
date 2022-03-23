import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
  return useContext(AuthContext);
}

export function logout() {
  signOut(auth);
}
