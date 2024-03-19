import React, { useState } from "react";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input type="number" 
        onChange={(e) => setA(Number(e.target.value))} value={a}/> &nbsp;
      <input type="number"
        onChange={(e) => setB(Number(e.target.value))} value={b}/>

      <h3>Path Parameters</h3>
      <a href={`http://localhost:4000/a5/add/${a}/${b}`}
        className="btn btn-primary"
        role="button">
        Add {a} + {b}
      </a> &nbsp;
      <a href={`http://localhost:4000/a5/subtract/${a}/${b}`}
        className="btn btn-danger"
        role="button">
        Substract {a} - {b}
      </a> &nbsp;
      <a href={`http://localhost:4000/a5/multiply/${a}/${b}`}
        className="btn btn-warning"
        role="button">
        Multiply {a} * {b}
      </a> &nbsp;
      <a href={`http://localhost:4000/a5/divide/${a}/${b}`}
        className="btn btn-info"
        role="button">
        Divide {a} / {b}
      </a>
      
      <h3>Query Parameters</h3>
      <a className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}
        role="button">
        Add {a} + {b}
      </a> &nbsp;
      <a className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}
        role="button">
        Substract {a} - {b}
      </a> &nbsp;
      <a href={`http://localhost:4000/a5/calculator/?operation=multiply&a=${a}&b=${b}`}
        className="btn btn-warning"
        role="button">
        Multiply {a} * {b}
      </a> &nbsp;
      <a href={`http://localhost:4000/a5/calculator/?operation=divide&a=${a}&b=${b}`}
        className="btn btn-info"
        role="button">
        Divide {a} / {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;