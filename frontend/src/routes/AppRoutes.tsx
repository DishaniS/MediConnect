import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import PatientDashboard from '../pages/Patient/PatientDashboard';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/patient" element={<PatientDashboard />} />
    </Routes>
  </Router>
);

export default AppRoutes;
