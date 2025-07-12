import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import mainImg from "../assets/images/main.png";
import designImg from "../assets/images/design.svg";
import hamburger from "../assets/images/hamburger.png";
import close from "../assets/images/close.png";
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.jpeg";
import c3 from "../assets/images/c3.png";

const Home = () => {
  const navigate = useNavigate();
  const [skillsHave, setSkillsHave] = useState("");
  const [skillsWant, setSkillsWant] = useState("");
  const [matches, setMatches] = useState([]);

  const handleSkillSwap = () => {
    const username = localStorage.getItem("username");
  
    if (!username) {
      alert("Please log in to use skill swap.");
      return;
    }
  
    fetch("http://127.0.0.1:5050/api/update-skills", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        skillsHave: skillsHave.split(",").map(skill => skill.trim()),
        skillsWant: skillsWant.split(",").map(skill => skill.trim()),
      }),
    })
      .then((res) => res.json())
      .then(() => {
        return fetch("http://127.0.0.1:5050/api/skill-swap", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.matches);
      })
      .catch((err) => {
        console.error("Error during skill swap:", err);
        alert("Something went wrong.");
      });
  };
  
  useEffect(() => {
    const body = document.querySelector("body");
    const menuButton = document.getElementById("menu");
    const closeBtn = document.getElementById("close");
    const soonElements = document.querySelectorAll(".coming");

    // Sidebar open/close
    menuButton?.addEventListener("click", () => {
      body.classList.add("sidebar-open");
    });

    closeBtn?.addEventListener("click", () => {
      body.classList.remove("sidebar-open");
    });

    // Coming soon alert
    soonElements?.forEach((el) =>
      el.addEventListener("click", () =>
        alert("Coming soon! Stay tuned.")
      )
    );

    // Dropdown toggle
    const engineeringBtn = document.getElementById("dropbtn");
    const firstDropdown = engineeringBtn?.querySelector(".dropdown");
    const firstYear = firstDropdown?.querySelector(".first-year");
    const secondDropdown = firstYear?.querySelector(".dropdown2");

    const toggleFirst = (e) => {
      e.preventDefault();
      e.stopPropagation();
      firstDropdown?.classList.toggle("show");
    };

    const toggleSecond = (e) => {
      e.preventDefault();
      e.stopPropagation();
      secondDropdown?.classList.toggle("show");
    };

    engineeringBtn?.addEventListener("click", toggleFirst);
    firstYear?.addEventListener("click", toggleSecond);

    const outsideClick = (e) => {
      if (
        !engineeringBtn.contains(e.target) &&
        !firstDropdown.contains(e.target) &&
        !secondDropdown.contains(e.target)
      ) {
        firstDropdown?.classList.remove("show");
        secondDropdown?.classList.remove("show");
      }
    };

    document.addEventListener("click", outsideClick);

    // Scroll arrows
const courseContainer = document.querySelector(".wrapreview1");
const reviewContainer = document.querySelector(".wrapreview2");

const courseLeftArrow = document.querySelector("#courses .left-arrow");
const courseRightArrow = document.querySelector("#courses .right-arrow");

const reviewLeftArrow = document.querySelector("#review .left-arrow");
const reviewRightArrow = document.querySelector("#review .right-arrow");

courseLeftArrow?.addEventListener("click", () => {
  courseContainer?.scrollBy({ left: -courseContainer.clientWidth * 0.8, behavior: "smooth" });
});

courseRightArrow?.addEventListener("click", () => {
  courseContainer?.scrollBy({ left: courseContainer.clientWidth * 0.8, behavior: "smooth" });
});

reviewLeftArrow?.addEventListener("click", () => {
  reviewContainer?.scrollBy({ left: -reviewContainer.clientWidth * 0.8, behavior: "smooth" });
});

reviewRightArrow?.addEventListener("click", () => {
  reviewContainer?.scrollBy({ left: reviewContainer.clientWidth * 0.8, behavior: "smooth" });
});


    // Logout
    document.querySelectorAll(".login-link").forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Logged out successfully");
        localStorage.clear();
        navigate("/");
      })
    );

    // Delete account
    document.querySelectorAll(".signup-link").forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const confirmDelete = window.confirm(
          "Are you sure you want to delete your account? This action cannot be undone."
        );

        if (confirmDelete) {
          const username = localStorage.getItem("username");

          fetch("http://127.0.0.1:5050/delete-account", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.message);
              localStorage.clear();
              navigate("/");
            })
            .catch((err) => {
              console.error("Error:", err);
              alert("Failed to delete account.");
            });
        }
      })
    );

    // Cleanup
    return () => {
      document.removeEventListener("click", outsideClick);
    };
  }, [navigate]);

  return (
    <div id="wrap">
      <header id="header">
      <div id="right-part">
          <div id="navigation">
            <nav>
              <a className="login-link">Logout</a>
              <a className="signup-link">Signout</a>
            </nav>
          </div>
        </div>
        <div id="left-part">
          <button id="menu">
            <img src={hamburger} alt="menu" />
          </button>
          <div id="brand">Learnat</div>
          <button id="close">
            <img src={close} alt="close" />
          </button>
          <div id="search">
            <input type="text" placeholder="What do you want to learn..." />
            <button id="searchbtn">Search</button>
          </div>
        </div>
      </header>

      <div id="sidebar">
        <nav id="list">
          <ul id="sidebar-content">
            <li><a className="login-link">Logout</a></li>
            <li><a className="signup-link">Signout</a></li>
            <li><a href="#">Home</a></li>
            <li id="dropbtn">
              <a href="#">For Engineering <i className="bi bi-chevron-down"></i></a>
              <div className="dropdown">
                <ul className="dropdown-content">
                  <li className="first-year">
                    <a href="#">First year</a>
                    <div className="dropdown2">
                      <ul className="dropdown-content2">
                        <li><button onClick={() => navigate("/sem1")}>First semester</button></li>
                        <li><button onClick={() => navigate("/sem2")}>Second semester</button></li>
                      </ul>
                    </div>
                  </li>
                  <li className="coming"><a href="#">Second year</a></li>
                  <li className="coming"><a href="#">Third year</a></li>
                  <li className="coming"><a href="#">Fourth year</a></li>
                </ul>
              </div>
            </li>
            <li className="coming"><a href="#">For Gate</a></li>
            <li><a href="#">Support & Help</a></li>
          </ul>
        </nav>
      </div>

      <img src={designImg} className="design" alt="design" />
      <h1>Want to learn something new...</h1>
      <h2>Explore our wide range of courses</h2>

      <div id="description">
        <div id="main image">
          <img src={mainImg} alt="main" />
        </div>
        <div id="message">
          <p>"Learn anytime, anywhere with our e-learning platform."</p>
          <p>--Gain expert knowledge, interactive lessons, and skills that shape your future—all at your convenience."</p>
        </div>
      </div>

      <section id="about">
        <h2>About Learnat</h2>
        <div className="content">
          <p>Learnat is a modern e-learning platform that provides flexible, expert-led courses for students and professionals.</p>
          <p>We believe in affordable, high-quality education that empowers learners anytime, anywhere.</p>
          <p>Whether you're preparing for exams or picking up a new skill, Learnat is here for your journey.</p>
        </div>
      </section>

      <div id="courses">
        <h2>🌟 Our popular courses! </h2>
        <div className="wrapreview1">
          {[{ img: c1, text: "AI - ₹2499" }, { img: c2, text: "Business Comm - ₹1099" }, { img: c3, text: "CANVA - ₹999" }].map((course, idx) => (
            <article key={idx}>
              <img src={course.img} alt={`course${idx + 1}`} />
              <p>{course.text}</p>
              <button className="coming">Enroll</button>
              <button className="coming">Try a free demo class</button>
            </article>
          ))}
        </div>
        <button className="arrow left-arrow" aria-label="Scroll left">&#8592;</button>
        <button className="arrow right-arrow" aria-label="Scroll right">&#8594;</button>
      </div>

      <div id="review">
        <h2>What do our users feel?</h2>
        <button className="arrow left-arrow" aria-label="Scroll left">&#8592;</button>
        <div className="wrapreview2">
          {[
            `"I felt it really helpful. All resources available here make it easy to study."`,
            `"This platform made learning so engaging, the lessons are clear, interactive, and fun!"`,
            `"I actually feel myself getting better every day!"`
          ].map((review, i) => (
            <article key={i}>
              <p>{review}</p>
              <p className="author">--By {["ABC", "PQR", "XYZ"][i]}, 2025</p>
            </article>
          ))}
        </div>
        <button className="arrow right-arrow" aria-label="Scroll right">&#8594;</button>
      </div>
      <section id="skill-swap">
  <h2>🔁 Skill Swap</h2>
  <p>Enter what you can teach and what you want to learn</p>
  <div className="swap-form">
    <input
      type="text"
      placeholder="Skills you HAVE (comma separated)"
      value={skillsHave}
      onChange={(e) => setSkillsHave(e.target.value)}
    />
    <input
      type="text"
      placeholder="Skills you WANT (comma separated)"
      value={skillsWant}
      onChange={(e) => setSkillsWant(e.target.value)}
    />
    <button onClick={handleSkillSwap}>Find Matches</button>
  </div>

  {matches.length > 0 && (
    <div className="match-results">
      <h3>🎯 Matching Users</h3>
      <ul>
        {matches.map((match, i) => (
          <li key={i}>
            <strong>{match.username}</strong> <br />
            <span>Has: {match.skillsHave.join(", ")}</span><br />
            <span>Wants: {match.skillsWant.join(", ")}</span>
          </li>
        ))}
      </ul>
    </div>
  )}
</section>

      <footer>
        <nav id="links">
          <a href="#about">About us</a>
          <a href="#">Privacy policy</a>
          <a href="#">FAQs</a>
        </nav>
        <nav id="social">
          <a href="https://www.linkedin.com/" target="_blank"><i className="bi bi-linkedin"></i></a>
          <a href="https://www.twitter.com/" target="_blank"><i className="bi bi-twitter"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram"></i></a>
          <a href="https://www.facebook.com/" target="_blank"><i className="bi bi-facebook"></i></a>
          <a href="https://gmail.com" target="_blank"><i className="bi bi-envelope-fill"></i></a>
        </nav>
        <hr />
        <p>&copy;2025 All rights reserved. Address- Fort, Mumbai-400019</p>
      </footer>
    </div>
  );
};

export default Home;
