import React from 'react';
import Layout from '../components/Layout';
import { ChevronDown, ArrowUpRight, Users, FolderOpen, Bell, TrendingUp } from 'lucide-react';

export default function Dashboard() {
    return (
        <Layout>
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Good morning, John</h1>
                    <p className="mt-1 text-sm text-gray-500">Here&apos;s what is happening with your projects today.</p>
                </div>
                <div className="mt-4 sm:mt-0 flex space-x-2">
                    <button className="px-4 py-2 border border-gray-200 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
                        Last 30 days <ChevronDown className="w-4 h-4 inline ml-1" />
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {[
                    { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', positive: true },
                    { label: 'Active Projects', value: '12', change: '+3', positive: true },
                    { label: 'New Clients', value: '144', change: '-4', positive: false },
                    { label: 'Pending Invoices', value: '$12,050.00', change: '2', positive: null },
                ].map((stat, i) => (
                    <div key={i} className="bg-white overflow-hidden rounded-xl border border-gray-100 shadow-sm p-5">
                        <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
                        <dd className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</dd>
                        {stat.positive !== null && (
                            <div className={`mt-2 flex items-center text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                                {stat.positive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingUp className="w-4 h-4 mr-1 transform rotate-180" />}
                                <span className="font-medium">{stat.change}</span>
                                <span className="text-gray-400 ml-2">from last month</span>
                            </div>
                        )}
                        {stat.positive === null && (
                            <div className="mt-2 flex items-center text-sm text-gray-500">
                                <span className="font-medium text-gray-900">{stat.change}</span> invoices awaiting payment
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Main layout grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Projects (takes 2 columns) */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">Recent Projects</h3>
                        <button className="text-sm text-crm-red font-medium hover:text-crm-darkred">View all</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-100">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                                    <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                                    <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {[
                                    { name: 'Website Redesign', client: 'Acme Corp', status: 'In Progress', progress: 65, color: 'bg-blue-500' },
                                    { name: 'Brand Identity', client: 'Stark Ind.', status: 'Review', progress: 90, color: 'bg-yellow-500' },
                                    { name: 'Mobile App UI', client: 'Wayne Ent.', status: 'Starting', progress: 10, color: 'bg-indigo-500' },
                                    { name: 'Marketing Assets', client: 'Oscorp', status: 'Completed', progress: 100, color: 'bg-green-500' },
                                ].map((project, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
                                        <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">{project.client}</td>
                                        <td className="px-5 py-4 whitespace-nowrap text-sm">
                                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span className="text-sm font-medium text-gray-700 mr-2">{project.progress}%</span>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5 flex-1 max-w-16">
                                                    <div className={`${project.color} h-1.5 rounded-full`} style={{ width: `${project.progress}%` }}></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Column / Activity Stream */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="p-5 border-b border-gray-100">
                        <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                    </div>
                    <div className="p-5">
                        <ul className="space-y-5">
                            {[
                                { title: 'Invoice Paid', desc: '$3,400 from Acme Corp', time: '2 hours ago', icon: <ArrowUpRight className="w-4 h-4 text-green-500" />, iconBg: 'bg-green-50' },
                                { title: 'New Comment', desc: 'Sarah on Brand Identity', time: '4 hours ago', icon: <Users className="w-4 h-4 text-blue-500" />, iconBg: 'bg-blue-50' },
                                { title: 'Project Completed', desc: 'Marketing Assets', time: 'Yesterday', icon: <FolderOpen className="w-4 h-4 text-crm-red" />, iconBg: 'bg-red-50' },
                                { title: 'New Lead', desc: 'Contact from Dribbble portfolio', time: 'Yesterday', icon: <Bell className="w-4 h-4 text-purple-500" />, iconBg: 'bg-purple-50' },
                            ].map((activity, i) => (
                                <li key={i} className="flex space-x-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${activity.iconBg}`}>{activity.icon}</div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                                        <p className="text-sm text-gray-500 truncate">{activity.desc}</p>
                                    </div>
                                    <div className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</div>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full mt-6 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50">
                            View all activity
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
