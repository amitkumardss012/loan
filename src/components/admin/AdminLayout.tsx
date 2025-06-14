import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('loan_admin_token');
    navigate('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-56 sm:w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:w-64 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-3 sm:p-4 border-b">
          <h2 className="text-xl sm:text-2xl font-bold text-primary-600">Admin Panel</h2>
          <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} className="sm:w-10 sm:h-8" />
          </button>
        </div>
        <nav className="mt-3 sm:mt-4">
          <ul className="space-y-1 sm:space-y-2">
            <li>
              <Link
                to="/admin/dashboard"
                className={`flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-primary-100 hover:text-primary-600 ${
                  location.pathname === '/admin/dashboard'
                    ? 'bg-primary-100 text-primary-600 font-semibold'
                    : ''
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                to="/admin/loans"
                className={`flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-primary-100 hover:text-primary-600 ${
                  location.pathname === '/admin/loans'
                    ? 'bg-primary-100 text-primary-600 font-semibold'
                    : ''
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                Loan Applications
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className={`flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-primary-100 hover:text-primary-600 ${
                  location.pathname === '/admin/users'
                    ? 'bg-primary-100 text-primary-600 font-semibold'
                    : ''
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                Enquiry
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 w-full p-3 sm:p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-red-100 hover:text-red-600"
          >
            <LogOut size={10} className="sm:w-10 sm:h-10 mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-3 sm:p-4 flex items-center justify-between md:hidden">
          <h2 className="text-lg sm:text-xl font-bold">Admin Panel</h2>
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu size={20} className="sm:w-10 sm:h-8" />
          </button>
        </header>
        <main className="flex-1 p-3 sm:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;