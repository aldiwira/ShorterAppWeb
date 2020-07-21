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
  Divider,
} from "@material-ui/core";

const Index = (props) => {
  const [selectedDatas, setselectedDatas] = useState({});
  const classes = useStyles();
  let linkdatas = props.linkdatas;
  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <Grid item xs={6}>
          <Container>
            <Typography className={classes.title} variant='h4'>
              Your Shorter Link
            </Typography>
            <List>
              {linkdatas.map((val) => {
                return (
                  <ListItem
                    onClick={() => {
                      setselectedDatas(val);
                    }}
                    button>
                    <Paper className={classes.ListIte}>
                      <Typography className={classes.title} variant='h4'>
                        {val.full_link}
                      </Typography>
                      <Typography className={classes.title} variant='h6'>
                        https://short.link/{val.short_link}
                      </Typography>
                    </Paper>
                  </ListItem>
                );
              })}
            </List>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container>
            <Paper className={classes.paper}>
              <Typography className={classes.title} variant='h4'>
                Information
              </Typography>
              <Divider />
              <Typography variant='h6'>
                url : {selectedDatas.full_link}
              </Typography>
              <Typography variant='h6'>
                https://short.link/{selectedDatas.short_link}
              </Typography>
              <Typography variant='h6'>{}</Typography>
              <Divider />
              <Typography variant='h6'>
                Total clicked link : {selectedDatas.click_count}
              </Typography>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20,
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
    padding: 10,
  },
}));

const theme = createMuiTheme();
theme.typography.h4 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  "@media (min-width:320px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
export default Index;
