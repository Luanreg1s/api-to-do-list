const express = require('express');
const dotenv = require('dotenv');
const prisma = require('./config/db');
var bodyParser = require('body-parser')

dotenv.config();
const app = express();
const porta = 3000;

require('./routes/todoList')(app);
require('./routes/autenticacao.js')(app);

app.listen(porta, () => console.log(`Aplicacao escutando a porta ${porta}`))