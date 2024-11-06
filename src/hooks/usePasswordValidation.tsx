"use client";
import React, { useState } from "react";

type ValidationResult = {
  isValid: boolean;
  msg: string;
};

/**
 *
 * Explanation of the Code:
 * Custom Hook (usePasswordValidation):
 * Manages the state for password, confirmPassword, and validation result (validationResult).
 * validatePassword: A function that checks if the password satisfies the rules
 * (min length, uppercase, lowercase, number, and special character).
 * handleSubmit: Validates the password and checks if the passwords match.
 */

export const usePasswordValidation = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: false,
    msg: "",
  });

  const validatePassword = (password: string): ValidationResult => {
    const minLength = password.length >= 6;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/.test(password);

    if (!minLength) {
      return {
        isValid: false,
        msg: "Password must be at least 6 characters long.",
      };
    }
    if (!hasUppercase) {
      return {
        isValid: false,
        msg: "Password must contain at least one uppercase letter.",
      };
    }
    if (!hasLowercase) {
      return {
        isValid: false,
        msg: "Password must contain at least one lowercase letter.",
      };
    }
    if (!hasNumber) {
      return {
        isValid: false,
        msg: "Password must contain at least one number.",
      };
    }
    if (!hasSpecialChar) {
      return {
        isValid: false,
        msg: "Password must contain at least one special character.",
      };
    }

    return { isValid: true, msg: "" };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setValidationResult({ isValid: false, msg: "Passwords do not match" });
      return;
    }

    const result = validatePassword(password);
    setValidationResult(result);
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    validationResult,
    handleSubmit,
  };
};
