import { FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../Modules/index.css";

function SearchBar() {
  return (
    <div className="d-flex justify-content-between align-items-center m-4">
        <input className="form-control w-25" type="text" placeholder="Search for Assignments" aria-label="default input example" />
    
        <div>
            <button type="button" className="btn btn-light wd-button-border me-2" style={{border:"1px solid #bfc6ca"}}><FaPlus /> Group</button>
            <button type="button" className="btn btn-light wd-button-border me-2 wd-module-button" style={{border:"1px solid #bfc6ca", backgroundColor:"#d4192d", color:"white"}}><FaPlus /> Assignment</button>
            <button type="button" className="btn btn-light square-button wd-button-border" style={{border:"1px solid #bfc6ca"}}><BsThreeDotsVertical /></button>
        </div>
    </div>
    );
}

export default SearchBar;
