import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TestPage = () => {
  return (
    <div className="container-fluid py-3">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h5">General Science for All Engineering Exams: Mini Live Test</h1>
        <div className="d-flex align-items-center">
          <span className="me-3">Time Left: <strong>00:15:54</strong></span>
          <button className="btn btn-outline-primary btn-sm">Switch Full Screen</button>
        </div>
      </div>

      <div className="row">
        {/* Question Section */}
        <div className="col-lg-9">
          <div className="card mb-3">
            <div className="card-body">
              <h2 className="h6">Question No. 1</h2>
              <p className="mt-3">
                A ray of light appearing to meet at the principal focus of a concave lens emerge after refraction will be ________.
              </p>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="question1" id="option1" />
                <label className="form-check-label" htmlFor="option1">
                  Through the principal focus
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="question1" id="option2" />
                <label className="form-check-label" htmlFor="option2">
                  Parallel to the principal axis
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="question1" id="option3" />
                <label className="form-check-label" htmlFor="option3">
                  Through the centre of curvature
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="question1" id="option4" defaultChecked />
                <label className="form-check-label" htmlFor="option4">
                  Without any deviation
                </label>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-secondary">Mark for Review & Next</button>
            <button className="btn btn-outline-danger">Clear Response</button>
            <button className="btn btn-primary">Save & Next</button>
          </div>
        </div>

        {/* Question Palette Section */}
        <div className="col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="h6 mb-0">Chandra</h5>
              </div>
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <span className="badge bg-success me-2">0</span> Answered
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="badge bg-primary me-2">0</span> Marked
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="badge bg-secondary me-2">20</span> Not Visited
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="badge bg-warning text-dark me-2">0</span> Marked and Answered
                </div>
                <div className="d-flex align-items-center">
                  <span className="badge bg-danger me-2">0</span> Not Answered
                </div>
              </div>

              <div className="row g-2">
                {Array.from({ length: 20 }, (_, index) => (
                  <div className="col-3" key={index}>
                    <button className="btn btn-outline-secondary btn-sm w-100">
                      {index + 1}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3">
            <button className="btn btn-outline-primary btn-sm w-100 mb-2">Question Paper</button>
            <button className="btn btn-outline-primary btn-sm w-100">Submit Test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
