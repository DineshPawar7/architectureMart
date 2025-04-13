import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required')
        }
        
        try {
            const url = `${API_BASE_URL}/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, email, error } = result;
            if (success) {
                console.log("Login Success:", result); // 👈 Check this in browser console
                console.log("Email to store:", email); // 👈 Make sure email exists
              
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('user', JSON.stringify({ email, name }));
              
                setTimeout(() => {
                  navigate('/home');
                }, 1000);
              
              
            
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
        } catch (err) {
            handleError(err);
        }
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-center text-primaryColor">Login</h1>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                onChange={handleChange}
                                type="email"
                                name="email"
                                placeholder="Enter your email..."
                                value={loginInfo.email}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                onChange={handleChange}
                                type="password"
                                name="password"
                                placeholder="Enter your password..."
                                value={loginInfo.password}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-primaryColor text-white font-semibold rounded-md hover:bg-hoverColor focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-opacity-50 transition"
                            >
                                Login
                            </button>
                        </div>
                        <div className="text-sm text-center">
                            <span>Don't have an account? </span>
                            <Link to="/signup" className="text-primaryColor font-medium hover:text-hoverColor">Signup</Link>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
}

export default Login;
