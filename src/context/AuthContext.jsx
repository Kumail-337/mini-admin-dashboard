import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in on page load
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token, name: 'Admin User' });
    }
  }, []);

  const login = (email, password) => {
    // Mock authentication logic
    if (email === 'admin@admin.com' && password === 'password') {
      const mockToken = 'mock-jwt-token-123';
      localStorage.setItem('token', mockToken);
      setUser({ token: mockToken, name: 'Admin User' });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};