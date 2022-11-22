import React from "react";
import useStyles from "./style";
import Post from "./post/post";

const Posts = () => {
   const classes = useStyles();
   return (
      <>
         <h1>POSTS</h1>
         <Post />
         <Post />
      </>
   );
};

export default Posts;