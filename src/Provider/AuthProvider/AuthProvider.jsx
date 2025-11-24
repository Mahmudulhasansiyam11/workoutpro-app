"use client";
import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { auth } from "../../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // console.log(user, loading);

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update User
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // LogOut
  const logOut = () => {
    document.cookie =
      "authUser=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC"; // delete cookie
    return signOut(auth);
  };

  // Google Sign In
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Reset Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Observer functionality
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // Set cookie if user exists
      if (currentUser) {
        document.cookie = `authUser=${JSON.stringify(currentUser)}; path=/;`;
      } else {
        document.cookie =
          "authUser=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
    googleSignIn,
    resetPassword,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
