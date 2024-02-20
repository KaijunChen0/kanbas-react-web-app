import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";
import { HiMiniBars3 } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { courses, assignments } from "../../Database";

function BreadCrumb() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const links = ["Home",
                "Modules",
                "Piazza",
                "Zoom Meetings",
                "Assignments",
                "Quizzes",
                "Grades",
                "People",
                "Panopto Video",
                "Discussions",
                "Announcements",
                "Pages",
                "Files",
                "Rubrics",
                "Outcomes",
                "Collaborations",
                "Syllabus",
                "Settings"
            ];
    const { pathname } = useLocation();
    const standardizedPathname = decodeURIComponent(pathname);//replace %20 in URL with spaces to match the link
    const link = links.find((link) => 
                standardizedPathname.includes(link)
                );//find the link that matches the pathname

  return (
    <div className="d-none d-md-block">
      <nav className="m-3 custom-breadcrumb">
        <ol className="breadcrumb">
            <button type="button" className="btn btn-light"><HiMiniBars3 className="wd-breadcrumb-three-bars-button"/></button>
            <li className="breadcrumb-item p-3">
                <Link to={`/Kanbas/Courses/${course?._id}`} className="wd-breadcrumb-link">{course?._id}.{course?.number}</Link>
            </li>
            <li className="breadcrumb-item active p-3">
                {link}
            </li>
        </ol>
        <hr />
      </nav>
    </div>
  );
}

export default BreadCrumb;
