import React, { useEffect, useState } from 'react';
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
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
    <div>
      <h2>Welcome to Admin Dashboard</h2>
      <LogoutButton />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.first_name} {u.last_name} — {u.email} ({u.role})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
