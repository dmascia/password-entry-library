"use client";
import { usePasswordValidation } from "@/hooks/usePasswordValidation";
import React from "react";

/**
 *
 * Explanation of the Code:
 * Displays the form with two password inputs (for password and confirm password).
 * Shows validation messages (either success or failure).
 * The button color changes based on the validation result.
 */
const PasswordEntry: React.FC = () => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    validationResult,
    handleSubmit,
  } = usePasswordValidation();

  return (
    <div className="w-4/12 mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Password Entry
      </h2>

      {validationResult.msg && (
        <p
          className={`text-sm ${
            validationResult.isValid ? "text-green-600" : "text-red-600"
          }`}
        >
          {validationResult.msg}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            aria-label="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            aria-label="confirm-password-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 text-white rounded-md mt-4 ${
            validationResult.isValid ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {validationResult.isValid ? "Password is valid!" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default PasswordEntry;
