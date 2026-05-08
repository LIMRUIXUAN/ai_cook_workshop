import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("AuthProvider: Initializing Auth listener...");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("AuthProvider: User state updated:", user ? user.email : "none");
      setCurrentUser(user);
      setLoading(false);
    });

    // Safety timeout: If Firebase doesn't respond in 5 seconds, stop loading
    const timeout = setTimeout(() => {
      if (loading) {
        console.warn("AuthProvider: Firebase took too long. Forcing load.");
        setLoading(false);
      }
    }, 5000);

    return () => {
      unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {loading ? (
        <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-[#adc6ff] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : children}
    </AuthContext.Provider>
  );
};
