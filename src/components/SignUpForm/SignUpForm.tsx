import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Input, Link, Spinner } from "@nextui-org/react";

import { auth } from "../../firebase";
import { getFirebaseErrorMessage } from "../../helper";

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
    getValues,
    reset,
  } = useForm<SignUpFormData>({
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const handleSignup = async (data: SignUpFormData) => {
    setLoading(true);
    setErrorState(null);
    setSuccess(false);

    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setError("password", {
        message: "Password must be at least 6 characters",
      });
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setTimeout(() => {
        navigate("/bailamos-nextui-frontend/profile"); // Redirect after success
      }, 1000);
    } catch (err: any) {
      console.log(err);
      const errorMessage = getFirebaseErrorMessage(err.code);
      setErrorState(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Reset on start if sign up was successful
  useEffect(() => {
    if (success) {
      reset();
    }
  }, [success, reset]);

  const isFormSubmitting = loading || isSubmitting;

  const handleChange = (field: keyof SignUpFormData) => {
    clearErrors(field);
  };

  return (
    <form
      className="flex w-4/5 bg-zinc-800 shadow-md rounded py-4 px-8 sm:w-96"
      onSubmit={handleSubmit(handleSignup)}
    >
      <div className="w-full grid gap-4">
        <Input
          {...register("firstName")}
          className="shadow appearance-none rounded leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          label="First Name"
          onChange={() => handleChange("firstName")}
        />
        <Input
          {...register("lastName")}
          className="shadow appearance-none rounded leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          label="Last Name"
          onChange={() => handleChange("lastName")}
        />
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className={`shadow appearance-none rounded leading-tight focus:outline-none focus:shadow-outline
              ${errors.email ? "text-start" : ""}`}
          type="email"
          label="Email"
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
          placeholder="Enter your email"
          onChange={() => handleChange("email")}
        />
        <Input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className={`shadow appearance-none rounded leading-tight focus:outline-none focus:shadow-outline
              ${errors.password ? "text-start" : ""}`}
          type="password"
          label="Password"
          placeholder="Enter your password"
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
          onChange={() => handleChange("password")}
        />
        <Input
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => {
              const { password } = getValues();
              return value === password || "Passwords do not match";
            },
          })}
          className={`shadow appearance-none rounded leading-tight focus:outline-none focus:shadow-outline
              ${errors.confirmPassword ? "text-start" : ""}`}
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          isInvalid={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
          onChange={() => handleChange("confirmPassword")}
        />

        <button className="mt-2 hover:bg-primary hover:text-gray-800" type="submit" disabled={isFormSubmitting}>
          {isFormSubmitting ? <Spinner size="sm" /> : "Sign up"}
        </button>

        <div className="flex justify-end">
          <Link className="text-sm" href="/bailamos-nextui-frontend/login">
            Log in instead
          </Link>
        </div>

        {errorState && (
          <div className="flex mt-2 justify-center items-center">
            <p className="text-danger">{errorState}</p>
          </div>
        )}
        {success && (
          <p className="text-success">Signup successful! Redirecting...</p>
        )}
      </div>
    </form>
  );
};

export default SignUpForm;
