import db from '../models/padre.model.js';

const padreController = {
  getAllPadres: (req, res) => {
    db.all('SELECT * FROM padres', [], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  },

  createPadre: (req, res) => {
    const { nombre, telefono, email } = req.body;
    if (!nombre) return res.status(400).json({ error: 'Nombre es obligatorio' });
    db.run('INSERT INTO padres (nombre, telefono, email) VALUES (?, ?, ?)', [nombre, telefono, email], function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, nombre, telefono, email });
    });
  },

  updatePadre: (req, res) => {
    const { id } = req.params;
    const { nombre, telefono, email } = req.body;
    db.run('UPDATE padres SET nombre = ?, telefono = ?, email = ? WHERE id = ?', [nombre, telefono, email, id], function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Padre actualizado' });
    });
  },

  deletePadre: (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM padres WHERE id = ?', [id], function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Padre eliminado' });
    });
  }
};

export default padreController;