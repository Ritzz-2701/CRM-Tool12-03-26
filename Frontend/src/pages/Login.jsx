import React from 'react';
import { Mail, Lock, PenTool, Layout, Monitor, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="flex min-h-screen bg-crm-bg">
            {/* Left Banner - Red Abstract Area */}
            <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-crm-darkred to-crm-red text-white flex-col items-center justify-center p-12 relative overflow-hidden">
                {/* Decorative elements representing the illustration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rotate-45"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-lg"></div>
                </div>

                <div className="relative z-10 text-center max-w-md">
                    <h1 className="text-5xl font-serif font-bold mb-6 tracking-wide">Welcome Back!</h1>
                    <p className="text-xl font-light opacity-90 mb-12">
                        Sign in to access your account.
                    </p>

                    {/* Abstract composition matching the creative workspace vibe */}
                    <div className="relative w-64 h-64 mx-auto border-2 border-white/30 rounded-2xl p-6 bg-white/5 backdrop-blur-sm">
                        <Monitor className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-white/80" />
                        <PenTool className="absolute bottom-4 right-4 w-8 h-8 text-white/60" />
                        <Layout className="absolute top-4 left-4 w-10 h-10 text-white/60" />
                        <Coffee className="absolute bottom-6 left-6 w-6 h-6 text-white/50" />
                    </div>
                </div>
            </div>

            {/* Right Form Area */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md px-8 py-10">
                    <div className="mb-8 text-center">
                        {/* Logo placeholder */}
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6">
                            <img src="/OneXtel_Logo.png" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Log in to your account</h2>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crm-red focus:border-transparent transition-colors"
                                    placeholder="Username or Email Address"
                                />
                            </div>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    className="block w-full pl-10 pr-16 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crm-red focus:border-transparent transition-colors"
                                    placeholder="Password"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <a href="#" className="text-sm text-gray-500 hover:text-crm-red font-medium">Forgot?</a>
                                </div>
                            </div>
                        </div>

                        <Link to="/dashboard">
                            <button
                                type="button"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-crm-red hover:bg-[#a10e10] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-crm-red transition-colors"
                            >
                                LOG IN
                            </button>
                        </Link>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">or</span>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            <button className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Continue with Google
                            </button>

                            <button className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.08.45-2.1.58-3.06-.35C3.78 16.51 2.37 10.7 5.86 7.41c1.47-1.38 3.23-1.4 4.19-1.4 1.48 0 2.59.57 3.37.57.77 0 2.05-.62 3.65-.62 1.34 0 2.94.3 4.1 1.83-3.6 1.94-2.92 6.51.68 8.02-1.04 2.21-2.93 4.07-4.8 4.47M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25" />
                                </svg>
                                Continue with Apple
                            </button>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-600">
                                New user? <a href="#" className="font-bold text-crm-red hover:underline">Sign Up</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
