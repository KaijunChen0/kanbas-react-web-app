import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      {/* Add button and search bar */}
      <div className="d-flex justify-content-end m-4">
        <button type="button" className="btn btn-light wd-button-border me-2"><FaFileImport /> Import</button>
        <div className="dropdown">
            <button className="btn btn-light dropdown-toggle wd-button-border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaFileExport /> Export
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        <button type="button" className="btn btn-light square-button wd-button-border"><IoSettingsSharp /></button>
      </div>

      <div><hr className="m-4"/></div>

      {/* student name and assignment name bar */}
      <div className="row m-3 p-1 g-3">
        <div className="col-md-6">
            <label htmlFor="date-available"><b>Student Names</b></label>
            <select className="form-select" aria-label="Default select example">
                <option selected><i className="fa-solid fa-magnifying-glass"></i> Search Students</option>
                <option value="1">Amy</option>
                <option value="2">Bob</option>
                <option value="3">Clark</option>
            </select>
        </div>
        
        <div className="col-md-6">
            <label htmlFor="date-available"><b>Assignment Names</b></label>
            <select className="form-select" aria-label="Default select example">
                <option selected><i className="fa-solid fa-magnifying-glass"></i> Search Assignments</option>
                <option value="1">A1</option>
                <option value="2">A2</option>
                <option value="3">A3</option>
            </select>
            </div>
      </div>

      {/* Filter bar */}
      <div className="row m-3 p-1">
            <div  className="col-md-6">
                <button className="btn btn-light wd-button-border me-2"><FaFilter /> Apply Filters</button>
            </div>
      </div>

        {/* Table */}
      <div className="table-responsive m-3 p-1">
        <table className="table table-striped wd-button-border table-bordered">
          <thead>
            <tr>
                <th>Student Name</th>
                {as.map((assignment) => (<th key={assignment._id} style={{textAlign:"center"}}>{assignment.title}</th>))}
            </tr>
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment._id}>
                   <td>{user?.firstName} {user?.lastName}</td>
                   {as.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td key={assignment._id} style={{textAlign:"center"}}><input value={grade?.grade || ""} style={{width: "30%", textAlign:"center"}} /></td>);})}
                </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>
    );
}
export default Grades;

