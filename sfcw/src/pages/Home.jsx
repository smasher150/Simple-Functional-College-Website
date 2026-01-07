import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="page">
      <h2>🏫 Welcome to Simple College</h2>
      <p className="text-center text-lg mb-8">
        Empowering minds, shaping futures. Discover our programs and join our vibrant community of learners and innovators.
      </p>

      <div className="text-center mb-8">
        <img src="/vite.svg" alt="College logo" className="hero-image" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg border border-blue-200">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
          <p className="text-gray-600">World-class programs designed to prepare you for success in your chosen field.</p>
        </div>

        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg border border-green-200">
          <div className="text-4xl mb-4">👥</div>
          <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
          <p className="text-gray-600">Join a diverse community of students, faculty, and alumni who support your growth.</p>
        </div>

        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg border border-purple-200">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-2">Career Opportunities</h3>
          <p className="text-gray-600">Access internships, job placements, and networking opportunities with leading companies.</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-lg text-gray-700 mb-4">
          Ready to start your educational journey?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/courses" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            📚 Explore Courses
          </a>
          <a href="/admissions" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            🎓 Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;