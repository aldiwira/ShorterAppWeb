import React from "react";
import myColors from "../../../Config/Colors";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  AppBar: {
    background: myColors.colorBlueNTSC,
  },
  BtnPrimary: {
    marginRight: 10,
  },
}));

const Index = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color='secondary' className={classes.AppBar} position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            onClick={props.onClickMenu}
            aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            My Shorter Link
          </Typography>
          <Grid>
            <Button
              variant='contained'
              onClick={props.onCreateClick}
              className={classes.BtnPrimary}
              color='secondary'>
              Create
            </Button>
            <Button
              onClick={props.onLogout}
              variant='contained'
              color='primary'>
              Log Out
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Index;
