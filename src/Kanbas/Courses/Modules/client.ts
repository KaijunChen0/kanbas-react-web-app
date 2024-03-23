import axios from "axios";

const COURSES_API = "http://localhost:4000/api/courses";

export const findModulesForCourses = async (courseId?: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};
