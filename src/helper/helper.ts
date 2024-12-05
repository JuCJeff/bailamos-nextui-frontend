import { signOut } from "firebase/auth";
import Cookies from "js-cookie";

import { auth } from "../firebase";
import { tagStylesList } from "../data";

import type { Music } from "../types";

export function findTagStyles(music: Music) {
  return (
    tagStylesList.find((tagListItem) => tagListItem.name === music.name) || null
  );
}

export const getFirebaseErrorMessage = (errorCode: string) => {
  switch (errorCode) {
    // For sign up
    case "auth/email-already-in-use":
      return "This email is already in use. Please try another one.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    // For sign in
    case "auth/user-not-found":
      return "No user found with this email address.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/too-many-requests":
      return "Too many login attempts. Please try again later.";
    default:
      return "An error occurred. Please try again.";
  }
};

export const handleLogout = async () => {
  try {
    // Sign out from Firebase Authentication
    await signOut(auth);

    // Remove the auth_token cookie
    Cookies.remove("auth_token");

    console.log("User logged out, cookie removed");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
