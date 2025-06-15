import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy load Admin components
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'));
const ProtectedRoute = lazy(() => import('./components/admin/ProtectedRoute'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const LoanApplications = lazy(() => import('./pages/admin/LoanApplications'));
const LoanDetails = lazy(() => import('./pages/admin/LoanDetails'));
const Login = lazy(() => import('./pages/admin/Login'));
const Users = lazy(() => import('./pages/admin/Users'));

// Lazy load Public components
const Layout = lazy(() => import('./components/layout/Layout'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ApplyPage = lazy(() => import('./pages/ApplyPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const EmiCalculatorPage = lazy(() => import('./pages/EmiCalculatorPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default App;