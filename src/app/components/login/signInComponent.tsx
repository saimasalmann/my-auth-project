

"use client"
import { signIn } from "next-auth/react";
import { useState } from "react";

const SignIn = () => {
  // Separate loading state for Google and GitHub
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingGitHub, setLoadingGitHub] = useState(false);

  const handleLogin = async (provider: "google" | "github") => {
    if (provider === "google") {
      setLoadingGoogle(true);
    } else {
      setLoadingGitHub(true);
    }

    await signIn(provider);

    // Reset loading state for the respective provider
    if (provider === "google") {
      setLoadingGoogle(false);
    } else {
      setLoadingGitHub(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Sign In</h2>
        <p className="text-center text-gray-500 mb-4">Choose a provider to log in</p>

        <button
          onClick={() => handleLogin("google")}
          disabled={loadingGoogle}
          className="w-full py-3 px-4 bg-red-500 text-white rounded-md mb-4 transition hover:bg-red-600 focus:outline-none disabled:bg-gray-300"
        >
          {loadingGoogle ? "Loading..." : "Sign in with Google"}
        </button>

        <button
          onClick={() => handleLogin("github")}
          disabled={loadingGitHub}
          className="w-full py-3 px-4 bg-gray-800 text-white rounded-md transition hover:bg-gray-900 focus:outline-none disabled:bg-gray-300"
        >
          {loadingGitHub ? "Loading..." : "Sign in with GitHub"}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
