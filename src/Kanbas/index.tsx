import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// import * as db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import * as client from "./Courses/client";

function Kanbas() {
  // const [courses, setCourses] = useState(db.courses);
  const COURSES_API = "http://localhost:4000/api/courses";
  const [courses, setCourses] = useState<any[]>([]);
  const findAllCourses = async () => {
    const courses = await client.findAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    _id: "CS0000", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "newCourse.png",
  });
  
  // const addNewCourse = () => {
  //   const newCourse = { ...course,
  //                       _id: new Date().getTime().toString(),
  //                       image: "newCourse.png"};
  //   setCourses([...courses, { ...course, ...newCourse }]);
  // };
  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course);
    setCourses([ ...courses, response.data ]);
  };

  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(
      `${COURSES_API}/${courseId}`
    );
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };
  const updateCourse = async () => {
    const response = await axios.put(
      `${COURSES_API}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Northeastern" element={<h1>Northeastern</h1>} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={<Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>
            } />
              {/* <Route path="Courses/:courseId/*" element={<Courses 
                courses={courses}/>
            } /> */}
              <Route path="Courses/:courseId/*" element={<Courses />} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
              <Route path="History" element={<h1>History</h1>} />
              <Route path="Studio" element={<h1>Studio</h1>} />
              <Route path="Commons" element={<h1>Commons</h1>} />
              <Route path="Help" element={<h1>Help</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;