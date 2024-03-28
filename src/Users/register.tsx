import { useState } from "react";
import * as client from "./client";
import { useNavigate } from "react-router";

export default function RegisterScreen() {
    const navigate = useNavigate();
    const [user, setUser] = useState({username: "", password: ""});
    const register = async () => {
        try{
            const response = await client.registerUser(user);
            console.log(response);
            navigate("/Kanbas/Account/profile");
        }catch(error){
            console.log("Failed to register:", error);
        }
    };
    return (
        <div>
            <h1>Register</h1>
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
            <button onClick={register} className="btn btn-primary mt-2">Register</button>
        </div>
    );
        
}