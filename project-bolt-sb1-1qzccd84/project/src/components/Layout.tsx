import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Stethoscope, 
  LineChart,
  LogOut, 
  Menu,
  Brain,
  icons,
  FileText // Import the icon for Describe
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Patients', href: '/patients', icon: Users },
    { name: 'AI Diagnosis', href: '/diagnosis', icon: Brain },
    { name: 'Analytics', href: '/analytics', icon: LineChart },
    { name: 'Generate', href: '/generate', icon: FileText }, // Add the Describe option
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <div className="flex items-center">
              <Stethoscope className="w-8 h-8 text-indigo-600" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">HealthAI</h1>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 px-4 pt-4 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t">
            <button className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
              <LogOut className="w-5 h-5 mr-3" />
              Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 lg:pl-64">
        <div className="py-6">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
