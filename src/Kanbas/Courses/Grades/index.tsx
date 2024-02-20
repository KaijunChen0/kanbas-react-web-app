import { assignments, enrollments, grades, users } from "../../Database";
import { useParams, Link } from "react-router-dom";
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
        <button type="button" className="btn btn-light wd-button-border me-2" style={{border: "1px solid #bfc6ca"}}><FaFileImport /> Import</button>
        <div className="dropdown">
            <button className="btn btn-light dropdown-toggle wd-button-border" style={{border: "1px solid #bfc6ca"}} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FaFileExport /> Export
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
        <button type="button" className="btn btn-light square-button wd-button-border" style={{border: "1px solid #bfc6ca"}}><IoSettingsSharp /></button>
      </div>

      <div><hr className="m-4"/></div>

      {/* student name and assignment name bar */}
      <div className="row m-3 p-1 g-3">
        <div className="col-md-6">
            <label htmlFor="date-available"><b>Student Names</b></label>
            <select className="form-select" aria-label="Default select example">
                <option selected><i className="fa-solid fa-magnifying-glass"></i> Search Students</option>
                {es.map((enrollment) => {
                  const user = users.find((user) => user._id === enrollment.user);
                  return (
                      <option key={enrollment._id} value={user?._id}>
                        {user?.firstName} {user?.lastName}
                      </option>
                    );
                })}
            </select>
        </div>
        
        <div className="col-md-6">
            <label htmlFor="date-available"><b>Assignment Names</b></label>
            <select className="form-select" aria-label="Default select example">
                <option selected><i className="fa-solid fa-magnifying-glass"></i> Search Assignments</option>
                {as.map((assignment) => (
                  <option key={assignment._id} value={assignment._id}>
                    {assignment.title}
                  </option>
                ))}
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

