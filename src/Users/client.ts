import axios from "axios";

const axiosWithCredentials = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true, //use cookies
});

export const fetchAllUsers = async () => {
    const response = await axiosWithCredentials.get("/users");
    return response.data;
}

export const registerUser = async (user: any) => {
    const response = await axiosWithCredentials.post(`/users/register`, user); // '/users' is to be appended to the baseURL, second parameter is the data encoded in body
    return response.data;
}

export const profile = async () => {
    const response = await axiosWithCredentials.get("/users/profile");
    return response.data;
}

export const loginUser = async (user: any) => {
    const response = await axiosWithCredentials.post(`/users/login`, user);
    return response.data;
}

export const logoutUser = async () => {
    const response = await axiosWithCredentials.post("/users/logout");
    return response.data;
}