import axios from "axios";

export interface User {
    username: string;
    password: string;
    id: string;
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
};

const axiosWithCredentials = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true, //use cookies
});

export const fetchAllUsers = async () => {
    const response = await axiosWithCredentials.get("/users");
    return response.data;
}

export const registerUser = async (user: User) => {
    const response = await axiosWithCredentials.post(`/users/register`, user); // '/users' is to be appended to the baseURL, second parameter is the data encoded in body
    return response.data;
}

export const profile = async () => {
    const response = await axiosWithCredentials.post("/users/profile");
    return response.data;
}

export const loginUser = async (user: User) => {
    const response = await axiosWithCredentials.post(`/users/login`, user);
    return response.data;
}

export const logoutUser = async () => {
    const response = await axiosWithCredentials.post("/users/logout");
    return response.data;
}

export const updateUser = async (user: User) => {
    const response = await axiosWithCredentials.put(`/users/${user.id}`, user);
    return response.data;
}