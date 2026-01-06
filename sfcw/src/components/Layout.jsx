import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Layout({ children }) {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="app">
      <header>
        <h1>Simple College</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
          {isAuthenticated ? (
            <>
              <span>Welcome, {user?.name}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2025 Simple College. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;