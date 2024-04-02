import { useEffect, useState } from "react";
import * as client from "./client";
import { useNavigate } from "react-router";

export default function Profile() {
    const [profile, setProfile] = useState({username: "", password: ""});
    const navigate = useNavigate();
    const fetchProfile = async () => {
        try{
            const profile = await client.profile();
            setProfile(profile);
            console.log(profile);
        }catch(error){
            console.log("Failed to fetch profile:", error);
            // if failed to fetch profile, navigate to login page
            navigate("/Kanbas/Account/login");
        }
    };
    const logout = async () => {
        try{
            await client.logoutUser();
            navigate("/Kanbas/Account/login");
        }catch(error){
            console.log("Failed to logout:", error);
        }
    };
    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            <pre>
                <code>{JSON.stringify(profile, null, 2)}</code>
            </pre>
            <button
                onClick={logout}
                className="btn btn-danger mt-2">
                Logout
            </button>
        </div>
    );
}