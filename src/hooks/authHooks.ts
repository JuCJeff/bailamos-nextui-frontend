import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";

type UseAuthResult = User | null;

const useAuth = (): UseAuthResult => {
  const [user, setUser] = useState<UseAuthResult>(null);

  useEffect(() => {
    const token = Cookies.get("auth_token");

    if (token) {
      // Firebase auth state listener to track user login state
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          setUser(firebaseUser);
          Cookies.set("auth_token", firebaseUser?.uid); // Store the user token
        } else {
          setUser(null);
          Cookies.remove("auth_token"); // Remove the token on logout
        }
      });

      // Cleanup the subscription when the component unmounts
      return () => unsubscribe();
    } else {
      setUser(null);
    }
  }, []);

  return user;
};

export default useAuth;
