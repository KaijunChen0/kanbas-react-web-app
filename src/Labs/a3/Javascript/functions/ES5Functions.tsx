function add (a: number, b: number) { // function can be declared outside of the component and used within the component.
    return a + b;
}

function ES5Functions() {
    //declare a function inside the component
    // function add (a: number, b: number) {
    //     return a + b;
    // } 
    const twoPlusFour = add(2, 4);
    console.log(twoPlusFour);
    
    return (
    <>
        <h4>Functions</h4>
        <h5>Legacy ES5 functions</h5>
        twoPlusFour = { twoPlusFour }<br />
        add(2, 4) = { add(2, 4) }<br />
    </>
    );
}

export default ES5Functions;

// function can be declared outside of the component and used within the component.
// function add (a: number, b: number) {
//     return a + b;
// }
