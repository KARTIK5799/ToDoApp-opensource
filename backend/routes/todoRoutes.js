import { Router } from "express";
import { addTodo, getTodo ,updateTodo,deleteTodo, getTodos,} from "../controllers/Todo.js";


const router = Router()

router.post('/add-todo' , addTodo);

router.get('/',getTodos);

router.get('/:todo_id',getTodo);

router.patch('/update-todo/:todo_id',updateTodo);

router.delete('/delete-todo/:todo_id',deleteTodo);

export default router;
