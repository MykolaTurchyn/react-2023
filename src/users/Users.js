import {useEffect, useState} from "react";
// import {getUsers} from "../services/fetch.api.service";
import User from "../user/User";
import {getUsersAxios} from "../services/axios.api.service";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [chosenUser, setChosenUse] = useState(null);


    // useEffect(() => {
    //     getUsers().then((data) => {
    //         setUsers(data)
    //     })
    // }, []);

    useEffect(() => {
        getUsersAxios().then(({data}) => {setUsers(data)})
    },[])

    const onClick = (data) => {
        setChosenUse(data)
    }
    return (
        <div>
            <hr/>
            {chosenUser &&
                (
                    <ul>
                        <li>ID: {chosenUser.id}</li>
                        <li>Name: {chosenUser.name}</li>
                        <li>Email: {chosenUser.email}</li>
                        <li>Address:
                            <ul>
                                <li>City: {chosenUser.address?.city}</li>
                                <li>Street: {chosenUser.address?.street}</li>
                            </ul>
                        </li>
                    </ul>
                )
            }
            <hr/>

            {
                users.map((user) => <User onClick={onClick} user={user} key={user.id}/>)
            }
        </div>
    )
        ;
}
