import { useState } from 'react';

function Events() {
  const [filter, setFilter] = useState('all');
  const [registeredEvents, setRegisteredEvents] = useState(new Set());

  const events = [
    {
      id: 1,
      title: "New Student Orientation",
      date: "January 15, 2026",
      time: "9:00 AM - 4:00 PM",
      location: "Main Campus Center",
      type: "orientation",
      description: "Welcome new students to campus with tours, workshops, and meet-and-greets with faculty and staff. Learn about campus resources, academic programs, and student life.",
      capacity: 200,
      registered: 145,
      featured: true
    },
    {
      id: 2,
      title: "Tech Career Fair 2026",
      date: "February 10, 2026",
      time: "10:00 AM - 3:00 PM",
      location: "Student Union Ballroom",
      type: "career",
      description: "Connect with leading technology companies including Google, Microsoft, and Amazon. Explore internship and job opportunities in tech, AI, and software development.",
      capacity: 500,
      registered: 387,
      featured: true
    },
    {
      id: 3,
      title: "Spring Arts Festival",
      date: "March 20, 2026",
      time: "11:00 AM - 8:00 PM",
      location: "Campus Quad & Arts Center",
      type: "cultural",
      description: "Celebrate the arrival of spring with music, food, games, and cultural performances from around the world. Featuring student art exhibitions and live performances.",
      capacity: 1000,
      registered: 623,
      featured: false
    },
    {
      id: 4,
      title: "Annual Research Symposium",
      date: "April 5, 2026",
      time: "8:00 AM - 6:00 PM",
      location: "Science & Technology Building",
      type: "academic",
      description: "Showcase groundbreaking student and faculty research projects across all disciplines. Network with researchers and discover new areas of study.",
      capacity: 300,
      registered: 198,
      featured: false
    },
    {
      id: 5,
      title: "Mental Health Awareness Week",
      date: "April 15-19, 2026",
      time: "Various Times",
      location: "Campus-wide",
      type: "wellness",
      description: "A week dedicated to mental health awareness with workshops, counseling sessions, yoga classes, and peer support groups.",
      capacity: null,
      registered: null,
      featured: false
    },
    {
      id: 6,
      title: "Entrepreneurship Bootcamp",
      date: "May 1-3, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Business Innovation Center",
      type: "workshop",
      description: "Three-day intensive workshop on starting and running a business. Learn from successful entrepreneurs and develop your business plan.",
      capacity: 50,
      registered: 47,
      featured: false
    }
  ];

  const filteredEvents = filter === 'all' ? events : events.filter(event => event.type === filter);

  const handleRegister = (eventId) => {
    setRegisteredEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  const eventTypes = [
    { value: 'all', label: 'All Events', icon: '📅' },
    { value: 'orientation', label: 'Orientation', icon: '🎓' },
    { value: 'career', label: 'Career', icon: '💼' },
    { value: 'cultural', label: 'Cultural', icon: '🎭' },
    { value: 'academic', label: 'Academic', icon: '📚' },
    { value: 'wellness', label: 'Wellness', icon: '🧘' },
    { value: 'workshop', label: 'Workshop', icon: '🛠️' }
  ];

  return (
    <div className="page">
      <h2>📅 Campus Events</h2>
      <p className="text-center text-lg mb-8 text-gray-600 dark:text-gray-400">
        Stay connected with our vibrant community through exciting events, workshops, and activities throughout the year.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {eventTypes.map(type => (
          <button
            key={type.value}
            onClick={() => setFilter(type.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === type.value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {type.icon} {type.label}
          </button>
        ))}
      </div>

      {/* Featured Events */}
      {filter === 'all' && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">⭐ Featured Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.filter(event => event.featured).map(event => (
              <div key={event.id} className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg border-2 border-yellow-200 dark:border-yellow-700 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-2xl">⭐</div>
                <h4 className="text-xl font-semibold mb-2 pr-8">{event.title}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span>📅 {event.date}</span>
                  <span>🕒 {event.time}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{event.description.substring(0, 120)}...</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    📍 {event.location}
                  </span>
                  <button
                    onClick={() => handleRegister(event.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      registeredEvents.has(event.id)
                        ? 'bg-green-600 text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {registeredEvents.has(event.id) ? '✅ Registered' : 'Register'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Events */}
      <div className="events">
        {filteredEvents.map(event => (
          <div key={event.id} className="event">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <span className={`event-type ${event.type}`}>
                {eventTypes.find(t => t.value === event.type)?.icon} {event.type}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="event-date text-lg font-medium text-blue-600 dark:text-blue-400">
                  📅 {event.date}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  🕒 {event.time}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  📍 {event.location}
                </p>
                {event.capacity && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    👥 {event.registered}/{event.capacity} registered
                  </p>
                )}
              </div>
              <div className="text-right">
                <button
                  onClick={() => handleRegister(event.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    registeredEvents.has(event.id)
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  disabled={event.capacity && event.registered >= event.capacity}
                >
                  {registeredEvents.has(event.id) ? '✅ Registered' :
                   event.capacity && event.registered >= event.capacity ? '❌ Full' : 'Register'}
                </button>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{event.description}</p>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-lg border border-purple-200 dark:border-purple-700 text-center">
        <h3 className="text-2xl font-semibold mb-4">📧 Stay Updated</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Never miss an important event! Subscribe to our newsletter for updates on campus activities,
          deadlines, and special announcements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
          />
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;