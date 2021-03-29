import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import Post from "./Post";
import Grid_four from "../images/Grid_four.svg";
import Grid_three from "../images/Grid_three.svg";

const useStyles = makeStyles((theme) => ({
    layoutShifter: {
        float: "right",
        margin: theme.spacing(2),
    },
}));

const PostsList = () => {
    const posts = useSelector((state) => state.posts.posts); //post'ları redux store dan aldığımız kısım
    const classes = useStyles();
    const [layout, setLayout]=useState("gridThree");
    const calculateMd = () => {
        return layout === "gridThree" ? 4 : 3;
    };

    return (
        <>
            {/* Layout Shifter */}
            <div className={classes.layoutShifter}>
                <Button variant="text" size="small" onClick={() => setLayout("gridThree")}>
                    <img
                        src={Grid_three}
                        alt="Three Columns Grid Icon"
                        style={{ background: layout === "gridThree" ? "#ccc" : "",  width: layout === "gridThree" ? "2rem" : "1.3rem" }}
                    />
                </Button>

                <Button variant="text" size="small" onClick={() => setLayout("gridFour")}>
                    <img
                        src={Grid_four}
                        alt="Four Columns Grid Icon"
                        style={{ background: layout === "gridFour" ? "#ccc" : "", width: layout === "gridFour" ? "2rem" : "1.3rem" } }
                    />
                </Button>
            </div>

            <Grid container spacing={2} alignContent="stretch">
                {posts.length > 0 && posts.map((post) => (
                    //xs={12} küçük ekranda sadece bir tane grid yani post,md={4} büyük ekranda ise üç tane post sığsın ; 4 8 12  
                    <Grid item key={post?.id} xs={12} md={calculateMd()} >
                        <Post {...post} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default PostsList;
