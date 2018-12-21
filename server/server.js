require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


//Configurando Json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
app.use(require('./routes/index'));


//Connexion con Mongo
mongoose.connect(process.env.NODE_ENV, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

//setting
// app.set('port', process.env.port || 3000);


//Servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor inciado en el puerto ${ process.env.PORT }`);
})