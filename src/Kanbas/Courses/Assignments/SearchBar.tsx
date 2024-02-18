import { FaPlus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

function SearchBar() {
  return (
    <div className="d-flex justify-content-between align-items-center m-4">
        <input className="form-control w-25" type="text" placeholder="Search for Assignments" aria-label="default input example" />
    
        <div>
            <button type="button" className="btn btn-light wd-button-border me-2"><FaPlus /> Group</button>
            <button type="button" className="btn btn-light wd-button-border me-2 wd-module-button"><FaPlus /> Assignment</button>
            <button type="button" className="btn btn-light square-button wd-button-border"><BsThreeDotsVertical /></button>
        </div>
    </div>
    );
}

export default SearchBar;
