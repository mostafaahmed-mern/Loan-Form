import "../loanformstylee.css";
// import Modal from "./Modal";
import { useState } from "react";

export default function LoanForm() {
  // const [btnisDisabled, setBtnisDisabled] = useState(true);
  // wrong way to disable the button that makes the form unresponsive, instead we will use a variable to check if the button should be disabled or not and will make some thing we do not need in react it should be one way of truth.

  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: "",
  });
  const btnisDisabled =
    loanInputs.name || loanInputs.phone || loanInputs.age || loanInputs.salary;

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Request a Loan</h1>
        <p className="subtitle">Fill the form below to apply for a loan.</p>

        <form className="form">
          <div className="row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                placeholder="Enter your name"
                value={loanInputs.name}
                onChange={(e) =>
                  setLoanInputs({ ...loanInputs, name: e.target.value })
                }
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                value={loanInputs.phone}
                onChange={(e) =>
                  setLoanInputs({ ...loanInputs, phone: e.target.value })
                }
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              placeholder="Enter your age"
              value={loanInputs.age}
              onChange={(e) =>
                setLoanInputs({ ...loanInputs, age: e.target.value })
              }
            />
          </div>

          <div className="switch-row">
            <span className="switch-label">Are you an employee?</span>
            <input
              type="checkbox"
              checked={loanInputs.isEmployee}
              onChange={(e) =>
                setLoanInputs({ ...loanInputs, isEmployee: e.target.checked })
              }
            />
          </div>

          <div className="field">
            <label htmlFor="salary">Salary</label>
            <select
              id="salary"
              defaultValue=""
              value={loanInputs.salary}
              onChange={(e) =>
                setLoanInputs({ ...loanInputs, salary: e.target.value })
              }
            >
              <option value="" disabled>
                Select your salary range
              </option>
              <option value="0-5000">0-5000</option>
              <option value="5000-10000">5000-10000</option>
              <option value="10000-15000">10000-15000</option>
              <option value="15000+">15000+</option>
            </select>
          </div>

          <button
            className="btn"
            id={btnisDisabled ? "" : "disabled"}
            type="submit"
            disabled={btnisDisabled}
          >
            Submit <span className="arrow">›</span>
          </button>
        </form>
      </div>

      {/* <Modal /> */}
    </div>
  );
}
