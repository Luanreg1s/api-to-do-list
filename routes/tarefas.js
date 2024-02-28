

const controllerTarefas = require('../controllers/tarefas');
var bodyParser = require('body-parser');
const verificaToken = require('../config/autenticacaoConfig');


module.exports = function (app) {

    var jsonParser = bodyParser.json()

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept");
        next();
    });


    app.post('/criar-tarefa', jsonParser, verificaToken, controllerTarefas.criarTarefa);
    app.delete('/deletar-tarefa/:id', verificaToken, controllerTarefas.deletarTarefa);
}