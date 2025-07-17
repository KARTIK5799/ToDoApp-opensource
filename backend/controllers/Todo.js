import Todo from "../models/todoModel.js"

export const addTodo = async (req, res) => {
    try {
        const { title ,description , dueDate , tags } = req.body
        const todo = await Todo.create({ title, description , dueDate , tags  })
        res.status(200).json({ message: "todo added ", todo })
    } catch (error) {
        res.status(500).json({ message: "server Error" ,error})
    }
}

export const getTodos = async (req,res) => {
try {
    const todos = await Todo.find()
    res.status(200).json({message:"todos fetched succesfully",todos})
} catch (error) {
    res.status(500).json({message:'Server Error',error})
}
}

export const getTodo = async (req,res) => {
try {
    const todo = await Todo.findById(req.params.todo_id)
    res.status(200).json({message:"todo fetched succesfully",todo})
} catch (error) {
    res.status(500).json({message:'Server Error',error})
}
}

export const updateTodo = async (req,res) => {
try {
   const updatedTodo = await Todo.findByIdAndUpdate(req.params.todo_id,{$set:req.body},{new:true});
   res.status(200).json({message:"Todo Updated" ,updatedTodo }) 
} catch (error) {
 res.status(500).json({message:"server Error" , error})   
}
}


export const deleteTodo = async(req,res) => {
try {
     const updatedTodo = await Todo.findByIdAndDelete(req.params.todo_id);
   res.status(200).json({message:"Todo deleted" ,updatedTodo }) 
} catch (error) {
   res.status(500).json({message:"server Error" , error})     
}
}