import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';

function Signup() {
  const { signup } = useAuth();
  const { values, errors, isSubmitting, setIsSubmitting, handleChange, reset, setError } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess('');

    if (values.password !== values.confirmPassword) {
      setError('confirmPassword', 'Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    try {
      await signup(values.name, values.email, values.password);
      setSuccess('Signup successful!');
      reset();
    } catch (error) {
      setError('general', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <h2>✨ Create Your Account</h2>
      <p className="text-center mb-6">Join our community and start your learning journey today!</p>

      {errors.general && (
        <div className="message error">
          ❌ {errors.general}
        </div>
      )}

      {success && (
        <div className="message success">
          ✅ {success}
        </div>
      )}

      <form className="auth-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 font-medium">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Create a strong password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-2 font-medium">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={values.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-600 mt-1">⚠️ {errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="loading"></span>
              Creating account...
            </>
          ) : (
            '🚀 Create Account'
          )}
        </button>
      </form>
    </div>
  );
}

export default Signup;