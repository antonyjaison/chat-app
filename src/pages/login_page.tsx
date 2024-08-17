import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
        // Show loading state
        setIsLoading(true);

        const res = await fetch(`http://localhost:4000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
        });

        // Check if the request was successful
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'An error occurred during login');
        }

        const data = await res.json();

        localStorage.setItem('authToken', data.token);

        console.log('Login successful:', data);

        navigate('/chat');

    } catch (error) {
        console.log(error);
        // Display the specific error message or a general error
        setError(error.message || 'An unexpected error occurred. Please try again later.');
    } finally {
        setIsLoading(false);
    }



    // Reset error and fields (for demonstration)
    // setError('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="mb-6 text-right">
            <Link to="#" className="text-sm text-red-500 hover:underline">
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-red-500 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
