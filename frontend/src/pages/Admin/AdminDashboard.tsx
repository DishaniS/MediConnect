import React, { useEffect, useState } from 'react';
import {
  Container, Typography, Table, TableHead, TableRow,
  TableCell, TableBody, Paper
} from '@mui/material';
import LogoutButton from '../../components/ui/LogoutButton';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');

      try {
        const res = await fetch('http://localhost:5000/api/admin/users', {
          headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to fetch users');

        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <LogoutButton />
      {error && <Typography color="error">{error}</Typography>}

      <Paper sx={{ mt: 2, p: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id}>
                <TableCell>{u.first_name} {u.last_name}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default AdminDashboard;
