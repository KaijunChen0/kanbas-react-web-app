function Add({ a, b }: { a: number; b: number }) {
    return (
      <div>
        <h3>Add</h3>
        a = {a}<br />
        b = {b}<br />
        a + b = {a + b}<br />
      </div>
    );
  }
  
export default Add;