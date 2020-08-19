import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";
import EditBar from "./DrawerEdit";
import Loader from "./Loader";
import { uri } from "../../../Helper/Api";
import { LStorage, tokenKey } from "../../../Helper/LocalStorage";

const Index = (props) => {
  const [selectedDatas, setselectedDatas] = useState({});
  const [isOpenEdit, setisOpenEdit] = useState(false);
  const classes = useStyles();
  let linkdatas = props.linkdatas;
  let isLoading = props.isLoadingContent;
  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <Loader isLoading={isLoading} />
        <EditBar
          selectedData={selectedDatas}
          openEdit={isOpenEdit}
          closeEdit={() => {
            setselectedDatas({});
            setisOpenEdit(false);
          }}
          fetchLink={props.fetchLink}
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
                        {uri}/{val.short_link}
                      </Typography>
                      <Typography variant='h7'>
                        Total visited : {val.click_count}
                      </Typography>
                    </Paper>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Container>
      </Grid>
    </ThemeProvider>
  );
};

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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
    padding: "15px",
    margin: 5,
  },
}));

export default Index;
