import { useState } from "react";
import { Button, Input, Spinner, useDisclosure } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Bounce, ToastContainer, toast } from "react-toastify";

import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const [emailForReset, setEmailForReset] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const notify = () =>
    toast.success("Password reset email sent! \n Please check your inbox.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleForgotPassword = async (email: string) => {
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await sendPasswordResetEmail(auth, email);
      onClose();
      setEmailForReset("");
      notify();
    } catch (err: any) {
      setError(err.message);
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button size="md" color="primary" variant="light" onPress={onOpen}>
        Forgot password?
      </Button>

      <Modal
        closeButton
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        aria-labelledby="forgot-password-modal"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h3>Enter your email to reset your password</h3>
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Email"
                  name="emailForReset"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmailForReset(e.target.value)}
                />
                {error && (
                  <div>
                    <p className="mt-2 font-bold text-red-500">{error}</p>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  onPress={() => handleForgotPassword(emailForReset)}
                  disabled={loading}
                >
                  {loading ? <Spinner size="sm" /> : "Send Reset Email"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <ToastContainer
        className={"text-start"}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default ForgetPassword;
