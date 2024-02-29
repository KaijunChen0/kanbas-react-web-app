function ClickEvent() {
    const hello = () => {
      alert("Hello World!");
    };
    const lifeIs = (good: string) => {
      alert(`Life is ${good}`);
    };
    return (
      <div>
        <h2>Click Event</h2>
        <button onClick={hello} className="btn btn-primary">
          Click Hello</button>
        <button onClick={() => lifeIs("Good!")} className="btn btn-warning">
          Click Good</button>
        <button className="btn btn-primary" 
          onClick={() => {
            hello();
            lifeIs("Great!");
          }}>
          Click Hello 3
        </button>
      </div>
    );
  }
export default ClickEvent;