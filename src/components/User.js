import {usersService} from "../services/users.service";
import {useForm} from "react-hook-form";

export default function User({user, setUsers}) {

    const {register, handleSubmit,setValue} = useForm({mode:"all"});
    const deleteUser = async () => {
        await usersService.deleteUserById(user.id);
        setUsers(users => {
            let index = users.findIndex(car => car.id === user.id)
            users.splice(index, 1);
            return [...users];
        });

    }
    return (
        <form onSubmit={() => deleteUser()}>
            <hr/>
            ID: {user.id},<br/>
            Name: {user.name},<br/>
            Email: {user.email} <br/>
            <button>Update</button>
            <button onSubmit={() => deleteUser()}>Delete</button>
            <hr/>

        </form>
    );
}