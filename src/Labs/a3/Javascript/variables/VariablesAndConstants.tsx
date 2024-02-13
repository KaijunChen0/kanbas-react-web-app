function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;

  return(
    <div>
        <h4>Variables and Constants</h4>
        functionScoped = {functionScoped} <br />
        blockScoped = {blockScoped} <br />
        constant1 = {constant1} <br />
    </div>
  );
}
export default VariablesAndConstants; // export the VariablesAndConstants component to be used in the JavaScript component.