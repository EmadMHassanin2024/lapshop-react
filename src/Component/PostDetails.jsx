import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "../Context/PostsContext";

import { Typography, Button, Container } from '@mui/material';
export default function PostDetails() {
  const posts = useContext(postsContext);
  console.log(posts)
  const { postId } = useParams();
  
  const post = posts.find((p) => {
    return p.Id == postId;
    
  });

  console.log("mmmmmmmmm",postId);
  

  return (
    <>
   
   <Container style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Hello
      </Typography>
      
      <Button variant="contained" color="secondary" style={{ margin: '10px 0' }}>
        Click
      </Button>
      
      <Typography variant="h5" color="red">
        Test details pages
      </Typography>
      
      <Typography variant="h4" color="textPrimary" gutterBottom>
        {post.title}
      </Typography>
      
      <Typography variant="body1" color="textSecondary">
        {post.body}
      </Typography>
    </Container>
    </>
  );

  // }else{
  //   <>
  //   return(
  //     <h1>the post with id:{post.Id} is not exits</h1>

  //   )

  //   </>
  // }
}
