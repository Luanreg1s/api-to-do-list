const controllerAutenticacao = require('../controllers/autenticacao');
var bodyParser = require('body-parser');
//importar validação de token  


module.exports = function(app) {
    // create application/json parser
    var jsonParser = bodyParser.json();

    app.post('/registrar-usuario',jsonParser, controllerAutenticacao.registrarUsuario);
    app.post('/login-usuario',jsonParser, controllerAutenticacao.loginUsuario);
}