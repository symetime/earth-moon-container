const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 5001;

app.use(cors());

app.get('/api/moon', (req, res) => {
  res.json({ message: 'Moon Hello' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});