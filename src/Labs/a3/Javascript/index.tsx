import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";

function JavaScript() {
    console.log('Hello World');
    return (
        <div>
            <h3>JavaScript</h3>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
        </div>
    );
}

export default JavaScript; // export the JavaScript component to be used in the App component.