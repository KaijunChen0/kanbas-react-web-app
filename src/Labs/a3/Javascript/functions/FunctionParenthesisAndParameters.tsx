function FunctionParenthesisAndParameters() {
    const square = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <>
            <h5>Function Parenthesis And Parameters</h5>
            twoSquared = {twoSquared}<br />
            square(2) = {square(2)}<br />
            threePlusOne = {threePlusOne}<br />
            plusOne(3) = {threePlusOne}<br />
        </>
    );
}

export default FunctionParenthesisAndParameters;