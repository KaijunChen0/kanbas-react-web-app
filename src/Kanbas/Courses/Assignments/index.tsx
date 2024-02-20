import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRocket } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments, exams, quzzies, projects } from "../../Database";
import SearchBar from "./SearchBar";
import { PiNotePencilBold } from "react-icons/pi";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);

    // add quizzes,exam and project
  const quizList = quzzies.filter(
    (quiz) => quiz.course === courseId);
  const examList = exams.filter(
    (exam) => exam.course === courseId);
  const projectList = projects.filter(
    (project) => project.course === courseId);

  return (
    <>
      { /* <!-- Add buttons and other fields here --> */}
      <h1>Assigment</h1>
      <SearchBar />
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
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
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