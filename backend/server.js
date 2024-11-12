const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'tables_db'
});

app.use(cors());
app.use(express.json());

// Get all tables
app.get('/api/tables', (req, res) => {
  db.query('SELECT * FROM tables ORDER BY date DESC', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Delete table
app.delete('/api/tables/:id', (req, res) => {
  db.query('DELETE FROM tables WHERE id = ?', [req.params.id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Table deleted successfully' });
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
