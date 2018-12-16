require('./config/config');
const express = require('express');
const app = express();


//setting
// app.set('port', process.env.port || 3000);
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ type: 'GET' });
})

app.post('/api', (req, res) => {
    console.log(req.body);
    res.json({
        type: 'POST',
        name: req.body.name,
        lastname: req.body.lastname
    });
})

app.put('/api', (req, res) => {
    res.json({
        type: 'PUT'
    });
})

app.delete('/api', (req, res) => {
    res.json({ type: 'DELETE' });
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor inciado en el puerto ${ process.env.PORT }`);
})