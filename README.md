# Loan Form (React)

A simple loan request form built with React.  
This project was created as a basic exercise to practice core React concepts such as:
- Managing form data with state
- Handling events (onChange / onSubmit)
- Controlling the UI based on state (show/hide a modal, disable/enable submit)

---

## Features

- Clean form UI (card layout + gradient background).
- Inputs:
  - Name
  - Phone Number
  - Age
  - Employee (Checkbox)
  - Salary Range (Select)
- The Submit button stays disabled until required fields are filled.
- A success modal appears after submitting, with the ability to close it.

---

## Learning Goals

- Practice state management for form inputs (using `useState`).
- Update state on every input change.
- Prevent default form submit behavior using `preventDefault`.
- Use conditional rendering to show/hide the modal.
- Handle click / submit / change events.
- Improve UX by disabling the submit button until the form is valid.

---

## Tech Stack

- React
- Create React App (react-scripts)
- CSS (no external UI libraries)

---

## Getting Started

### 1) Clone the repo
```bash
git clone https://github.com/mostafaahmed-mern/Loan-Form.git
cd Loan-Form
2) Install dependencies
npm install
3) Run the app
npm start

The app will run at:

http://localhost:3000

Available Scripts

npm start Runs the app in development mode

npm test Runs tests

npm run build Builds the app for production

npm run eject Ejects CRA configuration (not recommended unless needed)

Project Structure (Brief)
src/
  components/
    LoanForm.js
    Modal.js
    Modal.css
  loanformstylee.css
  App.js
  index.js
Notes / Behavior

On submit, the form prevents page refresh (preventDefault) and shows the modal.

Clicking outside the modal closes it, clicking inside does not (uses stopPropagation).
```
<img width="1377" height="868" alt="image" src="https://github.com/user-attachments/assets/7cd7468d-95a3-4ba2-9438-6cb2435f0f5c" />

<img width="1884" height="930" alt="image" src="https://github.com/user-attachments/assets/e5a92fad-eaff-4f14-b525-89684cf7bcd8" />
