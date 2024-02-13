import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";

function JavaScript() {
    console.log('Hello World');
    return (
        <div>
            <h3>JavaScript</h3>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <ES5Functions />
            <ArrowFunctions />
            <ImpliedReturn />
            <FunctionParenthesisAndParameters />
        </div>
    );
}

export default JavaScript; // export the JavaScript component to be used in the App component.