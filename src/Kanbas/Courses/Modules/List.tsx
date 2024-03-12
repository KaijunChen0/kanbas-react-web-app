import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import ButtonBar from "./ButtonsBar";
import { VscTriangleDown } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  // const [moduleList, setModuleList] = useState(modules);
  // const [module, setModule] = useState({
  //   _id: "0", name: "New Module",
  //   description: "New Description",
  //   course: courseId || "",
  // });

  // const addModule = (module: any) => {
  //   const newModule = { ...module,
  //     _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };

  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId );
  //   setModuleList(newModuleList);
  // };

  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

// delete or not
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <div className="m-4">
      <ButtonBar />

      <h4>Modules</h4>
      <input value={module.name}
        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          className="form-control" 
          style={{ marginBottom: "10px" }}
      />
      <textarea value={module.description}
        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          className="form-control"
          style={{ marginBottom: "10px" }}
      />
      <button onClick={() => { dispatch(addModule({ ...module, course: courseId })) }} 
        className="btn btn-success"
        style={{ marginBottom: "10px" }}>
        Add</button>
      <button onClick={() => dispatch(updateModule(module))}
        className="btn btn-primary"
        style={{marginLeft:"10px", marginBottom:"10px"}}>
        Update
      </button>


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
              <button
                onClick={() => dispatch(deleteModule(module._id))}
                className="btn btn-outline-danger btn-sm"
                style={{marginLeft:"10px"}}>
                <MdDelete /> 
                Delete
              </button>
              <button
                onClick={(event) => { dispatch(setModule(module));}}
                className="btn btn-outline-success btn-sm"
                style={{marginLeft:"10px"}}>
                Edit
              </button>

              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <VscTriangleDown className="me-2" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson:any) => (
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

