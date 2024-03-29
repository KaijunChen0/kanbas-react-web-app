import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get(`${API_BASE}/a5/welcome`);
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);

  const [result, setResult] = useState(0);
  const fetchSum = async (a: any , b: any) => {
    const response = await
      axios.get(`${API_BASE}/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a:any, b: any) => {
    const response = await axios.get(
      `${API_BASE}/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };


  return (
    <div>
      <h3>-------Encoding Parameters In URLs-------</h3>
      <h4>Calculator</h4>
      <input type="number" 
        onChange={(e) => setA(Number(e.target.value))} value={a}/> &nbsp;
      <input type="number"
        onChange={(e) => setB(Number(e.target.value))} value={b}/> &nbsp;
      <input value={result} type="" readOnly />

      <h3>Path Parameters</h3>
      <a href={`${API_BASE}/a5/add/${a}/${b}`}
        className="btn btn-primary"
        role="button">
        Add {a} + {b}
      </a> &nbsp;
      <a href={`${API_BASE}/a5/subtract/${a}/${b}`}
        className="btn btn-danger"
        role="button">
        Substract {a} - {b}
      </a> &nbsp;
      <a href={`${API_BASE}/a5/multiply/${a}/${b}`}
        className="btn btn-warning"
        role="button">
        Multiply {a} * {b}
      </a> &nbsp;
      <a href={`${API_BASE}/a5/divide/${a}/${b}`}
        className="btn btn-info"
        role="button">
        Divide {a} / {b}
      </a>
      
      <h3>Query Parameters</h3>
      <a className="btn btn-primary"
        href={`${API_BASE}/a5/calculator?operation=add&a=${a}&b=${b}`}
        role="button">
        Add {a} + {b}
      </a> &nbsp;
      <a className="btn btn-danger"
        href={`${API_BASE}/a5/calculator?operation=subtract&a=${a}&b=${b}`}
        role="button">
        Substract {a} - {b}
      </a> &nbsp;
      <a href={`${API_BASE}/a5/calculator?operation=multiply&a=${a}&b=${b}`}
        className="btn btn-warning"
        role="button">
        Multiply {a} * {b}
      </a> &nbsp;
      <a href={`${API_BASE}/a5/calculator?operation=divide&a=${a}&b=${b}`}
        className="btn btn-info"
        role="button">
        Divide {a} / {b}
      </a>

      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>

      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)} 
        className="btn btn-primary">
        Fetch Sum of {a} + {b}
      </button> &nbsp;
      <button onClick={() => fetchSubtraction(a, b)} 
        className="btn btn-danger">
        Fetch Substraction of {a} - {b}
      </button>


    </div>
  );
}
export default EncodingParametersInURLs;