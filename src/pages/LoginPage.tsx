import Header from "../components/Header";
import { LoginForms } from "../components/LoginForm";

import "firebaseui/dist/firebaseui.css";

export default function LoginPage() {
  return (
    <div className="flex-col">
      <Header />
      <LoginForms />
    </div>
  );
}
