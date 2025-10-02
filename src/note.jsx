// src/pages/Home.jsx
import { useState } from "react";
import AuthModal from "../components/AuthModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-primary p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to BAYT AURA</h1>

      {/* Trigger Buttons */}
      <div className="space-x-4">
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
        >
          Open Auth Modal
        </button>
      </div>

      {/* Modal Component */}
      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Home;
