function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {

      return (
        <div>
          <h3>Counter {counter} in Child</h3>
          <button onClick={() => setCounter(counter + 1)} className="btn btn-success">
            Increment</button>
          <button onClick={() => setCounter(counter - 1)} className="btn btn-danger">
            Decrement</button>
        </div>
      );
    }
export default ChildStateComponent;