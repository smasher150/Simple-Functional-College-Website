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
