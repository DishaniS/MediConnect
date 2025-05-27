import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import PatientDashboard from '../pages/Patient/PatientDashboard';
import DoctorDashboard from '../pages/Doctor/DoctorDashboard';
import AdminDashboard from '../pages/Admin/AdminDashboard';

const AppRoutes = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {token && role === 'patient' && <Route path="/patient" element={<PatientDashboard />} />}
      {token && role === 'doctor' && <Route path="/doctor" element={<DoctorDashboard />} />}
      {token && role === 'admin' && <Route path="/admin" element={<AdminDashboard />} />}
    </Routes>
  );
};

export default AppRoutes;
