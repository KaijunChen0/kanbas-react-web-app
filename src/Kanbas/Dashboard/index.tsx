import React, {useState} from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import * as db from "../Database";

function Dashboard({courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {

  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <h5>Course</h5>
      <input value={course.id} className="form-control" 
           onChange={(e) => setCourse({ ...course, id: e.target.value }) }/> &nbsp;
      <input value={course.name} className="form-control" 
           onChange={(e) => setCourse({ ...course, name: e.target.value }) }/> &nbsp;
      <input value={course.number} className="form-control" 
          onChange={(e) => setCourse({ ...course, number: e.target.value }) }/> &nbsp;
      <input value={course.startDate} className="form-control" type="date" 
           onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/> &nbsp;
      <input value={course.endDate} className="form-control" type="date" 
          onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/><br />
      
      <button onClick={addNewCourse} className="btn btn-success" style={{marginRight:'10px'}}>
        Add
      </button>
      <button onClick={updateCourse} className="btn btn-warning" style={{marginRight:'10px'}}>
        Update
      </button>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course.id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course.id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.id} {course.number} {course.name} 
                  </Link>
                  <p className="card-text">{course.id} {course.number} {course.name}</p>
                  <Link to={`/Kanbas/Courses/${course.id}/Home`} className="btn btn-outline-primary" style={{ marginRight: '10px' }}>
                    Go </Link>
                    <button onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }} className="btn btn-outline-warning" style={{ marginRight: '10px' }}>
                      Edit
                    </button>

                  <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                        }} className="btn btn-outline-danger" style={{ marginRight: '10px' }}>
                        Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;