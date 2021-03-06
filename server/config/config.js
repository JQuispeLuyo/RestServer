// Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// Vencimiento del token
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || 60 * 60 * 24 * 30;

//Semilla

process.env.SEED_TOKEN = process.env.SEED_TOKEN || 'Semilla-Para_Api-Rest';


let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.NODE_ENV = urlDB;