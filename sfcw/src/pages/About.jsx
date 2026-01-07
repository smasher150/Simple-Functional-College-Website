function About() {
  const leadership = [
    {
      name: "Dr. Sarah Johnson",
      role: "President",
      image: "👩‍🎓",
      bio: "Dr. Johnson has over 20 years of experience in higher education leadership."
    },
    {
      name: "Prof. Michael Chen",
      role: "Dean of Academic Affairs",
      image: "👨‍🏫",
      bio: "Leading academic excellence with innovative teaching methodologies."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Dean of Student Affairs",
      image: "👩‍💼",
      bio: "Dedicated to creating an inclusive and supportive campus environment."
    }
  ];

  const values = [
    { icon: "🎓", title: "Excellence", desc: "Striving for the highest standards in education" },
    { icon: "🤝", title: "Community", desc: "Building strong relationships and connections" },
    { icon: "🚀", title: "Innovation", desc: "Embracing new ideas and technologies" },
    { icon: "🌍", title: "Diversity", desc: "Celebrating different perspectives and backgrounds" }
  ];

  return (
    <div className="page">
      <h2>ℹ️ About Simple College</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-4">
            Simple College is dedicated to providing exceptional education in a supportive and inclusive environment.
            Our mission is to foster academic excellence, personal growth, and professional development for all our students.
          </p>
          <p className="text-gray-600">
            We believe that education should be accessible, engaging, and transformative. Through innovative teaching methods,
            cutting-edge technology, and a commitment to student success, we prepare our graduates to thrive in an ever-changing world.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-600">Personalized learning paths tailored to your goals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-600">Experienced faculty with industry expertise</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-600">State-of-the-art facilities and technology</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-600">Strong industry partnerships and career support</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-600">Diverse community fostering inclusivity and innovation</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Team */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Leadership Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadership.map((leader, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-blue-200 dark:border-gray-600">
              <div className="text-6xl mb-4">{leader.image}</div>
              <h4 className="text-xl font-semibold mb-2">{leader.name}</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{leader.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg border border-blue-200 dark:border-gray-600">
        <h3 className="text-2xl font-semibold mb-6 text-center">📊 By the Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600 mb-2">2020</div>
            <div className="text-gray-600 dark:text-gray-400">Founded</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600 dark:text-gray-400">Students</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Faculty Members</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600 dark:text-gray-400">Graduation Rate</div>
          </div>
        </div>
      </div>

      {/* Campus Life Preview */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Experience Campus Life</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Beyond academics, Simple College offers a vibrant campus life with student organizations,
          sports, cultural events, and community service opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            🏫 Campus Tour
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            👥 Student Life
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;