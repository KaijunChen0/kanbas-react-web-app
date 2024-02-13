function IfElse() {
    let true1 = true, false1 = false;

    return (
        <div>
            <h4>If Else</h4>
            { true1 && <p>true1!!!!</p> }
            { !false1 ? <p>!false1</p> : <p>false1</p> }
        </div>
    );
}

export default IfElse; // export the IfElse component to be used in the JavaScript component.