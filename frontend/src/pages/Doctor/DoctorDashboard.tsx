import React, { useEffect, useState } from 'react';
import {
  Container, Typography, Table, TableHead, TableRow,
  TableCell, TableBody, Paper
} from '@mui/material';
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
          headers: { Authorization: `Bearer ${token}` }
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
    <Container>
      <Typography variant="h4" gutterBottom>Doctor Dashboard</Typography>
      <LogoutButton />
      {error && <Typography color="error">{error}</Typography>}

      <Paper sx={{ mt: 2, p: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.email}</TableCell>
                <TableCell>{p.age}</TableCell>
                <TableCell>{p.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default DoctorDashboard;
