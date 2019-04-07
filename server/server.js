const express = require('express');

const app = express();

const router = express.Router();

app.get('/main', (req, res) => {
    return res.send('hello')
})

app.listen(3000, () => console.log('server is running'))