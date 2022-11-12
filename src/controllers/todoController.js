const todo = require("../models/Todo")


//Add a Todo Task

// Update a Todo Task

// Delete Todo Task

// Retrieve a Todo Task

// Retrieve all Todo Task

exports.getAllTodoTask = async (req, res) => {
    try {
        let todos = await todo.find();
        if(todos.length === 0)
        return res.status(404).json({
            success: false,
            message: "Todo List Not Found"
        })
        es.status(200).json({
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