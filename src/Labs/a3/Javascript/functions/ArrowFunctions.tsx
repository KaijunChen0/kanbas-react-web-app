function ArrowFunctions(){
    const subtract = (a:number, b:number) => {
        return a - b;
    }; // function can be declared inside the component and used within the component.
    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);

    return (
        <>  
            <h5>New ES6 arrow functions</h5>
            threeMinusOne = {threeMinusOne}<br />
            subtract(3, 1) = {subtract(3, 1)}<br />
        </>
    );
}

export default ArrowFunctions;