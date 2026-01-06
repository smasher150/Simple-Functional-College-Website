function About() {
  return (
    <div className="page">
      <h2>ℹ️ About Simple College</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
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

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-2xl font-semibold mb-4 text-center">📊 By the Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2020</div>
            <div className="text-gray-600">Founded</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Faculty Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Graduation Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;