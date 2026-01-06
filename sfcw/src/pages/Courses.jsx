function Courses() {
  const courses = [
    {
      title: "Computer Science",
      icon: "💻",
      description: "Master programming, algorithms, data structures, and software development. Learn cutting-edge technologies including AI, machine learning, and cloud computing.",
      duration: "4 years",
      credits: "120",
      careers: ["Software Engineer", "Data Scientist", "AI Engineer", "Tech Entrepreneur"]
    },
    {
      title: "Business Administration",
      icon: "📊",
      description: "Develop essential business skills in management, finance, marketing, and entrepreneurship. Gain practical experience through internships and real-world projects.",
      duration: "4 years",
      credits: "120",
      careers: ["Business Analyst", "Marketing Manager", "Financial Advisor", "Entrepreneur"]
    },
    {
      title: "Engineering",
      icon: "⚙️",
      description: "Explore mechanical, electrical, and civil engineering principles. Work on innovative projects using advanced tools and technologies.",
      duration: "4 years",
      credits: "128",
      careers: ["Mechanical Engineer", "Electrical Engineer", "Civil Engineer", "Project Manager"]
    }
  ];

  return (
    <div className="page">
      <h2>📚 Our Academic Programs</h2>
      <p className="text-center text-lg mb-8 text-gray-600">
        Choose from our comprehensive range of programs designed to prepare you for success in your chosen career path.
      </p>

      <div className="courses">
        {courses.map((course, index) => (
          <div key={index} className="course">
            <div className="text-center mb-4">
              <div className="text-5xl mb-3">{course.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="font-semibold text-blue-600">⏱️ Duration</div>
                <div className="text-gray-700">{course.duration}</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-600">📋 Credits</div>
                <div className="text-gray-700">{course.credits}</div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">🎯 Career Opportunities:</h4>
              <div className="flex flex-wrap gap-2">
                {course.careers.map((career, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {career}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Learn More
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold mb-2">Not sure which program is right for you?</h3>
        <p className="text-gray-600 mb-4">Take our career assessment quiz or schedule a consultation with our academic advisors.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            📝 Take Career Quiz
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            📅 Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courses;