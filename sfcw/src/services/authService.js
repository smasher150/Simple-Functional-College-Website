// Mock authentication service - no backend required
export const authService = {
  async login(email, password) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Simple validation - in a real app, this would be more robust
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Mock successful login
    const mockUser = { id: 1, name: 'User', email };
    const mockToken = 'mock-jwt-token-' + Date.now();

    localStorage.setItem('token', mockToken);
    return { user: mockUser, token: mockToken };
  },

  async signup(name, email, password) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Simple validation
    if (!name || !email || !password) {
      throw new Error('All fields are required');
    }

    // Mock successful signup
    const mockUser = { id: 1, name, email };
    const mockToken = 'mock-jwt-token-' + Date.now();

    localStorage.setItem('token', mockToken);
    return { user: mockUser, token: mockToken };
  },

  logout() {
    localStorage.removeItem('token');
  },

  getToken() {
    return localStorage.getItem('token');
  },

  isAuthenticated() {
    return !!this.getToken();
  },
};