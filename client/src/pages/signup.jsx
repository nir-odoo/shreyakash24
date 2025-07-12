import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/style_logins.css'; 
import bgImage from '../assets/images/image.jpg';
function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const requestBody = { username, email, password };

    try {
      const response = await fetch('http://127.0.0.1:5050/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Registration failed');

      alert(data.message);
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="wrap">
    <div className="box">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup-btn">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div></div>
  );
}

export default Signup;
