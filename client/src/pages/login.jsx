import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/style_logins.css'; 
import bgImage from '../assets/images/image.jpg';
const Style = {
  background: `linear-gradient(rgba(39, 39, 48, 0.906), rgba(110, 182, 204, 0.3)), url(${bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
  color: '#333'
};
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const requestBody = { username, password };

    try {
      const response = await fetch('http://127.0.0.1:5050/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Login failed');

      alert(data.message);
      localStorage.setItem('username', username);
      navigate('/home'); // adjust based on your app
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="wrap" style={Style}>
    <div className="box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          id="loginUsername"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          id="loginPassword"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup here</Link>
      </p>
    </div></div>
  );
}

export default Login;
