import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [errors, setErrors] = useState({});

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
    } catch {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <h2>📞 Contact Us</h2>
      <p className="text-center text-lg mb-8 text-gray-600 dark:text-gray-400">
        Have questions? We're here to help! Reach out to us through any of the channels below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{info.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{info.title}</h4>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 dark:text-gray-400 text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:scale-110 transition-transform">📘</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">🐦</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">📷</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">💼</a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>

          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className={`w-full ${errors.firstName ? 'border-red-500' : ''}`}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name *</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className={`w-full ${errors.lastName ? 'border-red-500' : ''}`}
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john.doe@example.com"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full ${errors.subject ? 'border-red-500' : ''}`}
              >
                <option value="">Select a topic</option>
                <option value="admissions">Admissions</option>
                <option value="courses">Course Information</option>
                <option value="financial-aid">Financial Aid</option>
                <option value="housing">Housing</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us how we can help you..."
                className={`w-full ${errors.message ? 'border-red-500' : ''}`}
                rows="5"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <LoadingSpinner size="small" color="white" />
                  Sending...
                </div>
              ) : (
                '📤 Send Message'
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg border border-blue-200 dark:border-gray-600">
        <h3 className="text-xl font-semibold mb-4 text-center">📍 Visit Our Campus</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Experience our beautiful campus firsthand! We offer guided tours for prospective students and their families.
              Our campus features modern facilities, green spaces, and a vibrant student community.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-green-500">✓</span>
                State-of-the-art classrooms and labs
              </p>
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-green-500">✓</span>
                Sports facilities and recreation centers
              </p>
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-green-500">✓</span>
                Student housing and dining options
              </p>
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-green-500">✓</span>
                Library and study spaces
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-indigo-300 dark:from-blue-800 dark:to-indigo-900 rounded-lg flex items-center justify-center text-6xl">
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