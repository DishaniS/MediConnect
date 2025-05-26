import { Request, Response } from 'express';
import pool from '../config/db';

// GET all users
export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.status(200).json(result.rows);
  } catch {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
