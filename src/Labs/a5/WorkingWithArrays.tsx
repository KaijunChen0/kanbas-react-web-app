import { useState } from "react";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({id: 1});

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


      </div>
    );
  }
  export default WorkingWithArrays;