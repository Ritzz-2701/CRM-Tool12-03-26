import React from 'react';
import { ArrowRight, CheckCircle2, BarChart3, Users, Zap, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-serif font-bold text-xl mr-2">
                                <img src="/OneXtel_Logo.png" alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">OnexCRM</span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#features" className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">Features</a>
                            <a href="#pricing" className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">Pricing</a>
                            <a href="#testimonials" className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">Testimonials</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                                Log in
                            </Link>
                            <Link to="/login" className="bg-crm-red text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-crm-darkred transition-colors shadow-sm shadow-red-200">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center space-x-2 bg-red-50 text-crm-red px-3 py-1 rounded-full text-sm font-medium mb-8 border border-red-100">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crm-red opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-crm-red"></span>
                        </span>
                        <span>New: AI-Powered Insights</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
                        Manage your creative <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-crm-red to-orange-500">business beautifully.</span>
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                        The only CRM designed specifically for creative agencies, freelancers, and design studios. Keep track of clients, projects, and invoices all in one clean space.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/login" className="w-full sm:w-auto px-8 py-4 bg-crm-red text-white rounded-xl text-lg font-medium hover:bg-crm-darkred transition-all shadow-lg shadow-red-200 flex items-center justify-center">
                            Start your free trial <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl text-lg font-medium hover:bg-gray-50 hover:border-gray-300 transition-all focus:outline-none">
                            Book a demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Abstract Dashboard Preview */}
            <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="relative rounded-2xl bg-gray-50 border border-gray-200 p-2 sm:p-4 shadow-2xl shadow-gray-200/50">
                    <div className="absolute top-0 right-10 -mt-8 w-32 h-32 bg-red-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 left-20 -mt-8 w-32 h-32 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

                    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row">
                        {/* Mock Dashboard Sidebar */}
                        <div className="hidden md:block w-48 bg-gray-50 border-r border-gray-100 p-4 space-y-4">
                            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                            <div className="space-y-2 mt-8">
                                <div className="h-8 bg-red-50 rounded text-crm-red flex items-center px-2"><Layout className="w-4 h-4 mr-2" /> Dasboard</div>
                                <div className="h-8 text-gray-400 flex items-center px-2"><Users className="w-4 h-4 mr-2" /> Clients</div>
                                <div className="h-8 text-gray-400 flex items-center px-2"><BarChart3 className="w-4 h-4 mr-2" /> Reports</div>
                            </div>
                        </div>
                        {/* Mock Dashboard Main */}
                        <div className="flex-1 p-6 space-y-6">
                            <div className="flex justify-between items-center">
                                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-8 w-8 bg-crm-red/20 text-crm-red rounded-full flex items-center justify-center">A</div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="h-24 bg-red-50 border border-red-100 rounded-lg p-4 flex flex-col justify-between">
                                    <div className="h-3 w-16 bg-red-200 rounded"></div>
                                    <div className="h-6 w-24 bg-crm-red rounded animate-pulse"></div>
                                </div>
                                <div className="h-24 bg-gray-50 border border-gray-100 rounded-lg p-4 flex flex-col justify-between">
                                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                                    <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
                                </div>
                                <div className="h-24 bg-gray-50 border border-gray-100 rounded-lg p-4 flex flex-col justify-between">
                                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                                    <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
                                </div>
                            </div>
                            <div className="h-48 bg-gray-50 border border-gray-100 rounded-lg p-4">
                                <div className="h-3 w-24 bg-gray-200 rounded mb-4"></div>
                                <div className="flex items-end h-32 space-x-2">
                                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                        <div key={i} className={`flex-1 ${i === 3 ? 'bg-crm-red' : 'bg-gray-200'} rounded-t`} style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Minimal List */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Everything you need to scale</h2>
                        <p className="mt-4 text-gray-500">Powerful features wrapped in a beautiful, minimal interface.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Client Management", desc: "Organize contacts, track communication, and build better relationships.", icon: <Users className="w-6 h-6 text-crm-red" /> },
                            { title: "Lightning Fast", desc: "Built on modern infrastructure so you never have to wait for a page load.", icon: <Zap className="w-6 h-6 text-crm-red" /> },
                            { title: "In-depth Reports", desc: "Understand your business health with beautiful, actionable charts.", icon: <BarChart3 className="w-6 h-6 text-crm-red" /> }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-500 line-clamp-3">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
