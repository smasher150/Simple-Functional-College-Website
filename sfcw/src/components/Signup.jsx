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
      <h2>Sign Up</h2>
      {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={values.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default Signup;