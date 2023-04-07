
export default function User({user, onClick}) {

    return (
        <div>
            ID: {user.id} <br/>
            Name: {user.name} <br/>
            <button onClick={() => onClick(user)}>info</button>
            <br/><br/>

        </div>
    );
}