import React, { useEffect, useState } from 'react';
import LogoutButton from '../../components/ui/LogoutButton';

interface Patient {
  id: number;
  name: string;
  email: string;
  age: number;
  gender: string;
}

const PatientDashboard = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatients = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://localhost:5000/api/patients', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch patients');
        }

        setPatients(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Patient Dashboard</h2>
      <LogoutButton />
      <h3>Patient List</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PatientDashboard;
