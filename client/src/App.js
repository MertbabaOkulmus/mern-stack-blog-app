import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PenIcon from "@material-ui/icons/Create";
import PostsList from "./components/PostsList";
import AddPostForm from "./components/AddPostForm";
//DAKİK 19 DA KALDIM 
const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,//genişleye bildiğin kadar genişle
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));

const App = () => {
  const [open,setOpen]=useState(false);
  const handleOpen=()=>{//model ı açmak için
    setOpen(true)
  }
  const handleClose=()=>{//model ı kapatmak için kullanırız
    setOpen(false)
  }
  const classes = useStyle();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <IconButton edge="start" className={classes.container} color="inherit" />
            <Typography variant="h6" color="secondary" className={classes.title}> {/*Typography yazı tipi */}
              <a href="http://localhost:3000/posts"> Blogify </a>
            </Typography>

            <Button color="primary" variant="outlined" startIcon={<PenIcon />} onClick={handleOpen}>{/*onClick={handleOpen} ile open true olur ve AddPostForm görünür hale gelir */}
              Yeni Yazı
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.container}>
          <Grid item xs={12}> {/*xs={12} en küçük ekranda bile ekranı kapla*/}
            <Router>
              <Switch>
                <Route exect path="/posts" component={PostsList} />{/* path imiz /posts PostsList component ınını döndür */}
              </Switch>
            <Redirect from="/" to="/posts"/>{/*from="/" url kısmına / geldiği zaman, bunu  /posts a yönlendir to="/posts" ile */}
            </Router>
          </Grid>
        </Grid>
      </Container>

      <AddPostForm open={open} handleClose={handleClose}/> {/*içerden kapata bilmek için  handleClose u prop olarak yolluyoruz*/}
    </>
  );
}

export default App;
