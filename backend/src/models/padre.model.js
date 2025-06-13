import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./cafeteria.db');

// Crea la tabla si no existe
const createPadresTable = () => {
    db.run(`CREATE TABLE IF NOT EXISTS padres (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        telefono TEXT,
        email TEXT
    )`);
};
createPadresTable();

export default db;
