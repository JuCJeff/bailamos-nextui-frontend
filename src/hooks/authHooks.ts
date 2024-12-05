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
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          console.log(currentUser); // Optionally log the current user
        } else {
          setUser(null);
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
