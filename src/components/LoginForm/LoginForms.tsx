import EmailLoginForm from "./EmailLoginForm";
import GoogleLogin from "./GoogleLogin";

const LoginForms = () => {
  return (
    <>
      <div className="flex justify-center">
        <EmailLoginForm />
      </div>
      <div className="flex justify-center my-4 text-gray-400">
        <p>or</p>
      </div>
      <div className="flex justify-center">
        <GoogleLogin />
      </div>
    </>
  );
};

export default LoginForms;
