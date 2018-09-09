import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || '5000';
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
