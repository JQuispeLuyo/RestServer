require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(require('./routes/usuario'));


mongoose.connect('mongodb://cafe-user:nolose1@ds063140.mlab.com:63140/cafe', { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});

//setting
// app.set('port', process.env.port || 3000);


app.listen(process.env.PORT, () => {
    console.log(`Servidor inciado en el puerto ${ process.env.PORT }`);
})