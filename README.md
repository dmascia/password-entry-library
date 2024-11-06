# Password Entry Library
A simple, reusable password entry library built using React, Next.js, TypeScript, Tailwind CSS, Custom React Hooks, and Jest Tests. This library validates user-provided passwords against specific requirements such as matching passwords, minimum length, and character diversity (uppercase, lowercase, number, and special character).

## Password Requirements Validation:

Password must be at least 6 characters long.
Password must contain at least one uppercase letter.
Password must contain at least one lowercase letter.
Password must contain at least one number.
Password must contain at least one special character (!@#$%^&*()_-+={[}]|:;"'<,>.).

### Confirm Password Check:

The password and confirmation must match.

### Visual Feedback:

Displays success or error messages based on validation results.

### Reusable & Extensible:

Custom React hook (usePasswordValidation) that can be reused across different projects or parts of the application.
### Responsive:

Built with Tailwind CSS for responsive and easily customizable UI.

### Tests with Jest:

Comprehensive unit tests to validate the password validation logic.


## Tech Stack
- React – JavaScript library for building user interfaces.
- Next.js – React framework for server-side rendering (SSR) and static site generation (SSG).
- TypeScript – A superset of JavaScript that adds static types.
- Tailwind CSS – A utility-first CSS framework for building custom designs quickly.
- Jest – JavaScript testing framework, with React Testing Library to test the UI components.
- React Testing Library – Testing utility for React that encourages good testing practices.


## Getting Started


### Prerequisites
Before setting up the project, make sure you have the following installed:

Node.js (v12 or higher)
npm or yarn
Installation
Clone the repository:

```bash
git clone https://github.com/dmascia/password-entry-library.git
cd password-entry-library
```
Install dependencies:

If you are using npm, run:

```bash
npm install
```
### Tests
This library includes Jest and React Testing Library tests to ensure everything works as expected. The tests are located in the components/PasswordEntry.test.tsx file.

### Running Tests
To run the tests, execute the following command:

```bash
npm test
```

You should see test results showing whether all tests have passed or if there are any issues.

### Tests Overview
Form Rendering: Verifies that the form and all elements (inputs, button) are rendered correctly.
Validation Tests: Ensures the password validation logic works for various edge cases (e.g., missing uppercase, no number, passwords not matching).
Success and Error Messages: Tests if the correct messages are shown when validation succeeds or fails.


## Component Structure:

The PasswordEntry component contains the password input and confirm password input fields. It handles validation using the usePasswordValidation hook and displays either a success or error message based on user input.

### Folder Structure

```

├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── PasswordEntry.test.tsx
│   │   └── PasswordEntry.tsx
│   └── hooks
│       └── usePasswordValidation.tsx


```


