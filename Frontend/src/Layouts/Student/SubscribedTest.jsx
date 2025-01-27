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


    const AllTestArr = [
        {
            id: 1,
            name: "Maths For All Railway Exams: (आत्मविश्वास) Mega Live Test",
            question: 20,
            marks: 20,
            time: 22,
            lang: "English, Hindi",
            date: "24 Jan, 9:00 to 26 Jan, 21:00",
            badge: ["LIVE TEST", "FREE"],
        },
        {
            id: 2,
            name: "All RRB (Railway) Exams: General Knowledge (सामर्थ्य) Mega Live Test",
            question: 20,
            marks: 20,
            time: 10,
            lang: "English, Hindi",
            date: "25 Jan, 9:00 to 27 Jan, 21:00",
            badge: ["LIVE TEST", "FREE"],
        },
        {
            id: 3,
            name: "CT 1: Ancient History - Prehistoric Period",
            question: 10,
            marks: 10,
            time: 6,
            lang: "English, Hindi",
            badge: ["PRO", "TCS PYP 2024"],
        },
        {
            id: 4,
            name: "CT 2: Ancient History - Mauryan Empire",
            question: 10,
            marks: 10,
            time: 6,
            lang: "English, Hindi",
            badge: ["PRO", "TCS PYP 2024"],
        },


    ]


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
                                            {AllTestArr.map((test) => (
                                                <div className="card mb-3" key={test.id}>
                                                    <div className="card-body">
                                                        {test.badge.map((badge) => (
                                                            <span key={badge} className={`badge bg-${badge === "FREE" ? "success" : "danger"} me-2`}>
                                                                {badge}
                                                            </span>
                                                        ))}
                                                        <h5 className="card-title mt-2">{test.name}</h5>
                                                        <p className="card-text">
                                                            <span>{test.question} Questions</span> • <span>{test.marks} Marks</span> •{" "}
                                                            <span>{test.time} Mins</span>
                                                        </p>
                                                        <p className="card-text">
                                                            <small className="text-muted">{test.lang} • {test.date}</small>
                                                        </p>
                                                        <button className="btn btn-primary" onClick={()=>navigate('/student/test-instruction')}>Start Now</button>
                                                    </div>
                                                </div>
                                            ))}
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
                                    {AllTestArr.map((test) => (
                                        <div className="card mb-3" key={test.id}>
                                            <div className="card-body">
                                                {test.badge.map((badge) => (
                                                    <span key={badge} className={`badge bg-${badge === "FREE" ? "success" : "danger"} me-2`}>
                                                        {badge}
                                                    </span>
                                                ))}
                                                <h5 className="card-title mt-2">{test.name}</h5>
                                                <p className="card-text">
                                                    <span>{test.question} Questions</span> • <span>{test.marks} Marks</span> •{" "}
                                                    <span>{test.time} Mins</span>
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">{test.lang} • {test.date}</small>
                                                </p>
                                                <button className="btn btn-primary">Start Now</button>
                                            </div>
                                        </div>
                                    ))}
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