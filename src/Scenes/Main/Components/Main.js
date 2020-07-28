import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  Container,
  Paper,
  Typography,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import EditBar from "./DrawerEdit";

const Index = (props) => {
  const [selectedDatas, setselectedDatas] = useState({});
  const [isOpenEdit, setisOpenEdit] = useState(false);
  const classes = useStyles();
  let linkdatas = props.linkdatas;
  let isLoading = props.isLoadingContent;
  return (
    <Grid container className={classes.root}>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color='inherit' />
      </Backdrop>
      <EditBar
        selectedData={selectedDatas}
        openEdit={isOpenEdit}
        closeEdit={() => {
          setselectedDatas({});
          setisOpenEdit(false);
        }}
      />
      <Container>
        <Typography className={classes.title} variant='h4'>
          Your Shorter Link
        </Typography>
        <Grid item>
          <List>
            {linkdatas.map((val) => {
              return (
                <ListItem
                  onClick={() => {
                    setselectedDatas(val);
                    setisOpenEdit(true);
                  }}
                  button>
                  <Paper className={classes.ListIte}>
                    <Typography variant='h4'>{val.full_link}</Typography>
                    <Typography variant='h6'>
                      https://short.link/{val.short_link}
                    </Typography>
                  </Paper>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Container>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10,
  },
  paper: {
    padding: theme.spacing(2),
    position: "fixed",
    marginRight: 100,
    width: "30%",
  },
  title: {
    fontWeight: "bold",
  },
  ListIte: {
    height: "100%",
    width: "100%",
    padding: 15,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default Index;
