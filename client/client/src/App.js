import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import Products from './Products'; // Your existing Products component
import AdminDashboard from './AdminDashboard'; // Create this component later for admin panel

//function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Your react app is ready:
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
//}
function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Protected route */}
              {/* Add more routes as needed */}
          </Routes>
      </Router>
  );
}
export default App;
