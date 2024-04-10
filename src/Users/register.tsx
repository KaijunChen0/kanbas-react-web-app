import { useState } from "react";
import * as client from "./client";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RegisterScreen() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ id: new Date().getTime().toString(), username: "", 
    password: "", firstName: "", lastName: "", role: "USER", 
    email: "", dob: "2000-01-01"
  });
  const [error, setError] = useState("");

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
            {error && <div>{error}</div>}
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
            <Link to="/Kanbas/Account/login" className="btn btn-link mt-2">
                Login
            </Link>
        </div>
    );
        
}