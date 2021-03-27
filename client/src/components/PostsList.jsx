import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Grid,Button } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
    layoutShifter: {
      float: "right",
      margin: theme.spacing(2),
    },
  }));

const PostsList = () => {
    const posts = useSelector((state) => state.posts.posts); //post'ları redux store dan aldığımız kısım
    const classes=useStyles();
    return (
        <>
        <Grid container spacing={2} alignContent="stretch">
            {posts.length > 0 && posts.map((post)=>(
                //xs={12} küçük ekranda sadece bir tane grid yani post,md={4} büyük ekranda ise üç tane post sığsın ; 4 8 12  
                <Grid item key={post?.id} xs={12} md={4} > 
                    <Post {...post}/>
                </Grid>
           ))}
        </Grid> 
        </>
    )
}

export default PostsList
