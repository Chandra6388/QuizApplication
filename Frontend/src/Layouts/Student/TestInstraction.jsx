import React from "react";
import { useNavigate } from "react-router-dom";

const InstructionsPage = () => {
    const navigate = useNavigate();
    return (
        <div className="container py-5">
            {/* Header Section */}
            <div className="card mb-4">
                <div className="card-body">
                    <h1 className="card-title h4 text-dark mb-4">General Instructions</h1>
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item">
                            The clock will be set at the server. The countdown timer at the top
                            right corner of the screen will display the remaining time
                            available for you to complete the examination. When the timer
                            reaches zero, the examination will end by itself. You need not
                            terminate the examination or submit your paper.
                        </li>
                        <li className="list-group-item">
                            The Question Palette displayed on the right side of the screen
                            will show the status of each question using one of the following
                            symbols:
                        </li>
                    </ol>

                    {/* Status Indicators */}
                    <div className="row mt-4">
                        <div className="col-6 mb-3 d-flex align-items-center">
                            <div className="border border-dark" style={{ width: "24px", height: "24px" }}></div>
                            <span className="ms-2">You have not visited the question yet.</span>
                        </div>
                        <div className="col-6 mb-3 d-flex align-items-center">
                            <div className="bg-danger" style={{ width: "24px", height: "24px" }}></div>
                            <span className="ms-2">You have not answered the question.</span>
                        </div>
                        <div className="col-6 mb-3 d-flex align-items-center">
                            <div className="bg-success" style={{ width: "24px", height: "24px" }}></div>
                            <span className="ms-2">You have answered the question.</span>
                        </div>
                        <div className="col-6 mb-3 d-flex align-items-center">
                            <div className="bg-purple" style={{ width: "24px", height: "24px", backgroundColor: "#6f42c1" }}></div>
                            <span className="ms-2">
                                You have NOT answered the question, but have marked it for review.
                            </span>
                        </div>
                        <div className="col-6 mb-3 d-flex align-items-center">
                            <div
                                className="bg-purple d-flex align-items-center justify-content-center"
                                style={{ width: "24px", height: "24px", backgroundColor: "#6f42c1" }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="white"
                                    className="bi bi-check"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-4 5a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06L7.477 9.43l3.993-4.46z" />
                                </svg>
                            </div>
                            <span className="ms-2">
                                You have answered the question, but marked it for review.
                            </span>
                        </div>
                    </div>

                    <p className="mt-4 text-dark">
                        The <strong>Mark For Review</strong> status for a question simply
                        indicates that you would like to look at that question again. If a
                        question is answered, but marked for review, then the answer will
                        be considered for evaluation unless the status is modified by the
                        candidate.
                    </p>
                </div>
            </div>

            {/* Navigation Section */}
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title h5 text-dark mb-4">Navigating to a Question:</h2>
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item">
                            Click on the question number in the Question Palette at the right
                            of your screen to go to that numbered question directly. Note
                            that using this option does NOT save your answer to the current
                            question.
                        </li>
                        <li className="list-group-item">
                            Click on <strong>Save & Next</strong> to save your answer for the
                            current question and then go to the next question.
                        </li>
                        <li className="list-group-item">
                            Click on <strong>Mark for Review & Next</strong> to save your
                            answer for the current question and also mark it for review, and
                            then go to the next question.
                        </li>
                    </ol>

                    <p className="mt-4 text-dark">
                        Note that your answer for the current question will not be saved if
                        you navigate to another question directly by clicking on a question
                        number without saving the answer to the previous question.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div>
                        Declaration:
                    </div>
                    <div className="form-check mt-4">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            I have read all the instructions carefully and have understood
                            them. I agree not to cheat or use unfair means in this examination.
                            I understand that using unfair means of any sort for my own or
                            someone else's advantage will lead to my immediate disqualification.
                            The decision of Testbook.com will be final in these matters and
                            cannot be appealed.
                        </label>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
                <button className="btn btn-primary" onClick={()=>navigate('/student/live-test')}>Next</button>

            </div>
        </div>
    );
};

export default InstructionsPage;
