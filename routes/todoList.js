// routes/pratos.js

const controllertodoList = require('../controllers/todoList');
var bodyParser = require('body-parser');



module.exports = function (app) {

    var jsonParser = bodyParser.json()

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept");
        next();
    });


    app.post('/criar-todolist', jsonParser, controllertodoList.criartodoList);
    app.get('/listar-todolist', controllertodoList.listartodoList);
    app.delete('/deletar-todolist/:id', controllertodoList.deletartodoList);
}

