const express = require('express');
const dotenv = require('dotenv');
const prisma = require('./db/prisma');
var bodyParser = require('body-parser')

dotenv.config();
const app = express();
const porta = 3000;


var jsonParser = bodyParser.json()


app.get('/', (req, res) => {
    res.json('ok');
});

app.post('/criar-tarefa', jsonParser, async (req, res) => {
    var { descricao, feito } = req.body;
    try {
        const tarefa = await prisma.tarefa.create({
            data: {
                descricao,
                feito
            },
        });
        res.status(201).json(prato);
        return;
    } catch (e) {
        res.status(400).json(e);
        return;
    }
});

app.listen(porta, () => console.log(`Aplicacao escutando a porta ${porta}`))