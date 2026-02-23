import React from "react";

const VerifyEmail = () => {
  return (
    <div className="relative w-full h-[760px] overflow-hidden">
      <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-green-500 mb-4">
            Verify Your Email
          </h2>
          <p className="text-gray-400 text-sm">
            An email has been sent to verify your account. Please check your
            inbox and click the verification link to complete your registration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
