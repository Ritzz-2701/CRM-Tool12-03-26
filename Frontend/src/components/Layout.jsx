import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Bell,
    Search,
    Menu,
    Home,
    Users,
    FolderOpen,
    Calendar,
    CreditCard,
    Settings,
    ChevronDown,
    Plus,
} from 'lucide-react';

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [openMenus, setOpenMenus] = useState({});
    const location = useLocation();

    const navigations = [
        { name: 'Dashboard', icon: Home, href: '/dashboard' },
        {
            name: 'Account Setup',
            icon: Users,
            children: [
                { name: 'Create Account', href: '/create-account' },
                { name: 'View Account', href: '/view-account' },
            ],
        },
        { name: 'Documents', icon: FolderOpen, href: '/documents' },
        { name: 'Calendar', icon: Calendar, href: '/calendar' },
        { name: 'Invoices', icon: CreditCard, href: '/invoices' },
        { name: 'Settings', icon: Settings, href: '/settings' },
    ];

    const isItemActive = (item) => {
        if (item.href && location.pathname === item.href) return true;
        if (item.children) {
            return item.children.some((c) => location.pathname === c.href);
        }
        return false;
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside
                className={`bg-white border-r border-gray-100 transition-all duration-300 ${
                    sidebarOpen ? 'w-64' : 'w-20'
                } hidden md:flex flex-col`}
            >
                <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3 overflow-hidden">
                        <div className="w-8 h-8 rounded flex items-center justify-center font-bold font-serif shrink-0">
                            <img
                                src="/OneXtel_Logo.png"
                                alt="Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        {sidebarOpen && (
                            <span className="font-bold text-lg whitespace-nowrap">OnexCRM</span>
                        )}
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {navigations.map((item) => (
                        <div key={item.name}>
                            {!item.children && (
                                <Link
                                    to={item.href || '#'}
                                    className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${
                                        isItemActive(item)
                                            ? 'bg-red-50 text-crm-red font-medium'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                >
                                    <item.icon className="w-5 h-5 shrink-0" />
                                    {sidebarOpen && <span className="ml-3">{item.name}</span>}
                                </Link>
                            )}

                            {item.children && (
                                <div>
                                    <button
                                        onClick={() =>
                                            setOpenMenus((s) => ({
                                                ...s,
                                                [item.name]: !s[item.name],
                                            }))
                                        }
                                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                                            isItemActive(item)
                                                ? 'bg-red-50 text-crm-red font-medium'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                    >
                                        <div className="flex items-center">
                                            <item.icon className="w-5 h-5 shrink-0" />
                                            {sidebarOpen && <span className="ml-3">{item.name}</span>}
                                        </div>
                                        {sidebarOpen && (
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${
                                                    openMenus[item.name]
                                                        ? 'transform rotate-180'
                                                        : ''
                                                }`}
                                            />
                                        )}
                                    </button>

                                    {openMenus[item.name] && (
                                        <div className="mt-1 space-y-1">
                                            {item.children.map((c) => (
                                                <Link
                                                    key={c.name}
                                                    to={c.href}
                                                    className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                                >
                                                    {sidebarOpen ? (
                                                        <span className="ml-8">{c.name}</span>
                                                    ) : (
                                                        <span className="ml-3">{c.name}</span>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* User profile snippet */}
                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                            JD
                        </div>
                        {sidebarOpen && (
                            <div className="ml-3 flex-1 overflow-hidden">
                                <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
                                <p className="text-xs text-gray-500 truncate">
                                    john@onextel.com
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                {/* Top Header */}
                <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center flex-1">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="text-gray-500 hover:text-gray-900 focus:outline-none p-2 rounded-md -ml-2 mr-2 hidden md:block"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <div className="relative w-full max-w-md hidden sm:block">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border-0 bg-gray-50 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-crm-red sm:text-sm"
                                placeholder="Search clients, projects..."
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-400 hover:text-gray-500 relative">
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-crm-red ring-2 ring-white"></span>
                            <Bell className="w-5 h-5" />
                        </button>
                        <button className="bg-crm-red text-white p-2 text-sm font-medium rounded-lg hover:bg-crm-darkred transition-colors flex items-center shadow-sm">
                            <Plus className="w-4 h-4 mr-1 hidden sm:block" /> New Project
                        </button>
                    </div>
                </header>

                {/* page content */}
                <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
