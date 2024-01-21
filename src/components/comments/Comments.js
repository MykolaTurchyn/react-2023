import React, {useState} from "react";
import Comment from "../comment/Comment";

export default function Comments() {
    let [comments, setComments] = useState([]);

    useState(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => setComments(data));
    })
    return (
        <div>
            <h1>Comments</h1>
            {
                comments.map((comment) =>
                    <Comment key={comment.id} comment={comment}/>
                )
            }
        </div>
    );
}