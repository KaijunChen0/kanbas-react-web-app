import React, { useState } from "react";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";

    const [module, setModule] = useState({
        id: 12345,
        name: "NodeJS",
        description: "NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine",
        course: "CS5610",
    });
    const MODULE_URL = "http://localhost:4000/a5/module";

  return (
    <div>
        <h3>Working With Objects</h3>
        <h4>Retrieving Objects</h4>
        <a href="http://localhost:4000/a5/assignment"
            role="button"
            className="btn btn-primary">
            Get Assignment
        </a> &nbsp;

        <h4>Retrieving Properties</h4>
        <a href="http://localhost:4000/a5/assignment/title"
            role="button"
            className="btn btn-primary">
            Get Title
        </a> &nbsp;

        <h4>Modifying Properties</h4>
        <input type="text" 
            onChange={(e) => setAssignment({ ...assignment,
                title: e.target.value })}
            value={assignment.title}/> &nbsp;
        <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
            role="button"
            className="btn btn-primary">
            Update Title
        </a> 

        <h3>Exercise 1: Create a Module Object</h3>
        <h4>Retrieving Objects</h4>
        <a href="http://localhost:4000/a5/module"
            role="button"
            className="btn btn-success">
            Get Module
        </a>
        <h4>Retrieving Name of Module</h4>
        <a href="http://localhost:4000/a5/module/name"
            role="button"
            className="btn btn-success">
            Get Name of Module
        </a>
        <h4>Modifying Name of Module</h4>
        <input type="text" 
            onChange={(e) => setModule({ ...module,
                name: e.target.value })} 
            value={module.name}/> &nbsp;
        <a href={`${MODULE_URL}/name/${module.name}`}
            role="button"
            className="btn btn-success">
            Update Name of Module
        </a>

        <h3>Exercise 2: Modify Score, Completed and Description of Assignment</h3>
        <h4>Modifying Score</h4>
        <input type="number" 
            onChange={(e) => setAssignment({ ...assignment,
                score: Number(e.target.value) })}
            value={assignment.score}/> &nbsp;
        <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
            role="button"
            className="btn btn-warning">
            Update Score of Assignment
        </a> 

        <h4>Modifying Completed</h4>
        <input type="checkbox" 
            onChange={(e) => setAssignment({ ...assignment,
                completed: e.target.checked })}
            checked={assignment.completed}/> &nbsp;
        <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
            role="button"
            className="btn btn-warning">
            Update Completed of Assignment
        </a>

        <h4>Modifying Description</h4>
        <input type="text" 
            onChange={(e) => setAssignment({ ...assignment,
                description: e.target.value })}
            value={assignment.description}/> &nbsp;
        <a href={`${ASSIGNMENT_URL}/description/${assignment.description}`}
            role="button"
            className="btn btn-warning">
            Update Description of Assignment
        </a>
    </div>
  );
}
export default WorkingWithObjects;