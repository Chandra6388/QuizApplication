import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quize = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("chapter-test");
    const subjects = [
        {
            id: 1,
            name: "Maths",
        },

        {
            id: 3,
            name: "English",
        },
        {
            id: 5,
            name: "Physics",
        },
        {
            id: 6,
            name: "Chemistry",
        },
        {
            id: 7,
            name: "Biology",
        },
        {
            id: 8,
            name: "Computer",
        },
    ]
    const [activeTab1, setActiveTab1] = useState("mock");
    const [activeSubTab, setActiveSubTab] = useState("free");



    const tests = [
        {
            id: 1,
            type: "PRO",
            title: "RRB Group D Previous Year Paper (Held on: 17 Aug 2022 Shift 1)",
            questions: 100,
            marks: 100,
            duration: "90 Mins",
            users: "58.9k",
            languages: ["English", "Hindi"],
            isFree: false,
        },
        {
            id: 2,
            type: "FREE",
            title: "RRB Group D Previous Year Paper (Held on: 1 Sept 2022 Shift 1)",
            questions: 100,
            marks: 100,
            duration: "90 Mins",
            users: "45.6k",
            languages: ["English", "Hindi", "3 More"],
            isFree: true,
        },
        {
            id: 3,
            type: "PRO",
            title: "RRB Group D Previous Year Paper (Held on: 17 Aug 2022 Shift 2)",
            questions: 100,
            marks: 100,
            duration: "90 Mins",
            users: "28.9k",
            languages: ["English", "Hindi"],
            isFree: false,
        },
    ];


    return (
        <>
            <div className="card top-selling overflow-auto">
                <div className="card-body pb-0">
                    <div className="row">
                        <ul
                            className="nav nav-tabs nav-tabs-bordered d-flex"
                            role="tablist"
                        >
                            <li className="nav-item flex-fill" role="presentation">
                                <button
                                    className={`nav-link  w-100 ${activeTab === "chapter-test" ? "active" : ""}`}
                                    id="chapter-test-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="chapter-test"
                                    aria-selected={activeTab === "chapter-test"}
                                    onClick={() => setActiveTab("chapter-test")}
                                >
                                    Chapter Test
                                </button>
                            </li>
                            <li className="nav-item flex-fill" role="presentation">
                                <button
                                    className={`nav-link w-100 ${activeTab === "full-test" ? "active" : ""}`}
                                    id="full-test-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="full-test"
                                    aria-selected={activeTab === "full-test"}
                                    onClick={() => setActiveTab("full-test")}
                                >
                                    Full Test
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content pt-2">
                            <div
                                className={`tab-pane fade ${activeTab === "chapter-test" ? "show active" : ""}`}
                                id="chapter-test"
                                role="tabpanel"
                                aria-labelledby="chapter-test-tab"
                            >
                                <div>
                                    <h5 className="card-title">Select Chapter</h5>
                                    <div className="row">
                                        {subjects.map((subject) => (
                                            <div className="col-6 col-md-4 col-lg-2" key={subject.id}>
                                                <div
                                                    className="card d-flex align-items-center justify-content-center"
                                                    style={{ height: "50px", padding: "10px", textAlign: "center" }} // Reduced height, centered content
                                                >
                                                    <h5 className="card-title m-0" style={{ fontSize: "16px", lineHeight: "1.2" }}>
                                                        {subject.name}
                                                    </h5>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="tab-pane fade show active">
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <span className="badge bg-danger me-2">LIVE TEST</span>
                                                    <span className="badge bg-success">FREE</span>
                                                    <h5 className="card-title mt-2">
                                                        Maths For All Railway Exams: (आत्मविश्वास) Mega Live Test
                                                    </h5>
                                                    <p className="card-text">
                                                        <span>20 Questions</span> • <span>20 Marks</span> •{" "}
                                                        <span>22 Mins</span>
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">
                                                            English, Hindi • 24 Jan, 9:00 to 26 Jan, 21:00
                                                        </small>
                                                    </p>
                                                    <button className="btn btn-primary">Start Now</button>
                                                </div>
                                            </div>

                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <span className="badge bg-danger me-2">LIVE TEST</span>
                                                    <span className="badge bg-success">FREE</span>
                                                    <h5 className="card-title mt-2">
                                                        All RRB (Railway) Exams: General Knowledge (सामर्थ्य) Mega Live Test
                                                    </h5>
                                                    <p className="card-text">
                                                        <span>20 Questions</span> • <span>20 Marks</span> •{" "}
                                                        <span>10 Mins</span>
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">
                                                            English, Hindi • 25 Jan, 9:00 to 27 Jan, 21:00
                                                        </small>
                                                    </p>
                                                    <button className="btn btn-primary">Start Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div
                                className={`tab-pane fade ${activeTab === "full-test" ? "show active" : ""}`}
                                id="full-test"
                                role="tabpanel"
                                aria-labelledby="full-test-tab"
                            >
                                <div className="tab-pane fade show active">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <span className="badge bg-warning me-2">PRO</span>
                                            <span className="badge bg-primary">TCS PYP 2024</span>
                                            <h5 className="card-title mt-2">
                                                CT 1: Ancient History - Prehistoric Period
                                            </h5>
                                            <p className="card-text">
                                                <span>10 Questions</span> • <span>10 Marks</span> •{" "}
                                                <span>6 Mins</span>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">English, Hindi</small>
                                            </p>
                                            <button className="btn btn-primary">Start Now</button>
                                        </div>
                                    </div>

                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <span className="badge bg-warning me-2">PRO</span>
                                            <span className="badge bg-primary">TCS PYP 2024</span>
                                            <h5 className="card-title mt-2">
                                                CT 2: Ancient History - Mauryan Empire
                                            </h5>
                                            <p className="card-text">
                                                <span>10 Questions</span> • <span>10 Marks</span> •{" "}
                                                <span>6 Mins</span>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">English, Hindi</small>
                                            </p>
                                            <button className="btn btn-primary">Start Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </>

    );
}

export default Quize;