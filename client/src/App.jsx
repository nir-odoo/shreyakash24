import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Landing from './pages/landing';
import Home from './pages/homepage';
import Semester1 from "./pages/semester1";
import Semester2 from "./pages/semester2";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/semester1" element={<Semester1 />} />
        <Route path="/semester2" element={<Semester2 />} />
      </Routes>
  );
};
export default App;