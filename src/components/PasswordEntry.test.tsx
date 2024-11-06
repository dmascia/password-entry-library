import { render, screen, fireEvent } from "@testing-library/react";
import PasswordEntry from "./PasswordEntry";

const setup = () => {
  const utils = render(<PasswordEntry />)
  const passwordInput = screen.getByLabelText('password-input')
  const confirmPasswordInput = screen.getByLabelText('confirm-password-input')
  const submitButton = screen.getByRole('button')

  return {
    passwordInput,
    confirmPasswordInput,
    submitButton,
    ...utils,
  }
}

describe("PasswordEntry Component", () => {
  it("renders the form", () => {
    const {passwordInput, confirmPasswordInput, submitButton} = setup()

    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('validates password correctly when passwords do not match', () => {
    const {passwordInput, confirmPasswordInput, submitButton} = setup()

    fireEvent.change(passwordInput, { target: { value: 'Password123!' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'Password123' } });
    fireEvent.click(submitButton);
    expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
  });

  it('validates password when it does not meet the minimum length', () => {
    const {passwordInput, confirmPasswordInput, submitButton} = setup()

    fireEvent.change(passwordInput, { target: { value: 'short' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'short' } });
    fireEvent.click(submitButton);
    expect(screen.getByText(/password must be at least 6 characters long/i)).toBeInTheDocument();
  });

  it('validates password when it does not contain an uppercase letter', () => {
    const {passwordInput, confirmPasswordInput, submitButton} = setup()

    fireEvent.change(passwordInput, { target: { value: 'password123!' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123!' } });
    fireEvent.click(submitButton);
    expect(screen.getByText(/password must contain at least one uppercase letter/i)).toBeInTheDocument();
  });

  it('validates password when it does not contain a lowercase letter', () => {
    const {passwordInput, confirmPasswordInput, submitButton} = setup()

    fireEvent.change(passwordInput, { target: { value: 'PASSWORD123!' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'PASSWORD123!' } });
    fireEvent.click(submitButton);
    expect(screen.getByText(/password must contain at least one lowercase letter/i)).toBeInTheDocument();
  });

  it('validates password when it does not contain a number', () => {
    const {passwordInput, confirmPasswordInput, submitButton} = setup()

    fireEvent.change(passwordInput, { target: { value: 'Password!' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'Password!' } });
    fireEvent.click(submitButton);
    expect(screen.getByText(/password must contain at least one number/i)).toBeInTheDocument();
  });

  it('validates password when it does not contain a special character', () => {
    const {passwordInput, confirmPasswordInput, submitButton} = setup()

    fireEvent.change(passwordInput, { target: { value: 'Password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'Password123' } });
    fireEvent.click(submitButton);
    expect(screen.getByText(/password must contain at least one special character/i)).toBeInTheDocument();
  });

  it('validates password when it is correct and matches', () => {
    const {passwordInput, confirmPasswordInput, submitButton} = setup()

    fireEvent.change(passwordInput, { target: { value: 'Valid1Password!' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'Valid1Password!' } });
    fireEvent.click(submitButton);
    expect(screen.getByText(/password is valid/i)).toBeInTheDocument();
  });

  it('validates password with exactly 6 characters', () => {
    const {passwordInput, confirmPasswordInput, submitButton} = setup()

    fireEvent.change(passwordInput, { target: { value: 'A1b2C3' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'A1b2C3' } });
    fireEvent.click(submitButton);
    expect(screen.getByText(/Password must contain at least one special character/i)).toBeInTheDocument();
  });

  it('validates password with more than 6 characters (e.g., 20 characters)', () => {
    const {passwordInput, confirmPasswordInput, submitButton} = setup()

    fireEvent.change(passwordInput, { target: { value: 'VeryLongPassword123!' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'VeryLongPassword123!' } });
    fireEvent.click(submitButton);
    expect(screen.getByText(/password is valid/i)).toBeInTheDocument();
  });
});
