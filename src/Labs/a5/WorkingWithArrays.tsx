import { title } from "process";
import { useState } from "react";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
        score: 100,
});

    return (
      <div>
        <h3>Working with Arrays</h3>
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

      </div>
    );
  }
  export default WorkingWithArrays;