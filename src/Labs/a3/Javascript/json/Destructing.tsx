function Destructing() {
    const person = { name: "John", age: 25 };//person object
    const { name, age } = person;// same as `const name = person.name; const age = person.age`
    const numbers = ["one", "two", "three"];
    const [ first, second, third ] = numbers; // same as `const first = numbers[0]; const second = numbers[1]; const third = numbers[2];`
    return (
      <div>
        <h2>Destructing</h2>
        <h3>Object Destructing</h3>
        const &#123; name, age &#125; =
              &#123; name: "John", age: 25 &#125;<br /><br />
        name = {name}<br />
        age = {age}
        <h3>Array Destructing</h3>
        const [first, second, third] = ["one","two","three"]<br/><br/>
        first = {first}<br />
        second = {second}<br />
        third = {third}
      </div>
    );
}

export default Destructing;