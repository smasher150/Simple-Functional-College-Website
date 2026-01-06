import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="page">
            <h2>Welcome to Simple College</h2>
            <p>Empowering minds, shaping futures. Discover our programs and join our community.</p>
            <img src="/vite.svg" alt="College logo" className="hero-image" />
          </div>
        )
      case 'about':
        return (
          <div className="page">
            <h2>About Us</h2>
            <p>Simple College is dedicated to providing quality education in a supportive environment. Our mission is to foster academic excellence and personal growth.</p>
            <ul>
              <li>Established in 2020</li>
              <li>Over 1000 students</li>
              <li>Experienced faculty</li>
            </ul>
          </div>
        )
      case 'courses':
        return (
          <div className="page">
            <h2>Our Courses</h2>
            <div className="courses">
              <div className="course">
                <h3>Computer Science</h3>
                <p>Learn programming, algorithms, and software development.</p>
              </div>
              <div className="course">
                <h3>Business Administration</h3>
                <p>Develop skills in management, finance, and entrepreneurship.</p>
              </div>
              <div className="course">
                <h3>Engineering</h3>
                <p>Explore mechanical, electrical, and civil engineering principles.</p>
              </div>
            </div>
          </div>
        )
      case 'admissions':
        return (
          <div className="page">
            <h2>Admissions</h2>
            <p>Join our community of learners. We offer a streamlined admissions process.</p>
            <h3>Requirements</h3>
            <ul>
              <li>High school diploma or equivalent</li>
              <li>Minimum GPA of 2.5</li>
              <li>Application form and fee</li>
            </ul>
            <h3>Application Process</h3>
            <ol>
              <li>Submit online application</li>
              <li>Provide transcripts</li>
              <li>Schedule an interview</li>
              <li>Receive admission decision</li>
            </ol>
            <button onClick={() => setCurrentPage('signup')}>Apply Now</button>
          </div>
        )
      case 'events':
        return (
          <div className="page">
            <h2>Upcoming Events</h2>
            <p>Stay connected with our community through various events and activities.</p>
            <div className="events">
              <div className="event">
                <h3>Orientation Day</h3>
                <p className="event-date">January 15, 2026</p>
                <p>Welcome new students to campus with tours, workshops, and meet-and-greets with faculty and staff.</p>
                <span className="event-type">Orientation</span>
              </div>
              <div className="event">
                <h3>Tech Career Fair</h3>
                <p className="event-date">February 10, 2026</p>
                <p>Connect with leading technology companies and explore internship and job opportunities in tech.</p>
                <span className="event-type">Career</span>
              </div>
              <div className="event">
                <h3>Spring Festival</h3>
                <p className="event-date">March 20, 2026</p>
                <p>Celebrate the arrival of spring with music, food, games, and cultural performances.</p>
                <span className="event-type">Cultural</span>
              </div>
              <div className="event">
                <h3>Research Symposium</h3>
                <p className="event-date">April 5, 2026</p>
                <p>Showcase student and faculty research projects across all disciplines.</p>
                <span className="event-type">Academic</span>
              </div>
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className="page">
            <h2>Contact Us</h2>
            <p>Get in touch with us for more information.</p>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        )
      case 'login':
        return <Login />
      case 'signup':
        return <Signup />
      default:
        return <div className="page">Page not found</div>
    }
  }

  return (
    <div className="app">
      <header>
        <h1>Simple College</h1>
        <nav>
          <button onClick={() => setCurrentPage('home')}>Home</button>
          <button onClick={() => setCurrentPage('about')}>About</button>
          <button onClick={() => setCurrentPage('courses')}>Courses</button>
          <button onClick={() => setCurrentPage('admissions')}>Admissions</button>
          <button onClick={() => setCurrentPage('events')}>Events</button>
          <button onClick={() => setCurrentPage('contact')}>Contact</button>
          <button onClick={() => setCurrentPage('login')}>Login</button>
          <button onClick={() => setCurrentPage('signup')}>Sign Up</button>
        </nav>
      </header>
      <main>
        {renderPage()}
      </main>
      <footer>
        <p>&copy; 2025 Simple College. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
