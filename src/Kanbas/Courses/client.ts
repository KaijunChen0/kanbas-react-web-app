import axios from "axios";

const COURSES_API = "http://localhost:4000/api/courses";

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