import { Request, Response } from 'express';
import pool from '../config/db';

// GET /patients
export const getAllPatients = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query('SELECT * FROM patients');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
};

// GET /patients/:id
export const getPatientById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM patients WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Patient not found' });
      return;
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching patient' });
  }
};

// POST /patients
export const createPatient = async (req: Request, res: Response): Promise<void> => {
  const { name, email, age, gender } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO patients (name, email, age, gender) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, age, gender]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error creating patient' });
  }
};

// PUT /patients/:id
export const updatePatient = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name, email, age, gender } = req.body;
  try {
    const result = await pool.query(
      'UPDATE patients SET name=$1, email=$2, age=$3, gender=$4 WHERE id=$5 RETURNING *',
      [name, email, age, gender, id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Patient not found' });
      return;
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error updating patient' });
  }
};

// DELETE /patients/:id
export const deletePatient = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM patients WHERE id=$1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Patient not found' });
      return;
    }
    res.status(200).json({ message: 'Patient deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting patient' });
  }
};
