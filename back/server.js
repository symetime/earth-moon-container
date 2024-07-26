const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello Earth' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});