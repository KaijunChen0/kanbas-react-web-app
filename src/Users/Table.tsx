import React, { useState, useEffect } from "react";
import * as client from "./client";
import { User } from "./client";
import { BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill, BsPencil } from "react-icons/bs";

export default function UserTable() {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User>({
        id: new Date().getTime().toString(), username: "", password: "", firstName: "",
        lastName: "", role: "USER", email: "", dob: "2000-01-01"});
    const [role, setRole] = useState("USER");
    const fetchUsersByRole = async (role: string) => {
      const users = await client.findUsersByRole(role);
      setRole(role);
      setUsers(users);
    };
  

  const fetchUsers = async () => {
    const users = await client.fetchAllUsers();
    setUsers(users);
  };

  const createUser = async () => {
    try {
      const newUser = await client.registerUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user: User) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u:any) => u.id !== user.id));
    } catch (err) {
      console.log(err);
    }
  };

  const selectUser = async (user: User) => {
    try {
      const u = await client.fetchUserById(user.id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
const updateUser = async () => {
    try {
        const status = await client.updateUser(user);
        setUsers(users.map((u) =>
            (u.id === user.id ? user : u)));
    } catch (err) {
        console.log(err);
    }
};

useEffect(() => { fetchUsers(); }, []);

  return (
    <div>
        <select
            onChange={(e) => fetchUsersByRole(e.target.value)}
            value={role || "USER"}
            className="form-control w-25 float-end">
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
            <option value="FACULTY">FACULTY</option>
            <option value="STUDENT">STUDENT</option>
        </select>

      <h1>User Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
          <tr>
            <td>
              <input placeholder="username" value={user.username} onChange={(e) =>
                setUser({ ...user, username: e.target.value })}/> &nbsp;
              <input placeholder="password" type="password" value={user.password} onChange={(e) =>
                setUser({ ...user, password: e.target.value })}/>
            </td>
            <td>
              <input placeholder="first name" value={user.firstName} onChange={(e) =>
                setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input placeholder="last name" value={user.lastName} onChange={(e) =>
                setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <input placeholder="email" value={user.email} onChange={(e) =>
                setUser({ ...user, email: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} onChange={(e) =>
                setUser({ ...user, role: e.target.value })}>
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
                <option value="FACULTY">FACULTY</option>
                <option value="STUDENT">STUDENT</option>
              </select>
            </td>
            <td className="text-nowrap">
            <BsFillCheckCircleFill
                onClick={updateUser}
                className="me-2 text-success fs-1 text"/>
              <BsPlusCircleFill 
                onClick={createUser}
                className="me-2 text-success fs-1 text"/>
            </td>
          </tr>
        </thead>

        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-danger me-2">
                  <BsTrash3Fill onClick={() => deleteUser(user)}/>
                </button>
                <button className="btn btn-warning me-2">
                    <BsPencil onClick={() => selectUser(user)} />
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
