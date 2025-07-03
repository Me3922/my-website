const express = require('express');
// const { Pool } = require('pg');

const app = express();
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

app.get('/', async (req, res) => {
  // try {
  //   const result = await pool.query('SELECT NOW()');
  //   res.send(`Hello, world! Database time: ${result.rows[0].now}`);
  // } catch (err) {
  //   res.status(500).send('Database error: ' + err.message);
  // }
  res.send('Hello, world! The server is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});