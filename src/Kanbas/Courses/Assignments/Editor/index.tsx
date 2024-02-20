import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";

function AssignmentEditor() {
//   const obj = useParams();//at least two parameters: assignmentId and courseId.
//   console.log(obj);
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="container mb-3">
        <div className="m-3 p-1 row">
            <h2>Assignment Name</h2>
            {/* Add button bar */}
            <div style={{"color": "green"}} className="col-auto ms-auto">
                        <FaRegCheckCircle /> Published
                        <button type="button" className="btn btn-light square-button wd-button-border" style={{border: "1px solid #bfc6ca"}}><BsThreeDotsVertical /></button>
            </div>
        </div>
        <hr className="m-3 p-1"/>

        {/* rest of content from previous assignment */}
        <div  className="m-3 p-1 row">
            <label htmlFor="">Assignment Name</label>
            <input value={assignment?.title}
                className="form-control mb-2" />
        </div>
        
        <div className="m-3 p-1 row">
            <textarea className="form-control" id="textarea1" rows={5}>This assignment describes how to install the development environment for creating andworking with Web applications we will be developing this semester. We will add newcontent every week, pushing the code to a GitHub source repository, and then deployingthe content to a remote server hosted on Netlify.</textarea>
        </div>

        <div className="m-3 p-1 row">
            <label htmlFor="input-points" className="form-label col-sm-2">Points</label>
            <div className="col-sm-4">
                <input type="number" value="100" className="form-control" id="input-points" />
            </div>
        </div>

        <div className="m-3 p-1 row">
            <label htmlFor="select-assignment-group" className="form-label col-sm-2">Assignment Group</label>
            <div className=" col-sm-4">
                <select name="select-assignment-group" id="select-assignment-group" className="form-select col">
                    <option value="ASSIGNMENT-GROUP">ASSIGNMENT</option>
                </select>
            </div>
        </div>

        <div className="m-3 p-1 row">
            <label htmlFor="select-display-grade" className="form-label col-sm-2">Display Grade as</label>
            <div className="col-sm-4">
                <select name="select-display-grade" id="select-display-grade" className="form-select col">
                    <option value="PERCENTAGE">Percentage</option>
                </select>
            </div>
        </div>

        <div className="m-3 p-1 row">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="check-cnt-grade" />
                <label className="form-check-label" htmlFor="check-cnt-grade">
                    Do not count this assignment towards the final grade
                </label>
            </div>
        </div>

        <div className="m-3 p-1 row">
            <label htmlFor="card-assign" className="form-label col-sm-2">Assign</label>
            <div className="card mb-3 form-control col d-flex">
                <div className="card-body text-dark">
                    <div className="row g-3 m-3">
                        <label htmlFor="select-assign-to" className="form-label col-sm-2"><b>Assign to</b></label>
                        <div className="col">
                            <select name="select-assign-to" id="select-assign-to" className="form-select">
                                <option value="EVERYONE">Everyone</option>
                            </select>
                        </div>
                    </div>
                
                    <div className="row g-3 align-items-center m-3">
                        <div className="col-auto">
                            <label htmlFor="date-due" className="col-form-label"><b>Due</b></label>
                        </div>
                        <div className="col">
                            <input className="form-control" type="date" id="date-due" value="" />
                        </div>
                    </div>
                
                    <div className="row g-3 m-3">
                        <div className="col-md-6">
                            <label htmlFor="date-available"><b>Available from</b></label>
                            <input className="form-control" type="date" id="date-available" value="" />
                        </div>
                        
                        <div className="col-md-6">
                            <label htmlFor="date-until"><b>Until</b></label>
                            <input className="form-control" type="date" id="date-until" value="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr className="m-3 p-1"/> 
        <div className="m-3 p-1 row justify-content-between">
            <div className="form-check col-auto">
                <input className="form-check-input" type="checkbox" value="" id="check-notify" />
                <label className="form-check-label" htmlFor="check-notify">
                    Notify users that this content has changed
                </label>
            </div>
            <div className="col-auto">
                <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
                    Save
                </button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-light float-end wd-button-border">
                    Cancel
                </Link>
            </div>
        </div>
        <hr className="m-3 p-1"/> 

    </div>
  );
}
export default AssignmentEditor;