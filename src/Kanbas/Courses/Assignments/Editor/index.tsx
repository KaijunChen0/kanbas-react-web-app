import React, {useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../../store";
import { addAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
//   const obj = useParams();//at least two parameters: assignmentId and courseId.
//   console.log(obj);
  const { assignmentId } = useParams();
  const { courseId } = useParams();

//   set the initial description of the assignment
  const [description, setDescription] = useState("Assignment Description");
    const handleDescriptionChange = (e: any) => {
        setDescription(e.target.value);
    }

//   set the initial value of the points to 100
  const [point, setPoint] = useState(100);
  const handlePointChange = (e: any) => {
    setPoint(e.target.value);
  }

//   set the initial dates of Due, Available from and Until
    const [dueDate, setDueDate] = useState("");
    const [availableDate, setAvailableDate] = useState("");
    const [untilDate, setUntilDate] = useState("");
    const handleDueDateChange = (e: any) => {
        setDueDate(e.target.value);
    }
    const handleAvailableDateChange = (e: any) => {
        setAvailableDate(e.target.value);
    }
    const handleUntilDateChange = (e: any) => {
        setUntilDate(e.target.value);
    }

//   const assignment = assignments.find(
//     (assignment) => assignment._id === assignmentId);
    const assignmentList = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignments).filter(
    (assignment) => assignment.course === courseId);
    const assignment = assignmentList.find(
    (assignment) => assignment._id === assignmentId);
    // console.log(assignment);

    const [assignmentTitle, setAssignmentTitle] = useState(assignment.title? assignment.title : "New Assignment");
    const handleAssignmentTitleChange = (e: any) => {
        setAssignmentTitle(e.target.value);
    }

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    dispatch(addAssignment({...assignment, course: courseId}));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const dispatch = useDispatch();

  return (
    <div className="container mb-3">
        <div className="m-3 p-1 row">
            <h2>Assignment Editor</h2>
            {/* Add button bar */}
            <div style={{"color": "green"}} className="col-auto ms-auto">
                <FaRegCheckCircle /> Published
                <button type="button" className="btn btn-light square-button wd-button-border" 
                    style={{border: "1px solid #bfc6ca"}}><BsThreeDotsVertical /></button>
            </div>
        </div>
        <hr className="m-3 p-1"/>

        {/* rest of content from previous assignment */}
        <div className="m-3 p-1 row">
            <label htmlFor="">Assignment Name</label>
            <input value={ assignmentTitle } 
                onChange={handleAssignmentTitleChange}
                className="form-control mb-2" />
        </div>
        
        <div className="m-3 p-1 row">
            <textarea className="form-control" id="textarea1" rows={5} 
                value={description}
                onChange={handleDescriptionChange}></textarea>
        </div>

        <div className="m-3 p-1 row">
            <label htmlFor="input-points" className="form-label col-sm-2">Points</label>
            <div className="col-sm-4">
                <input type="number" value={point} className="form-control" id="input-points"
                    onChange={handlePointChange} />
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
                            <input className="form-control" type="date" id="date-due" value={dueDate } 
                                onChange={handleDueDateChange}/>
                        </div>
                    </div>
                
                    <div className="row g-3 m-3">
                        <div className="col-md-6">
                            <label htmlFor="date-available"><b>Available from</b></label>
                            <input className="form-control" type="date" id="date-available" value={availableDate} 
                                onChange={handleAvailableDateChange}/>
                        </div>
                        
                        <div className="col-md-6">
                            <label htmlFor="date-until"><b>Until</b></label>
                            <input className="form-control" type="date" id="date-until" value={untilDate} 
                                onChange={handleUntilDateChange}/>
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