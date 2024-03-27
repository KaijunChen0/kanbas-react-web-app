import { title } from "process";
import { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    interface Todo {
        id: number;
        title: string;
        completed: boolean;
        due: string;
        description: string;
        score: number;
    }

    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
        score: 100,
});

    const [errorMessage, setErrorMessage] = useState(null);

    const [todos, setTodos] = useState<Todo[]>([]);
    const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
    };
    const removeTodo = async (todo:Todo) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id:number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
      };
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };
    
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const deleteTodo = async (todo: Todo) => {
        try{
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        }catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
      };
    const updateTodo = async () => {
        try{
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };
    
    
    
    useEffect(() => {
    fetchTodos();
    }, []);


    return (
      <div>
        <h3>-------Working with Arrays-------</h3>
        <h4>Retrieving Arrays</h4>
        <a href={API}
            role="buttton"
            className="btn btn-primary">
          Get Todos
        </a>

        <h4>Retrieving an Item from an Array by ID</h4>
        <input value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: Number(e.target.value) })}/> &nbsp;
        <a href={`${API}/${todo.id}`}
            className="btn btn-primary"
            role="button">
            Get Todo by ID
        </a>

        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`}
            className="btn btn-primary"
            role="button">
            Get Completed Todos
        </a>

        <h3>Creating new Items in an Array</h3>
        <a href={`${API}/create`}
            role="button"
            className="btn btn-primary">
            Create Todo
        </a>

        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`}
            role="button"
            className="btn btn-primary">
            Delete Todo with ID = {todo.id}
        </a>

        <h3>Updating an Item in an Array</h3>
        <input type="text" 
            value={todo.title} 
            onChange={(e) => setTodo({
                ...todo, 
                title: e.target.value,
            })}/> &nbsp;
        <a href={`${API}/${todo.id}/title/${todo.title}`}
            role="button"
            className="btn btn-primary">
            Update Title to {todo.title}
        </a>

        <h3>Exercise 3.3.7 - Edit Complete of Todo</h3>
        <input type="checkbox" 
            checked={todo.completed} 
            onChange={(e) => setTodo({
                ...todo, 
                completed: e.target.checked,
            })}/> &nbsp;
        <a href={`${API}/${todo.id}/completed/${todo.completed}`}
            role="button"
            className="btn btn-primary">
            Update Completed of Todo ID= {todo.id}
        </a>

        <h3>Exercise 3.3.7 - Edit Description of Todo</h3>
        <input type="text" 
            value={todo.description} 
            onChange={(e) => setTodo({
                ...todo, 
                description: e.target.value,
            })}/> &nbsp;
        <a href={`${API}/${todo.id}/description/${todo.description}`}
            role="button"
            className="btn btn-primary">
            Update Description of Todo ID= {todo.id}
        </a>

        <h3>Fetch Todos from Server</h3>
        <textarea value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
        <input value={todo.due} type="date"
            onChange={(e) => setTodo({
            ...todo, due: e.target.value })} />
        <label>
            <input value={todo.completed.toString()} type="checkbox"
            onChange={(e) => setTodo({
                ...todo, completed: e.target.checked })} />
            Completed
        </label>
        <button onClick={postTodo}
            className="btn btn-warning"> 
            Post Todo 
        </button>
        <button onClick={updateTodo}
            className="btn btn-success">
            Update Todo
        </button>


        <button onClick={createTodo}
            className="btn btn-primary">
            Create Todo
        </button> &nbsp;
        <button onClick={updateTitle}
            className="btn btn-success">
            Update Title
        </button>
        <ul className="list-group">
            {todos.map((todo) => (
            <li key={todo.id}
                className="list-group-item">
                    <input checked={todo.completed}
                        type="checkbox" readOnly />
                    {todo.title}
                    <p>{todo.description}</p>
                    <p>{todo.due}</p>
                <button onClick={() => deleteTodo(todo)}
                    className="btn btn-danger float-end ms-2">
                    Delete
                </button>
                <button onClick={() => removeTodo(todo)}
                    className="btn btn-danger">
                    Remove
                </button> &nbsp;
                <button onClick={() => fetchTodoById(todo.id)} 
                    className="btn btn-warning">
                    Edit
                </button> &nbsp;
                {todo.title}
            </li>
            ))}
        </ul>

        {errorMessage && (
            <div className="alert alert-danger mb-2 mt-2">
            {errorMessage}
            </div>
        )}


      </div>
    );
  }
  export default WorkingWithArrays;