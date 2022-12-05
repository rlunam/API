const express = require('express');
const morgan = require('morgan');

const Routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(Routes);

app.listen(4000);
console.log('El servidor esta en el puerto 4000');