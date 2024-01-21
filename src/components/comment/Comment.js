export default function Comment({comment}) {
    return (
        <div>
            <h2>Comment {comment.id}</h2>
            Name: {comment.name} <br/>
            Email: {comment.email} <br/>
            Body: {comment.body} <br/>

        </div>
    );
}