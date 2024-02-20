import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelopeOpenText, FaRegClock, FaRegQuestionCircle } from "react-icons/fa";
import { BiLaptop } from 'react-icons/bi';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { TbLetterN } from 'react-icons/tb';

function KanbasNavigation() {
  const links = [
    { label: "Northeastern",        icon: <TbLetterN className="fs-2 wd-account-icon" />},
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 wd-account-icon" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 wd-account-icon" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 wd-account-icon" /> },
    { label: "Inbox",     icon: <FaEnvelopeOpenText className="fs-2 wd-account-icon" />},
    { label: "History",   icon: <FaRegClock className="fs-2 wd-account-icon" />},
    { label: "Studio",    icon: <BiLaptop className="fs-2 wd-account-icon" />},
    { label: "Commons",  icon: <FaArrowRightFromBracket className="fs-2 wd-account-icon" />},
    { label: "Help",      icon: <FaRegQuestionCircle className="fs-2 wd-account-icon" />}
  ];
  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block">
      <ul className="wd-kanbas-navigation">
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}> {link.icon} <br /> {link.label} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;