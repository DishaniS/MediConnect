import { Request, Response } from 'express';
import pool from '../config/db';

// GET all doctors
export const getAllDoctors = async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query('SELECT * FROM doctors');
    res.status(200).json(result.rows);
  } catch {
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
};

// POST new doctor (admin only)
export const createDoctor = async (req: Request, res: Response): Promise<void> => {
  const { name, email, specialization } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO doctors (name, email, specialization) VALUES ($1, $2, $3) RETURNING *',
      [name, email, specialization]
    );
    res.status(201).json(result.rows[0]);
  } catch {
    res.status(500).json({ error: 'Failed to create doctor' });
  }
};
