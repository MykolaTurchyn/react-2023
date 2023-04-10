import {useEffect, useState} from "react";
import {usersService} from "../services/users.service";
import User from "./User";
import UserForm from "./userForm/UserForm";

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAllUsers().then(({data}) => setUsers(data));
    }, []);
    return (
        <div>
            <UserForm setUser={setUsers}/>
            {
                users.map((user) => <User key={user.id} user={user} setUsers={setUsers}/>)
            }

        </div>
    );
}