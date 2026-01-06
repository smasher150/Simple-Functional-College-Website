function Events() {
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
  );
}

export default Events;