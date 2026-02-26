import "../loanformstylee.css";
import Modal from "./Modal";
import { useState } from "react";

export default function LoanForm() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: "",
  });

  const btnIsDisabled =
    !loanInputs.name ||
    !loanInputs.phone ||
    !loanInputs.age ||
    !loanInputs.salary;

  function handleSubmit(e) {
    e.preventDefault();
    setIsModalVisible(true);
  }

  function handlePageClick() {
    // اقفل المودال لو مفتوح
    if (isModalVisible) setIsModalVisible(false);
  }

  return (
    <div className="page" onClick={handlePageClick}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <h1 className="title">Request a Loan</h1>
        <p className="subtitle">Fill the form below to apply for a loan.</p>

        <form className="form" onSubmit={handleSubmit}>
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
            id={btnIsDisabled ? "disabled" : "enabled"}
            type="submit"
            disabled={btnIsDisabled}
          >
            Submit <span className="arrow">›</span>
          </button>
        </form>
      </div>

      {/* امنع الضغط جوه المودال يقفل الصفحة */}
      <div onClick={(e) => e.stopPropagation()}>
        <Modal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      </div>
    </div>
  );
}
