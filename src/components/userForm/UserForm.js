import {useForm} from "react-hook-form";

export default function UserForm({setUser}) {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: "all"});

    const submit = (data) => {
        setUser(prevData => [...prevData, data]);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={"number"} placeholder={"ID"} {...register("id")}/>
            <input type={"text"} placeholder={"Name"} {...register("name", {required: true})}/>
            <input type={"text"} placeholder={"Email"} {...register("email", {required: true})}/>
            <button disabled={!isValid}> Save</button>
        </form>
    );
}