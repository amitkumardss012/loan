import { Route, Routes } from 'react-router-dom';

// Admin components
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Dashboard from './pages/admin/Dashboard';
import LoanApplications from './pages/admin/LoanApplications';
import LoanDetails from './pages/admin/LoanDetails';
import Login from './pages/admin/Login';
import Users from './pages/admin/Users';

// Public components
import Layout from './components/layout/Layout';
import AboutPage from './pages/AboutPage';
import ApplyPage from './pages/ApplyPage';
import ContactPage from './pages/ContactPage';
import EmiCalculatorPage from './pages/EmiCalculatorPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
      <Routes>
        {/* Public Site Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="apply" element={<ApplyPage />} />
          <Route path="emi-calculator" element={<EmiCalculatorPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Admin Login (outside protected routes) */}
        <Route path="/admin/login" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/loans" element={<LoanApplications />} />
            <Route path="/admin/loans/:id" element={<LoanDetails />} />
            <Route path="/admin/users" element={<Users />} />
          </Route>
        </Route>
      </Routes>
  );
};

export default App;