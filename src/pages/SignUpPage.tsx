import Header from "../components/Header";
import { SignUpForm } from "../components/SignUpForm";

export default function SignUpPage() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <SignUpForm />
      </div>
    </>
  );
}
