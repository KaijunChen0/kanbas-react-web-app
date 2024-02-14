const square = (a: number) => a * a;// declare outside of the component

const squareLi = (a: number) => (
     <li key={a}>{a} * {a} = {a * a}</li> // key must be unique for list items, if a is duplicate in the list, best practice is to use index.
);

function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    
    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);
    const squareList = numberArray1.map(squareLi);

    return (
        <>
            <h4>Map</h4>
            squares = {squares}<br />
            cubes = {cubes}<br />
            <ul>
                {squareList}
            </ul>
            <ol>
                {numberArray1.map((a, index) => (<li key={index}>{a * a}</li>))}
            </ol>
        </>
    );
}

export default MapFunction;