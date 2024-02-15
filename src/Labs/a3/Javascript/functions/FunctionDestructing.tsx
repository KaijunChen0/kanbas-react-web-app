const add = (a: number, b: number) => a + b;
const subtract = ({ a, b }: { a: number; b: number }) => a - b;
const multiply = (obj : {c: number, d: number}) => {
    return obj.c * obj.d;
}
// same as the above function
// const multiply = (obj : {c: number, d: number}) => {
//     const {c, d} = obj;
//     return c * d;
// }

function FunctionDestructing() {
    const sum = add(1, 2);
    const difference = subtract({ a: 4, b: 2 });//pass a object to the function
    const params = {c : 3, d : 4};//declare the object
    const product = multiply(params); //pass the object to the function

    return (
        <div>
            <h2>Function Destructing</h2>
            const add = (a, b) =&gt; a + b;<br />
            const sum = add(1, 2);<br />
            const subtract = (&#123; a, b &#125;) =&gt; a - b;<br />
            const difference = subtract(&#123; a: 4, b: 2 &#125;);<br/>
            sum = {sum}<br />
            difference = {difference}<br />
            const multiply = (obj : &#123;c: number, d: number&#125;) =&gt; &#123; c * d &#125;<br />
            const params = &#123;c : 3, d : 4&#125;;<br />
            product = {product}<br />
        </div>
   );
}

export default FunctionDestructing;