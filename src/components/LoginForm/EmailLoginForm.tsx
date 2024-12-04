import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Spinner } from "@nextui-org/spinner";
import { Button, Input, Link } from "@nextui-org/react";

import { auth } from "../../firebase";
import { getFirebaseErrorMessage } from "../../helper";
import ForgetPassword from "./ForgetPassword";

interface LoginFormState {
  email: string;
  password: string;
}

const EmailLoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleEmailLogin = async (data: LoginFormState) => {
    try {
      // Sign in with email and password
      const { email, password } = data;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const idToken = await user.getIdToken();
      Cookies.set("auth_token", idToken, { expires: 30 });

      navigate("/bailamos-nextui-frontend/profile");
    } catch (err: any) {
      console.error(err);
      const errorMessage = getFirebaseErrorMessage(err.code);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormState>();

  return (
    <form
      className="flex-col w-4/5 bg-zinc-800 shadow-md rounded py-4 px-8 sm:w-96"
      onSubmit={handleSubmit(handleEmailLogin)}
    >
      <div className="w-full grid gap-4">
        <Input
          autoFocus
          className="text-start"
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Please enter a valid email address",
            },
          })}
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
          autoComplete="email"
        />
        <Input
          className="text-start"
          label="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
          autoComplete="current-password"
        />
        <Button
          type="submit"
          disabled={loading}
          className="hover:bg-primary hover:text-gray-800 mt-4"
        >
          {loading ? <Spinner size="sm" /> : "Sign in"}
        </Button>
        <div className="flex justify-between">
          <div className="flex">
            <ForgetPassword />
          </div>
          <div className="flex">
            <Link className="text-sm" href="/bailamos-nextui-frontend/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {error && (
        <div>
          <p className="mt-2 font-bold text-red-500" aria-live="assertive">
            {error}
          </p>
        </div>
      )}
    </form>
  );
};

export default EmailLoginForm;
