import React from "react";
import "../styles/sem.css"; 

function Semester2() {
  const subjects = [
    {
      title: "Physics-II",
      topics: ["Semiconductor", "Dielectric properties", "Magnetism", "Quantum Mechanics", "Relativity"],
      youtube: "https://www.youtube.com/results?search_query=Applied+Physics+II",
      udemy: "https://www.udemy.com/courses/search/?q=Applied+Physics+II",
    },
    {
      title: "Engineering Graphics",
      topics: ["Intro to Drawing & Geometrical Construction", "Projection of Points and Lines", "Projection Solids, Sections", "Orthographic Projections"],
      youtube: "https://www.youtube.com/results?search_query=Engineering+Graphics",
      udemy: "https://www.udemy.com/courses/search/?q=Engineering+Graphics",
    },
    {
      title: "Engineering Mathematics-II",
      topics: ["Counting", "Logic", "Relations", "Differential Equations"],
      youtube: "https://www.youtube.com/results?search_query=Engineering+Mathematics+II",
      udemy: "https://www.udemy.com/courses/search/?q=Engineering+Mathematics+II",
    },
    {
      title: "Computer Organisation",
      topics: ["Structure of Computers", "Machine Instructions", "Input/Output Org", "Memory System"],
      youtube: "https://www.youtube.com/results?search_query=Computer+Organisation",
      udemy: "https://www.udemy.com/courses/search/?q=Computer+Organisation",
    },
    {
      title: "Data Structures & Algorithms",
      topics: ["Intro to DS & Algo", "Stack and Queue", "Linked List", "Graphs and Trees"],
      youtube: "https://www.youtube.com/results?search_query=Data+Structures+and+Algorithms",
      udemy: "https://www.udemy.com/courses/search/?q=Data+Structures+and+Algorithms",
    },
    {
      title: "Business & Technical Communication",
      topics: ["Business English", "Technical Writing", "Group Discussion", "Presentation Skills"],
      youtube: "https://www.youtube.com/results?search_query=Business+Technical+Communication",
      udemy: "https://www.udemy.com/courses/search/?q=Technical+Communication",
    },
    {
      title: "Web Development",
      topics: ["HTML & CSS", "JavaScript", "Node.js"],
      youtube: "https://www.youtube.com/results?search_query=Web+Development+Full+Course",
      udemy: "https://www.udemy.com/courses/search/?q=Web+Development",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Semester 2</h2>
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

export default Semester2;
