import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';

function Login() {
  const { login } = useAuth();
  const { values, errors, isSubmitting, setIsSubmitting, handleChange, reset, setError } = useForm({
    email: '',
    password: '',
  });
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess('');

    try {
      await login(values.email, values.password);
      setSuccess('Login successful!');
      reset();
    } catch (error) {
      setError('general', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <h2>🔐 Login to Your Account</h2>
      <p className="text-center mb-6">Welcome back! Please sign in to continue.</p>

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
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="loading"></span>
              Signing in...
            </>
          ) : (
            '🔐 Sign In'
          )}
        </button>
      </form>
    </div>
  );
}

export default Login;