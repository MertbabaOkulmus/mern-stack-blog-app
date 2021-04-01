import React, { useState, useEffect } from 'react'
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Divider, Button, Chip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Noimage from "../images/Noimage.svg";
import { fetchSinglePost, deletePost } from "../acitons/post";
import EditPostForm from './EditPostForm';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(8),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    marginTop: theme.spacing(3),
  },
  image: {
    width: "80%",
    borderRadius: 10,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  chip: {
    marginTop: theme.spacing(1),
  },
}));

const PostDetails = ({ history, location, match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;

  const currentPost = useSelector(state => state.posts.currentPost);

  const [editMode, setEditMode] = useState(false);//düzenleme açık kapalı

  const openEditMode = () => {
    setEditMode(true);
  };
  const closeEditMode = () => {
    setEditMode(false);
  };

  useEffect(() => {
    //bu alanda id ye sahip olan action dispatch ediyoruz
    dispatch(fetchSinglePost(id));
  }, [dispatch])

  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
  }

  const removePost = () => {
    dispatch(deletePost(currentPost._id));
    history.push("/posts");//post u sildikten sonra hala aynı boş sayfada kalmamak için history.push() ile delete işleminden sonra başka bir sayfaya yönlendirme yapıyoruz
  };

  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      {
        editMode ?
          (<EditPostForm post={currentPost} closeEditMode={closeEditMode}/>)
          : // Eğer düzenleme açıksa düzenleme ekranını göster kapalı ise normal bilgileri sadece okunabilir şekilde göster
          (<div>
            <div>
              <div className={classes.header}>
                <Typography variant="h5" gutterBottom>
                  {currentPost?.title /* varsa title, döndür*/}
                </Typography>
                <div>
                  <Button
                    color="primary"
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={openEditMode}
                  >
                    Düzenle
            </Button>
                  {" "}

                  <Button color="secondary"
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={removePost}>
                    Sil
            </Button>
                </div>
              </div>
            </div>
            <Divider />
            <Typography variant="overline" gutterBottom>
              {currentPost?.subtitle /* varsa subtitle, döndür*/}
            </Typography>

            <Typography variant="caption" component="p" gutterBottom>
              {convertRelativeTime(currentPost?.createdAt)} by Mert
        </Typography>

            <Chip variant="outlined" label={`#${currentPost?.tag}`} className={classes.chip} />

            <div className={classes.content}>
              <img
                src={currentPost?.image || Noimage}
                alt="Post"
                className={classes.image}
              />

              <Typography variant="body1">
                {currentPost?.content}
              </Typography>
            </div>
          </div>)
          
      }

    </Paper>
  )
}

export default PostDetails;
