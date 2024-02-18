import "./index.css"
import { FaPlus } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

function ButtonBar() {
  return (
    <>
        <div className="d-flex justify-content-end m-4">
            <button type="button" className="btn btn-light wd-button-border">Collapse All</button>
            <button type="button" className="btn btn-light wd-button-border">View Progress</button>
        
            <select className="wd-custom-select wd-button-border" name="select-publish" id="select-one-publish">
                <option value="select-publish-all">Publish All</option>
            </select>
        
            <button type="button" className="btn btn-light wd-module-button wd-button-border"><FaPlus /> Module</button>

            <button type="button" className="btn btn-light square-button wd-button-border"><BsThreeDotsVertical /></button>
        </div>
        <hr />
    </>
  );
}

export default ButtonBar;
