import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { LabState, TodoType } from "../../../store";

function TodoList() {
    const { todos, todo } = useSelector((state: LabState) => state.todosReducer);
    return (
      <div>
        <h2>Todo List</h2>
        <ul className="list-group">
            <TodoForm/>
            {todos.map((todo: TodoType, index: number) => (
            <TodoItem todo={todo} />
            ))}
        </ul>
      </div>
    );
  }
  export default TodoList;