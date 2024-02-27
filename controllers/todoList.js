const prisma = require('../config/db');


exports.criartodoList = async (req, res) => {
    var { titulo, usuarioUsuarioId} = req.body;
    console.log(req.body)
    try {
         const todoList  = await prisma.todoList.create({
             data: {
                 titulo,
                 usuarioUsuarioId
             },
         });
         res.status(201).json(todoList);
         return;
     } catch (e){
         res.status(400).json(e);
         return;
     }
    };
    exports.listartodoList = async (req, res) => {
        try {
             var todoList = await prisma.todoList.findMany()
             res.status(200).json(todoList);
         } catch (e) {
             res.status(400).json(e);
         }
     };
     exports.deletartodoList = async(req, res) => {
        try {
            var id = Number(req.params.id)
            var todoList = await prisma.todoList.delete({
                where: { 
                    id : id
                }
            });
            res.status(200).json(todoList);
        } catch (e) {
            res.status(400).json(e);
        }
    };
    

    
    