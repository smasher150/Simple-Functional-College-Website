function Contact() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: ["123 College Street", "Education City, EC 12345"]
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"]
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@simplecollege.edu", "admissions@simplecollege.edu"]
    },
    {
      icon: "🕒",
      title: "Office Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"]
    }
  ];

  return (
    <div className="page">
      <h2>📞 Contact Us</h2>
      <p className="text-center text-lg mb-8 text-gray-600">
        Have questions? We're here to help! Reach out to us through any of the channels below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-2xl mb-2">{info.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
          <form className="contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="w-full"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select id="subject" className="w-full">
                <option value="">Select a topic</option>
                <option value="admissions">Admissions</option>
                <option value="courses">Course Information</option>
                <option value="financial-aid">Financial Aid</option>
                <option value="housing">Housing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                placeholder="Tell us how we can help you..."
                className="w-full"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="w-full">
              📤 Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold mb-4 text-center">📍 Visit Our Campus</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Experience our beautiful campus firsthand! We offer guided tours for prospective students and their families.
              Our campus features modern facilities, green spaces, and a vibrant student community.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                State-of-the-art classrooms and labs
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Sports facilities and recreation centers
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Student housing and dining options
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-green-500">✓</span>
                Library and study spaces
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg flex items-center justify-center text-6xl">
              🏫
            </div>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              📅 Schedule a Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;