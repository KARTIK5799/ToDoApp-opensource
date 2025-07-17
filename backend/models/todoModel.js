import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    dueDate:Date,
    tags:[String],
    isComplete:{
        type:Boolean,
        default:false
    }
});


const Todo = mongoose.model('Todo',todoSchema);

export default Todo;
