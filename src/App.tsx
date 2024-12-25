import React, { useState } from "react";
import ComputeGrade from "./ComputeGrade";

function App() {
  const [formValues, setFormValues] = useState({
    prelimGrade: "",
    midtermGrade: "",
    prefinalGrade: "",
    finalGrade: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value, // Allow the value to be empty
    });
  };

  // Function to clear the form values
  const handleClearGrades = () => {
    setFormValues({
      prelimGrade: "",
      midtermGrade: "",
      prefinalGrade: "",
      finalGrade: "",
    });
  };

  return (
    <>
      <div className="container-sm" style={{ marginTop: "48px" }}>
        <h1 style={{ textAlign: "center" }}>Compute Your Final Grade here!</h1>
        <p style={{ textAlign: "center" }}>
          Please enter only your raw grades.
        </p>
      </div>

      <div className="container-sm" style={{ marginTop: "48px" }}>
        <div className="row">
          <div className="col">
            <input
              type="number"
              name="prelimGrade"
              value={formValues.prelimGrade}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Prelim Grade"
              aria-label="Prelim Grade"
            />
          </div>
          <div className="col">
            <input
              type="number"
              name="midtermGrade"
              value={formValues.midtermGrade}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Midterm Grade"
              aria-label="Midterm Grade"
            />
          </div>
          <div className="col">
            <input
              type="number"
              name="prefinalGrade"
              value={formValues.prefinalGrade}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Pre-final Grade"
              aria-label="Pre-final Grade"
            />
          </div>
          <div className="col">
            <input
              type="number"
              name="finalGrade"
              value={formValues.finalGrade}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Finals Grade"
              aria-label="Finals Grade"
            />
          </div>
        </div>
      </div>

      <div
        className="container-sm"
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleClearGrades}
        >
          Clear Grades
        </button>
      </div>

      <ComputeGrade
        prelim={parseFloat(formValues.prelimGrade) || 0}
        midterm={parseFloat(formValues.midtermGrade) || 0}
        prefinal={parseFloat(formValues.prefinalGrade) || 0}
        final={parseFloat(formValues.finalGrade) || 0}
      />
      <div className="container-sm">
        <p
          style={{
            textAlign: "center",
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
          }}
        >
          © 2024, Made with love by Reniel Baldove, All rights reserved.
        </p>
      </div>
    </>
  );
}

export default App;
