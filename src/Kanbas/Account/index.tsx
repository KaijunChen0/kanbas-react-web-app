import { Navigate, Route, Routes } from "react-router";
import RegisterScreen from "../../Users/register";
import Profile from "../../Users/profile";
import LoginScreen from "../../Users/login";
import UserTable from "../../Users/Table";

export default function Account() {
    return (
        <div className="container-fluid">
            <h1>Account</h1>
            <Routes>
                <Route path="/" element={<Navigate to="login" />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/Admin/Users" element={<UserTable />} />
            </Routes>
        </div>
    );
}