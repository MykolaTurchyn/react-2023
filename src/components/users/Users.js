import React, {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);
    return (
        <div>
            <h1>Users</h1>
            {
                users.map((user) => <User user={user} key={user.id}/>)
            }
        </div>
    );
}