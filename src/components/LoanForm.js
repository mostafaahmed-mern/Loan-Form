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
              <input id="name" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" />
            </div>
          </div>

          <label htmlFor="age">Age</label>
          <input id="age" />

          <div className="switch-row">
            <label htmlFor="employed">Are you employed?</label>
            <input id="employed" type="checkbox" />
          </div>

          <label htmlFor="salary">Salary</label>
          <select id="salary">
            <option value="">Select your salary range</option>
            <option value="0-5000">0-5000</option>
            <option value="5000-10000">5000-10000</option>
            <option value="10000-15000">10000-15000</option>
            <option value="15000+">15000+</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
