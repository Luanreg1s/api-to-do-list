const prisma = require('../config/db');


exports.criartodoList = async (req, res) => {
    var { titulo, usuario } = req.body;
     try {
         const todoList  = await prisma.todoList.create({
             data: {
                 titulo,
                 usuario
             },
         });
         res.status(201).json(todoList);
         return;
     } catch (e){
         res.status(400).json(e);
         return;
     }
    }
    exports.listartodoList = async (req, res) => {
        try {
             var todoList = await prisma.todoList.findMany()
             res.status(200).json(todoList);
         } catch (e) {
             res.status(400).json(e);
         }
     };
    
    