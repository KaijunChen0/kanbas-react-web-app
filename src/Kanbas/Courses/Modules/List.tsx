import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import ButtonBar from "./ButtonsBar";
import { VscTriangleDown } from "react-icons/vsc";

function ModuleList() {
  const { courseId } = useParams();
  // const modulesList = modules.filter((module) => module.course === courseId);  
  const [moduleList, setModuleList] = useState(modules);
  const [module, setModule] = useState({
    _id: "0", name: "New Module",
    description: "New Description",
    course: courseId || "",
  });

  const addModule = (module: any) => {
    const newModule = { ...module,
      _id: new Date().getTime().toString() };
    const newModuleList = [newModule, ...moduleList];
    setModuleList(newModuleList);
  };

  const deleteModule = (moduleId: string) => {
    const newModuleList = moduleList.filter(
      (module) => module._id !== moduleId );
    setModuleList(newModuleList);
  };


// delete or not?
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <div className="m-4">
      <ButtonBar />

      <h4>Modules</h4>
      <input value={module.name}
        onChange={(e) => setModule({
          ...module, name: e.target.value })}
          className="form-control" 
          style={{ marginBottom: "10px" }}
      />
      <textarea value={module.description}
        onChange={(e) => setModule({
          ...module, description: e.target.value })}
          className="form-control"
          style={{ marginBottom: "10px" }}
      />
      <button onClick={() => { addModule(module) }} 
        className="btn btn-outline-success form-control"
        style={{ marginBottom: "10px" }}>
        Add</button>

      <ul className="list-group wd-modules">
        {moduleList
            .filter((module) => module.course === courseId)
            .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              <VscTriangleDown className="me-2" />
              {module.name}
              <span className="float-end">
                <button
                  onClick={() => deleteModule(module._id)}
                  className="btn btn-outline-danger">
                  Delete
                </button>
                <FaCheckCircle className="text-success" />
                <VscTriangleDown className="me-2" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;

