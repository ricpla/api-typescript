import express from 'express';

// Pruebas Testing Branch "Testing"
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (req, res) => {
    console.log('someone pinged here!');
    res.send('pong')
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});