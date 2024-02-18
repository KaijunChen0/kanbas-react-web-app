import exp from "constants";
import "./index.css";
import { FaRegCheckCircle, FaBan, FaFileImport, FaBell, FaCalendar } from "react-icons/fa";
import { FaRightFromBracket, FaChartSimple, FaBullhorn } from "react-icons/fa6";
import { GrTarget } from "react-icons/gr";
import { Link } from "react-router-dom";


function Status() {
  return (
    <div className="m-4">
        <div className="container">
            <div>
                <h5>Course Status</h5>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-warning"><FaRegCheckCircle /> Published</button>
                    <button type="button" className="btn btn-success"><FaBan /> Unpublished</button>
                </div>
            </div><br />
            
            <div className="list-group">
                <Link to="#" className="list-group-item list-group-item-action"><FaFileImport /> Import Existing Content</Link>
                <Link to="#" className="list-group-item list-group-item-action"><FaRightFromBracket /> Import From Commons</Link>
                <Link to="#" className="list-group-item list-group-item-action"><GrTarget /> Choose Home Page</Link>
                <Link to="#" className="list-group-item list-group-item-action"><FaChartSimple /> View Course Stream</Link>
                <Link to="#" className="list-group-item list-group-item-action"><FaBullhorn /> New Announcement</Link>
                <Link to="#" className="list-group-item list-group-item-action"><FaChartSimple /> New Analytics</Link>
                <Link to="#" className="list-group-item list-group-item-action"><FaBell /> View Course Notifications</Link>
            </div><br />

            <div>
                <h5>TO DO</h5><hr />
                <ul className="list-group">
                    <li className="list-group-item"><Link to="#">Grade A1 - ENV + HTML</Link></li>
                </ul>
            </div><br />
            
            <div>
                <div>
                    <h5>Comming Up</h5>
                    <span className="float-end"><FaCalendar /><Link to="#"> View Calendar</Link></span><br />
                    <hr />
                </div>
                
                <ul className="list-group">
                    <li className="list-group-item">
                        <div><FaCalendar /><Link to="#"> Lectrue CS4550.12631.202410 </Link></div>
                        <div className="wd-time">Sep 7 at 11:45am</div>
                    </li>
                    <li className="list-group-item">
                        <div><FaCalendar /><Link to="#"> Lectrue CS4550.12631.202410 </Link></div>
                        <div className="wd-time">Sep 11 at 11:45am</div>
                    </li>
                    <li className="list-group-item">
                        <div><FaCalendar /><Link to="#"> CS5610 06 SP23 Lectrue </Link></div>
                        <div className="wd-time">Sep 11 at 6pm</div>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  );
}

export default Status;