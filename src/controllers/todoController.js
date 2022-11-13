const todo = require("../models/Todo")


// Add a Todo Task
exports.createTodoTask = async (req, res) => {
    try {
        let todos = await req.body;
        let created = await todo.create(todos);
        if (!created)
          return res.status(400).json({
            success: false,
            message: " Todo not added",
        });
        return res.status(201).json({
            success: true,
            message: "Todo added to the list",
            todos: created
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        });
    }

}

// Update a Todo Task
exports.updateTodoTask = async (req, res) => {
    try {
        let id = { _id: req.params.id };
        let todos = await req.body;
        let update = await todo.findOneAndUpdate(id, todos, { new: true });
        if (!update)
          res.status(400).json({
            success: false,
            message: "Todo task not updated",
          });
        return res.status(200).json({
          success: true,
          message: "Todo task updated",
          todos,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

// Delete Todo Task
exports.deleteTodoTask = async (req, res) => {
    try {
        let id = { _id: req.params.id};
        let deleted = await todo.findByIdAndDelete(id);
        if (!deleted) return res.status(400).json({
            success: false,
            message: "Todo task not deleted",
            todos
        });
        return res.status(200).json({
            success: true,
            message: "Todo task deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

// Retrieve a Todo Task
exports.getTodo = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let todos = await todo.findOne({_id: id})
        if (!todos) return res.status(404).json({
            success: false,
            message: "No such Todo on the list",
        });
        res.status(200).json({
            success: true,
            message: "Todo was found",
            todos
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal error",
            error: error.message
        })
    }
}

// Retrieve all Todo Task

exports.getAllTodoTask = async (req, res) => {
    try {
        let todos = await todo.find();
        if(todos.length === 0)
        return res.status(404).json({
            success: false,
            message: "Todo List Not Found"
        })
        return res.status(200).json({
            success: true,
            message: "List of all Todo's",
            todos
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "No Todo's Found",
            error: error.message 
        })
    }
}