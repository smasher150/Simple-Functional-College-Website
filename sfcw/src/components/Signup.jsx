import { useState } from 'react'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignup = (e) => {
    e.preventDefault()
    // Basic validation
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert('Signup successful!')
        // Reset form
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
      } else {
        alert('Passwords do not match')
      }
    } else {
      alert('Please fill in all fields')
    }
  }

  return (
    <div className="page">
      <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup