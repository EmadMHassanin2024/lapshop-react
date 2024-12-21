
import { Link } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "../Context/PostsContext";

export default function PostList() {
  const Posts = useContext(postsContext);
  let PostList = Posts.map((post) => {
    return (
      
        <Link key={post.id} to={`/Posts/${post.id}`}>
          <div
            style={{
              backgroundColor: "orange",
              padding: "20px",
              marginTop: "10px",
            }}
          >
            <h1>{post.title}</h1>
          </div>
        </Link>
    
    );
  });
  return <>{PostList}</>;
}
