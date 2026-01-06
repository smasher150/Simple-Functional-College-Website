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
      <h2>Login</h2>
      {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form className="auth-form" onSubmit={handleSubmit}>
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
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;