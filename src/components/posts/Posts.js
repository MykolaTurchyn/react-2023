import React, {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    },[])
    return (
        <div>
            <h1>Posts</h1>

            {
                posts.map((post) => <Post post={post} key={post.id}/>)
            }
        </div>
    );
}