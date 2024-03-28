import axios from "axios";

// const COURSES_API = "http://localhost:4000/api/courses";
// const COURSES_API = "https://kanbas-node-server-app-0k43.onrender.com/api/courses";//replace with render.com remote server
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;

export const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    return response.data;
  };

export const findCourseById = async (courseId?: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}`);
  return response.data;
};

export const addNewCourse = async (course: any) => {
  const response = await axios.post(COURSES_API, course);
  return response.data;
};