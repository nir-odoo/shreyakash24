import '../styles/landing.css';
import videoFile from '../assets/video.mp4'; 
import bgImage from '../assets/images/image.jpg';
const Style = {
  background: `linear-gradient(rgba(39, 39, 48, 0.906), rgba(110, 182, 204, 0.3)), url(${bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
  color: '#333'
};
function Landing() {
  return (
    <div id="wrap" style={Style}>
      <header id="header">
        <div id="right part">
          <div id="navigation">
            <nav>
              <button className="login-link" onClick={() => window.location.href = "/login"}>Login</button>
              <button className="signup-link" onClick={() => window.location.href = "/signup"}>Signup</button>
            </nav>
          </div>
        </div>
      </header>

      <section className="content">
        <section className="sub-content">
          <h2 className="heading">Learnat</h2>
          <div className="subject">
            <h2>What do we offer?</h2>
            <p>
              All Engineering and Competitive exams subjects. Common subjects like Maths, Chemistry, Physics, Engineering graphics.
              And all subjects specific for CS/IT branch.
            </p>
          </div>
        </section>
        <video autoPlay muted loop preload="metadata">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <footer>
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
}

export default Landing;
