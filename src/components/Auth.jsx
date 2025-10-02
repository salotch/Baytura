// src/components/AuthModal.jsx
import { Icon } from "@iconify/react";
import { useRef, useEffect } from "react";

const Auth = ({ isOpen, onClose, isLogin, setIsLogin }) => {
  const clickOutRef = useRef(null);
  const toggleForm = () => setIsLogin(!isLogin);
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (clickOutRef.current && !clickOutRef.current.contains(event.target)) {
        {
          onClose();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-[rgba(0,0,0,0.5)]">
      <div
        ref={clickOutRef}
        className="bg-white rounded-lg w-[90%] max-w-sm p-6 relative shadow-xl text-primary"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
        >
          <Icon icon="mdi:close" className="text-2xl" />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="./src/assets/Rectangle.jpg"
            alt="Bayt Aura Logo"
            className="h-10"
          />
        </div>

        <hr className="mb-4" />

        {/* Title */}
        <h2 className="text-center font-semibold text-lg mb-4">
          {isLogin
            ? "Login into your BAYT AURA account"
            : "Create a new BAYT AURA account"}
        </h2>

        {/* Buttons */}
        <div className="space-y-3">
          <button className="flex items-center justify-center gap-2 w-full border py-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
            <Icon icon="flat-color-icons:google" className="text-xl" />
            {isLogin ? "Login with Google" : "Join with Google"}
          </button>
          <button className="flex items-center justify-center gap-2 w-full border py-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
            <Icon icon="logos:facebook" className="text-xl" />
            {isLogin ? "Login with Facebook" : "Join with Facebook"}
          </button>

          <div className="text-center text-sm text-gray-400">OR</div>

          <button className="flex items-center justify-center gap-2 w-full border py-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
            <Icon icon="mdi:email-outline" className="text-xl" />
            {isLogin ? "Login with Email" : "Join with Email"}
          </button>
          <button className="flex items-center justify-center gap-2 w-full border py-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
            <Icon icon="mdi:phone-outline" className="text-xl" />
            {isLogin ? "Login with Phone" : "Join with Phone"}
          </button>
        </div>

        {/* Footer Text */}
        <div className="mt-6 text-xs text-center text-gray-500">
          {isLogin ? (
            <>
              New to Bayt AURA?{" "}
              <button
                onClick={toggleForm}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              When creating a new account you agree to BAYT AURA's{" "}
              <a href="#" className="underline text-blue-500 cursor-pointer">
                Terms and conditions
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-blue-500 cursor-pointer">
                Privacy Policy
              </a>
              <br />
              <div className="mt-2">
                Already have an account?{" "}
                <button
                  onClick={toggleForm}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Log in
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
