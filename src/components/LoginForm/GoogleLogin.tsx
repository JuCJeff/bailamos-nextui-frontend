import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { Button } from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";

import { auth } from "../../firebase";

const GoogleLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);

    const provider = new GoogleAuthProvider();

    try {
      // Sign in with Google
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userId = user.uid;

      const idToken = await user.getIdToken();
      Cookies.set("auth_token", idToken, { expires: 30 });

      console.log(idToken);

      if (userId) {
        setSuccess(true);
        setTimeout(() => {
          navigate("/bailamos-nextui-frontend/profile");
        }, 1500);
      }
    } catch (err: any) {
      console.error(err.message);
      setError("Failed to log in with Google, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-col justify-center">
      <Button
        onClick={handleGoogleLogin}
        className="w-48 items-center hover:bg-primary hover:text-gray-800"
        isLoading={loading}
        disabled={loading}
      >
        <FaGoogle /> Login with Google
      </Button>

      {success && (
        <div
          className="flex text-center mt-2 text-green-500 font-bold"
          aria-live="assertive"
        >
          <p>Login Successful! Redirecting...</p>
        </div>
      )}

      {error && (
        <div>
          <p
            className="flex text-center mt-2 text-red-500 font-bold"
            aria-live="assertive"
          >
            {error}
          </p>
        </div>
      )}
    </div>
  );
};

export default GoogleLogin;
