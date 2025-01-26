import React from "react";

const App = () => {
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

  return (
    <div className="container py-5">
      <div className="row g-4">
        {cards.map((card) => (
          <div className="col-md-3" key={card.id}>
            <div className="card">
              <div className="card-header text-center">
                <img
                  src={card.img}
                  alt="logo"
                  className="img-fluid rounded-circle mb-2"
                  style={{ width: "50px" }}
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
                <button className="btn btn-primary">Go To Test Series</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
