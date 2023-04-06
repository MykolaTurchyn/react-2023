export default function Post({post}) {
    return (
        <div>
            <h2>Post {post.id}</h2>
            Title: {post.title} <br/>
            Body: {post.body} <br/>
        </div>
    );
}