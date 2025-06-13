// Main server entry point
import express from 'express';
import padreRoutes from './routes/padre.routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/padres', padreRoutes);

// TODO: Add routes

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
