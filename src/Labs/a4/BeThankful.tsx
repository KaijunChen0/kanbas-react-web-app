import { useSelector } from "react-redux";
import { LabState } from "../store";
import helloReducer from "./ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "./ReduxExamples/CounterRedux/counterReducer";

function BeThankful() {
  const { message } = useSelector((state: LabState) => state.helloReducer);
  const { count } = useSelector((state: LabState) => state.counterReducer);
  return (
    <div>
      <h1>Be Thankful for { message }, { count }</h1>
    </div>
  );
}

export default BeThankful;

