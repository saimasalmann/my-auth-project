

"use client"; 

import { signOut } from "next-auth/react";

export default function SignOutPage() {

  const handleSignOut = async () => {
      await signOut();
    
  };

  return (
  <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <p className="text-xl font-semibold text-center text-gray-700 mb-6">You are signed in</p>
</div>
<div className="w-96 mt-4">
      <button
        onClick={handleSignOut}
        className="w-full py-3 px-4 bg-red-500 text-white rounded-md mb-4 transition hover:bg-red-600 focus:outline-none disabled:bg-gray-300"
      >
        Sign Out
      </button>
    </div>
    </div>
  );
}
