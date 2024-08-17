import React, { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Signing up with:', { name, email, password, confirmPassword });
    
        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }
    
        // if (password !== confirmPassword) {
        //     setError('Passwords do not match');
        //     return;
        // }
    
        // // Email format validation
        // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailPattern.test(email)) {
        //     setError('Please enter a valid email address');
        //     return;
        // }
    
        // // Password strength validation
        // const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        // if (!passwordPattern.test(password)) {
        //     setError('Password must be at least 8 characters long, contain one uppercase letter, and one number');
        //     return;
        // }
    
        setError(''); // Clear any previous errors
    
        try {
            // Show loading state
            setIsLoading(true);
    
            const res = await fetch(`http://localhost:4000/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name.trim(), email: email.trim().toLowerCase(), password }),
            });

            // Check if the request was successful
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'An error occurred during registration');
            }
    
            const data = await res.json();

            navigate('/chat');

        } catch (error) {
            console.log(error);
            // Display the specific error message or a general error
            setError(error.message || 'An unexpected error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className="mb-4">
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
                    <div className="mb-6">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-red-500 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
