import React from "react";
import "./PracticeQuestion.css";

function PracticeQuestion() {
  return (
    <div className="body-area">
      <div className="container">
        <h3>Array Practice Questions.</h3>

        {/* <!-- Versi 1 --> */}
        <div className="notes-area">
          <div className="notes notes1">
            Write a program to sort the given array.
          </div>
          <button className="next-button">Next</button>
        </div>

        {/* <!-- Versi 2 --> */}
        <div className="notes-area">
          <div className="notes notes2">Rotate an array.</div>
          <button className="next-button">Next</button>
        </div>

        {/* <!-- Versi 3 --> */}
        <div className="notes-area">
          <div className="notes notes3">
            find max & min element in an array.
          </div>
          <button className="next-button">Next</button>
        </div>

        {/* <!-- Versi 4 --> */}
        <div className="notes-area">
          <div className="notes notes4">
            find a peak element which is not smaller than its neighbors.
          </div>
          <button className="next-button">Next</button>
        </div>

        {/* <!-- Versi 5 --> */}
        <div className="notes-area">
          <div className="notes notes5">find duplicates in an array.</div>
          <button className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
}

export default PracticeQuestion;
