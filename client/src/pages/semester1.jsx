import React from "react";
import "../styles/sem.css"; 

function Semester1() {
  const subjects = [
    {
      title: "Applied Chemistry-I",
      topics: [
        "Reactions, Mechanisms & Kinetics",
        "Energy Source",
        "Science of Corrosion",
        "Functional Materials for Engineers",
        "Sustainable Engineering Chemistry"
      ],
      youtube: "https://www.youtube.com/results?search_query=Applied+Chemistry+I",
      udemy: "https://www.udemy.com/courses/search/?q=Applied%20Chemistry",
    },
    {
      title: "Engineering Mechanics",
      topics: [
        "Fundamentals of Mechanics",
        "Virtual Work",
        "Force Systems",
        "Kinematics of Particles",
        "Kinetics of Particles"
      ],
      youtube: "https://www.youtube.com/results?search_query=Engineering+Mechanics",
      udemy: "https://www.udemy.com/courses/search/?q=Engineering%20Mechanics",
    },
    {
      title: "Engineering Mathematics-I",
      topics: ["Linear Algebra", "Differential Calculus", "Integral Calculus"],
      youtube: "https://www.youtube.com/results?search_query=Engineering+Mathematics+1",
      udemy: "https://www.udemy.com/courses/search/?q=Engineering%20Mathematics",
    },
    {
      title: "Digital Logic Design",
      topics: [
        "Introduction to Analog Devices and Circuits",
        "Digital Integrated Circuits",
        "Combinational Logic",
        "Sequential Logic"
      ],
      youtube: "https://www.youtube.com/results?search_query=Digital+Logic+Design",
      udemy: "https://www.udemy.com/courses/search/?q=Digital+Logic+Design",
    },
    {
      title: "Computer Programming in Problem Solving",
      topics: ["C++ Programming Features"],
      youtube: "https://www.youtube.com/results?search_query=C+++Programming+for+Beginners",
      udemy: "https://www.udemy.com/course/c-programming-for-beginners/",
    },
    {
      title: "Probability and Statistics",
      topics: [
        "Introduction to Statistics",
        "Introduction to Probability",
        "Hypothesis Testing"
      ],
      youtube: "https://www.youtube.com/results?search_query=Probability+and+Statistics",
      udemy: "https://www.udemy.com/courses/search/?q=Probability+and+Statistics",
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Semester 1</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {subjects.map((subject, index) => (
          <div className="col" key={index}>
            <div className="card h-100 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{subject.title}</h5>
                <ul className="card-text">
                  {subject.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
                <div className="mt-auto d-flex gap-2 flex-wrap">
                  <a
                    href={subject.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    <i className="bi bi-youtube"></i> Video lectures
                  </a>
                  <a
                    href={subject.udemy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-sm"
                  >
                    <i className="bi bi-play-btn-fill"></i> Courses
                  </a>
                  <a href="#" className="btn btn-outline-info btn-sm">
                    <i className="bi bi-mortarboard"></i> PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Semester1;
