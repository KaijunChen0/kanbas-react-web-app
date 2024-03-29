
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

const API_BASE = process.env.REACT_APP_API_BASE;

function Assignment5() {
  return (
    <div>
      <h2>Assignment 5</h2>
      <a href={`${API_BASE}/a5/welcome`} className="btn btn-primary" role="button">Welcome</a><br />
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}

export default Assignment5;