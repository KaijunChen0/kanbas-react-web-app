import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRocket, FaPlus } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { exams, quzzies, projects } from "../../Database";
import { PiNotePencilBold } from "react-icons/pi";
import "./index.css";
import { addAssignment, deleteAssignment, updateAssignment, selectAssignment } from "./assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../Modules/index.css";

function Assignments() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // const assignmentList = assignments.filter(
  //   (assignment) => assignment.course === courseId);

    // add quizzes,exam and project
  const quizList = quzzies.filter(
    (quiz) => quiz.course === courseId);
  const examList = exams.filter(
    (exam) => exam.course === courseId);
  const projectList = projects.filter(
    (project) => project.course === courseId);

  const assignmentList = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignments).filter(
      (assignment) => assignment.course === courseId);
  const assignment = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignment);
    // console.log(assignmentList);

  const dispatch = useDispatch();

  return (
    <>
      { /* <!-- Add buttons and other fields here --> */}
      <h1>Assigment</h1>
      
      <div className="d-flex justify-content-between align-items-center m-4">
          <input className="form-control w-25" type="text" placeholder="Search for Assignments" aria-label="default input example" />
      
          <div>
              <button type="button" className="btn btn-light wd-button-border me-2" 
                  style={{border:"1px solid #bfc6ca"}}><FaPlus /> Group</button>
              <button type="button" className="btn btn-light wd-button-border me-2 wd-module-button" 
                  style={{border:"1px solid #bfc6ca", backgroundColor:"#d4192d", color:"white"}}
                  onClick={()=>{ dispatch(addAssignment({...assignment, course: courseId}))}}><FaPlus />  
                  Assignment</button>
              {/* <button type="button" className="btn btn-light wd-button-border me-2 wd-module-button" 
                style={{border:"1px solid #bfc6ca", backgroundColor:"#d4192d", color:"white"}}
                onClick={()=>navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`)}><FaPlus />  
                Assignment</button> */}

              <button type="button" className="btn btn-light square-button wd-button-border" 
                  style={{border:"1px solid #bfc6ca"}}><BsThreeDotsVertical /></button>
          </div>
      </div>

      <hr className="m-4"/>
      {/* Assignment block */}
      <ul className="list-group wd-modules">
        <li className="list-group-item m-4">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <button type="button" className="rounded-rect-button me-2">40% of Total</button>
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <PiNotePencilBold className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="wd-link-setting">{assignment.title}</Link>
                <span className="float-end">
                  <button className="btn btn-outline-danger btn-sm me-2"
                    onClick={()=> {
                      const isConfirmed = window.confirm('Are you sure you want to remove this assignment?');
                      if (isConfirmed) {
                        dispatch(deleteAssignment(assignment._id));
                      }
                    }}>
                    Delete
                  </button>
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                </span>
              </li>))}
          </ul>
        </li>
      </ul>

      {/* quizzes block */}
      <ul className="list-group wd-modules">
        <li className="list-group-item m-4">
          <div>
            <FaEllipsisV className="me-2" /> QUIZZES
            <span className="float-end">
              <button type="button" className="rounded-rect-button me-2">10% of Total</button>
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {quizList.map((quiz) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaRocket className="me-2"/>
                <Link
                   to="#" className="wd-link-setting">{quiz.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>

      {/* exams block */}
      <ul className="list-group wd-modules">
        <li className="list-group-item m-4">
          <div>
            <FaEllipsisV className="me-2" /> EXAMS
            <span className="float-end">
              <button type="button" className="rounded-rect-button me-2">20% of Total</button>
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {examList.map((exam) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaRocket className="me-2"/>
                <Link
                   to="#" className="wd-link-setting">{exam.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>

      {/* project block */}
      <ul className="list-group wd-modules">
        <li className="list-group-item m-4">
          <div>
            <FaEllipsisV className="me-2" /> PROJECTS
            <span className="float-end">
              <button type="button" className="rounded-rect-button me-2">30% of Total</button>
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {projectList.map((project) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <PiNotePencilBold className="me-2" />
                <Link
                   to="#" className="wd-link-setting">{project.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;