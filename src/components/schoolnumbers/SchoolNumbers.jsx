import React from "react";
import "./SchoolNumbers.css";

function SchoolNumbers() {
  return (
    <section id="school_numbers">
      <div className="school_numbers-det">
        <h1>Ngoleni Secondary School In Numbers</h1>
        <div className="numbers">
          <div className="number">
            600 <br />
            Students
          </div>
          <div className="number">
            15 <br />
            Staffs
          </div>
          <div className="number">
            12 <br />
            Classes
          </div>
          <div className="number">
            13 <br />
            Subjects
          </div>
        </div>
      </div>
    </section>
  );
}

export default SchoolNumbers;
