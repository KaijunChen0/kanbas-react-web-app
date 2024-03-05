import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { useSelector } from "react-redux";
import { LabState } from "../store";

function Assignment4() {
    function sayHello() {
        alert("Hello");
      }
    const { todos } = useSelector((state: LabState) => state.todosReducer);

    return (
        <div>
            <h2>Assignment 4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ReduxExamples />
            <ul className="list-group">
                {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    {todo.title}
                </li>
                ))}
            </ul>

        </div>
    );
}

export default Assignment4;