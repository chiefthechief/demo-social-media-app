import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./style";
import Post from "./post/post";

const Posts = () => {
   const posts = useSelector((state) => state.posts);
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