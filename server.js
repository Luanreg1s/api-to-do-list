const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors")

dotenv.config();
const app = express();
const porta = 3000;
app.use(cors({
    origin:"*"
}))

require('./routes/todoList')(app);
require('./routes/autenticacao.js')(app);
require('./routes/tarefas.js')(app);

app.listen(porta, () => console.log(`Aplicacao escutando a porta ${porta}`))