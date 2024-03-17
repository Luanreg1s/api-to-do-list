

const controllerTarefas = require('../controllers/tarefas');
var bodyParser = require('body-parser');



module.exports = function (app) {

    var jsonParser = bodyParser.json()

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept");
        next();
    });


    app.post('/criar-tarefa', jsonParser, controllerTarefas.criarTarefa);
    app.delete('/deletar-tarefa/:id', controllerTarefas.deletarTarefa);
    app.put('/atualizar-tarefa/:id', jsonParser, controllerTarefas.atualizarTarefa);
}
