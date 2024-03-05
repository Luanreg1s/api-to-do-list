const prisma = require('../config/db');


exports.criarTarefa = async (req, res) => {
    var { descricao, todoListId} = req.body;
    try {
         const tarefa  = await prisma.tarefa.create({
             data: {
                 descricao,
                 todoListId
                
             },
         });
         res.status(201).json(tarefa);
         return;
     } catch (e){
         res.status(400).json(e);
         return;
     }
    };

    exports.deletarTarefa = async (req, res) => {
        try {
            var id = Number(req.params.id)
            var tarefa = await prisma.tarefa.delete({
                where: {
                    id: id
                }
            });
            res.status(200).json(tarefa);
        } catch (e) {
            res.status(400).json(e);
        }
    };

    exports.atualizarTarefa = async (req, res) => {
        var { feito } = req.body;
        try {
            var id = Number(req.params.id)
            const tarefa = await prisma.tarefa.update({
                where: { 
                    id : id
                },
                data: {
                    feito
                },
            });
            res.status(200).json(tarefa);
            return;
        } catch (e){
            res.status(400).json(e);
            return;
        }
    }
    
