import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

function TodoItem({todo}:{todo: { id: string; title: string }}) {
    const dispatch = useDispatch();

    return (
      <li key={todo.id} className="list-group-item">
        {todo.title}
        <button className="btn btn-primary" onClick={() => dispatch(setTodo(todo))}> Edit </button>
        <button className="btn btn-danger" onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      </li>
    );
  }
  export default TodoItem;