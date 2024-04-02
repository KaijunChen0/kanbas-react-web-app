import { useState } from "react";
import * as client from "./client";
import { Link, useNavigate } from "react-router-dom";

export default function LoginScreen() {
    const navigate = useNavigate();
    const [user, setUser] = useState({username: "", password: ""});
    const login = async () => {
        try{
            const existingUser = await client.loginUser(user);
            console.log(existingUser);
            navigate("/Kanbas/Account/profile");
        }catch(error){
            console.log("Failed to login:", error);
        }
    };
    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                className="form-control"
            />
            <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                className="form-control mt-2"
            />
            <button onClick={login} className="btn btn-primary mt-2">Login</button>
            <Link to="/Kanbas/Account/register" className="btn btn-link mt-2">
                Register
            </Link>
        </div>
    );
        
}