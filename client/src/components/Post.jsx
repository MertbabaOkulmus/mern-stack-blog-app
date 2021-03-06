import React from 'react'
import moment from "moment";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    Chip,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
} from "@material-ui/core";
//import  Grid_four  from "../images/Grid_four.svg";
//import  Grid_three  from "../images/Grid_three.svg";
import Noimage from "../images/Noimage.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 374,
        position: "relative",
        borderRadius: "10px",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
    },

    overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "white",
    },
    chip: {
        marginTop: theme.spacing(1),
    },
}));

const Post = ({ _id, title, subtitle, content, tag, image, createdAt }) => {
    const convertRelativeTime = (date) => {
        return moment(date).fromNow();
    }
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            {console.log(Card.className)}
            <CardMedia
                className={classes.media}
                image={image || Noimage} //image tanımlı ise onu kullan tanımlı değilse noimage yi kullan
                title="Resim"
            />
            <div className={classes.overlay}>
                <Typography variant="h6">Mert</Typography>
                <Typography variant="body2">
                    {convertRelativeTime(createdAt)}
                </Typography>
            </div>
            <CardContent>
                <Typography variant="h6" component="p" gutterBottom>{title}</Typography>{/*component="p" bir alt satıra geçmek için yazıldı,  gutterBottom bir satır boşluk için yazıldı*/}
                <Typography variant="overline" component="p" gutterBottom>{subtitle}</Typography>
                <Typography variant="body2" component="p">{content.subtring}</Typography>{/*250 karakterden fazla yazılar için ... göster alt kısmı */}
                <Chip variant="outlined" label={`#${tag}`} className={classes.chip} />
            </CardContent>

            <CardActions>
                <Button size="small" color="primary">
                    <Link to={`/posts/${_id}`}>Daha fazla...</Link>
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;
