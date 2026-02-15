import "../loanformstylee.css";

export default function LoanForm() {
  return (
    <div className="flex">
      <form style={{ display: "flex", flexDirection: "column" }}>
        <h1> Request a Loan </h1>
        <label htmlFor="name"> Name: </label>
        <input />

        <label htmlFor="amount"> Phone Number: </label>
        <input />

        <label> Age :</label>
        <input />
        <label>Are you employed?</label>
        <input type="checkbox" />
      </form>{" "}
    </div>
  );
}
