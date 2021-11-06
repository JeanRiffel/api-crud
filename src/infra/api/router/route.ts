import express from 'express';
import  { allCustomers } from '../controllers/controller';

export const router = express.Router();

 router.get('/api/all-customers', allCustomers );




