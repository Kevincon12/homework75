const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
});

// /encode тута
// /decode

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});