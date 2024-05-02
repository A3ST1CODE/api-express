const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        status: true,
        message: 'Hello World!'
    });
});
    
app.listen(port, () => {
    console.log('Server started on http://localhost:' + port);
});