export default function User({user}) {

    return (
        <div>
            <h2>User {user.id}</h2>
            Name: {user.name},<br/>
            Username: {user.username}, <br/>
            Email: {user.email}, <br/>
            Address: {user.address.city},{user.address?.street} <br/>
        </div>
    );
}