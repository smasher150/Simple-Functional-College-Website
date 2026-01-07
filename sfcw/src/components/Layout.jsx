import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function Layout({ children }) {
  const { isAuthenticated, logout, user } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsDropdownOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  };

  // Close dropdown and search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target) &&
          !event.target.closest('.search-toggle')) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="app">
      <header>
        <div className="container">
          <h1>Simple College</h1>
          <nav>
            <Link to="/">🏠 Home</Link>
            <Link to="/about">ℹ️ About</Link>
            <Link to="/courses">📚 Courses</Link>
            <Link to="/admissions">🎓 Admissions</Link>
            <Link to="/events">📅 Events</Link>
            <Link to="/contact">📞 Contact</Link>
            <button onClick={toggleSearch} className="search-toggle">
              🔍
            </button>

            {/* Search Bar */}
            {isSearchOpen && (
              <form onSubmit={handleSearch} ref={searchRef} className="search-form">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses, events..."
                  className="search-input"
                />
                <button type="submit" className="search-submit">🔍</button>
              </form>
            )}
            {isAuthenticated ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="profile-icon"
                  title="Profile Menu"
                >
                  👤
                </button>
                {isDropdownOpen && (
                  <div className="profile-dropdown">
                    <div className="dropdown-header">
                      <div className="user-name">{user?.name}</div>
                      <div className="user-email">{user?.email}</div>
                    </div>
                    <div className="dropdown-menu">
                      <Link
                        to="/profile"
                        className="dropdown-item"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        👤 Profile
                      </Link>
                      <button
                        onClick={() => {
                          toggleTheme();
                          setIsDropdownOpen(false);
                        }}
                        className="dropdown-item theme-item"
                      >
                        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
                      </button>
                      <button
                        onClick={handleLogout}
                        className="dropdown-item logout"
                      >
                        🚪 Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="login-link">🔐 LOGIN</Link>
            )}
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="bg-gray-900 text-gray-300">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
            {/* College Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">🏫 Simple College</h3>
              <p className="text-sm mb-4">
                Empowering minds, shaping futures. Join our community of learners and innovators.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">📘</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">🐦</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">📷</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">💼</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">🎥</a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/courses" className="hover:text-white transition-colors">Academic Programs</Link></li>
                <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              </ul>
            </div>

            {/* Student Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Student Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">📚 Library</a></li>
                <li><a href="#" className="hover:text-white transition-colors">💻 IT Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">🏥 Health Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">💼 Career Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">🏢 Housing</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-sm">
                <p>📍 123 College Street<br />Education City, EC 12345</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ info@simplecollege.edu</p>
                <p>🕒 Mon-Fri: 8AM-6PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 mt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <p>&copy; 2025 Simple College. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;