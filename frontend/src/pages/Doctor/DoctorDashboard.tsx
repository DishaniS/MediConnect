import React, { useEffect, useState } from 'react';
import LogoutButton from '../../components/ui/LogoutButton';

interface Patient {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: string;
}

const DoctorDashboard = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      const token = localStorage.getItem('token');

      try {
        const res = await fetch('http://localhost:5000/api/patients', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Failed to fetch patients');

        setPatients(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Welcome to Doctor Dashboard</h2>
      <LogoutButton />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {patients.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> ({p.email}) - {p.age} years, {p.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorDashboard;
