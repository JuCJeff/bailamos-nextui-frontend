import Header from "../components/Header";
import { EmailLoginForm, GoogleLogin } from "../components/LoginForm";

import "firebaseui/dist/firebaseui.css";

export default function LoginPage() {
  return (
    <div className="flex-col">
      <Header />
      <div className="flex justify-center">
        <EmailLoginForm />
      </div>
      <div className="flex justify-center my-4 text-gray-400">
        <p>or</p>
      </div>
      <div className="flex justify-center">
        <GoogleLogin />
      </div>
    </div>
  );
}
