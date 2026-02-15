import "../loanformstylee.css";

export default function LoanForm() {
  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Request a Loan</h1>
        <p className="subtitle">Fill the form below to apply for a loan.</p>

        <form className="form">
          <div className="row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" placeholder="Enter your name" />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="age">Age</label>
            <input id="age" placeholder="Enter your age" />
          </div>

          <div className="switch-row">
            <span className="switch-label">Are you an employee?</span>
            <input type="checkbox" />
          </div>

          <div className="field">
            <label htmlFor="salary">Salary</label>
            <select id="salary" defaultValue="">
              <option value="" disabled>
                Select your salary range
              </option>
              <option value="0-5000">0-5000</option>
              <option value="5000-10000">5000-10000</option>
              <option value="10000-15000">10000-15000</option>
              <option value="15000+">15000+</option>
            </select>
          </div>

          <button className="btn" type="submit">
            Submit <span className="arrow">›</span>
          </button>
        </form>
      </div>
    </div>
  );
}
