import { useEffect, useState } from "react";
import * as client from "./client";
import { useNavigate } from "react-router";

export default function Profile() {
    // const [profile, setProfile] = useState({username: "", password: ""});
    const [profile, setProfile] = useState({ id: new Date().getTime().toString(), 
        username: "", password: "", firstName: "", lastName: "", dob: "2000-01-01", email: "", role: "USER" });
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
    const save = async () => {
        await client.updateUser(profile);
    };
    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            {/* <pre>
                <code>{JSON.stringify(profile, null, 2)}</code>
            </pre> */}
            {profile && (
                <div>
                <input className="form-control mt-2"
                    placeholder="Id"
                    value={profile.id} readOnly/>
                <input className="form-control mt-2" 
                    placeholder="Username"
                    value={profile.username} onChange={(e) =>
                    setProfile({ ...profile, username: e.target.value })}/>
                <input className="form-control mt-2" 
                    placeholder="Password"
                    value={profile.password} onChange={(e) =>
                    setProfile({ ...profile, password: e.target.value })}/>
                <input className="form-control mt-2" 
                    placeholder="First Name"
                    value={profile.firstName} onChange={(e) =>
                    setProfile({ ...profile, firstName: e.target.value })}/>
                <input className="form-control mt-2" 
                    placeholder="Last Name"
                    value={profile.lastName} onChange={(e) =>
                    setProfile({ ...profile, lastName: e.target.value })}/>
                <input className="form-control mt-2" 
                    placeholder="Date of Birth"
                    value={profile.dob} type="date" onChange={(e) =>
                    setProfile({ ...profile, dob: e.target.value })}/>
                <input className="form-control mt-2" 
                    placeholder="Email"
                    value={profile.email} onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })}/>
                <select className="form-control mt-2" 
                    onChange={(e) =>
                    setProfile({ ...profile, role: e.target.value })}>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                </select>
                </div>
            )}

            <button
                onClick={logout}
                className="btn btn-danger mt-2">
                Logout
            </button> &nbsp;
            <button
                onClick={save}
                className="btn btn-primary mt-2">
                Save
            </button>
        </div>
    );
}