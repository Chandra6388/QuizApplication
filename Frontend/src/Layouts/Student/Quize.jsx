import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            id: 1,
            students: "774.2k Students",
            title: "RRB JE (CBT I + CBT II) Mock Test 2024",
            progress: 1,
            progressText: "17/2138",
            img: "/assets/img/indian-railways-logo.png",
        },
        {
            id: 2,
            students: "1527.2k Students",
            title: "RRB NTPC (CBT 1 + CBT 2) 2024 Mock Test Series",
            progress: 0,
            progressText: "0/1285",
            img: "/assets/img/indian-railways-logo.png",
        },
        {
            id: 3,
            students: "471.3k Students",
            title: "General Science for All Railway Exams Previous...",
            progress: 1,
            progressText: "3/341",
            img: "/assets/img/indian-railways-logo.png",

        },
        {
            id: 4,
            students: "508.3k Students",
            title: "RRB Technician Grade 1 Mock Test 2024",
            progress: 5,
            progressText: "28/526",
            img: "/assets/img/indian-railways-logo.png",
        },
        {
            id: 5,
            students: "774.2k Students",
            title: "RRB JE (CBT I + CBT II) Mock Test 2024",
            progress: 1,
            progressText: "17/2138",
            img: "/assets/img/indian-railways-logo.png",
        },
        {
            id: 6,
            students: "774.2k Students",
            title: "RRB JE (CBT I + CBT II) Mock Test 2024",
            progress: 1,
            progressText: "17/2138",
            img: "/assets/img/indian-railways-logo.png",

        },
        {
            id: 7,
            students: "774.2k Students",
            title: "RRB JE (CBT I + CBT II) Mock Test 2024",
            progress: 1,
            progressText: "17/2138",
            img: "/assets/img/indian-railways-logo.png",
        },
        {
            id: 8,
            students: "774.2k Students",
            title: "RRB JE (CBT I + CBT II) Mock Test 2024",
            progress: 1,
            progressText: "17/2138",
            img: "/assets/img/indian-railways-logo.png",

        }

    ];

    const itemsToShow = 4;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + cards.length) % cards.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % cards.length);
    };

    const visibleCards = cards.slice(currentIndex, currentIndex + itemsToShow);
    if (visibleCards.length < itemsToShow) {
        visibleCards.push(...cards.slice(0, itemsToShow - visibleCards.length));
    }

    return (
        <div className="container py-5">
            <div className="d-flex align-items-center">
                <button className="btn btn-outline-primary me-2" onClick={handlePrev}>
                    &lt;
                </button>

                <div className="d-flex" style={{ overflow: "hidden", width: "100%" }}>
                    {visibleCards.map((card) => (
                        <div className="card mx-2" key={card.id} style={{ minWidth: "18rem" }}>
                            <div className="card-header text-center">
                                <img
                                    src={card.img}
                                    style={{ width: "50px" }}
                                    alt="logo"
                                    className="img-fluid rounded-circle mb-2"
                                />
                                <div>{card.students}</div>
                            </div>
                            <div className="card-body text-center">
                                <h6>{card.title}</h6>
                                <p>{card.progressText}</p>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${card.progress}%` }}
                                        aria-valuenow={card.progress}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                                <button className="btn btn-primary" onClick={()=>navigate("/student/subscribed-test")}>Go To Test Series</button>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="btn btn-outline-primary ms-2" onClick={handleNext}>
                    &gt;
                </button>





            </div>

            <div>
                <h3>Previous attempt Test</h3>
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
    );
};

export default App;
