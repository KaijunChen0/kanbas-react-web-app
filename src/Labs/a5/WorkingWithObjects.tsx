import React, { useState } from "react";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";

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
    </div>
  );
}
export default WorkingWithObjects;