import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import myColors from "../../../Config/Colors";
import { Api } from "../../../Helper/Api";
import { AccountBox, Lock } from "@material-ui/icons";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  TextField,
  Button,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Drawer: {
    backgroundColor: myColors.colorBlueNTSC,
    color: myColors.colorWhiteFlat,
  },
  icon: {
    color: myColors.colorWhiteFlat,
  },
  title: {
    fontWeight: "bold",
  },
}));

const Index = (props) => {
  useEffect(() => {
    setshorterDatas({ ...shorterDatas, short_link: uniqid.time() });
  }, []);
  const [shorterDatas, setshorterDatas] = useState({
    full_link: null,
    short_link: null,
  });
  const [errorDatas, seterrorDatas] = useState(null);
  const [isErrorCreate, setisErrorCreate] = useState(false);
  const classes = useStyles();
  let token = props.tokenDatas;
  const userDatas = JSON.parse(props.userDatas);

  const doCreate = async () => {
    setisErrorCreate(false);
    await Api.post("/shorter/create", shorterDatas, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        props.fetchLink();
        props.closeCreateLink();
        setshorterDatas({
          full_link: null,
          short_link: uniqid.time(),
        });
      })
      .catch((errors) => {
        setisErrorCreate(true);
        const errorUnit = errors.response.data.errors;
        const errorUser = errors.response.data.data;
        if (errorUser) {
          seterrorDatas(errorUser);
        } else if (errorUnit) {
          seterrorDatas(errorUnit[0].msg);
        }
      });
  };

  return (
    <div className={classes.root}>
      <Container>
        {/* Main Drawwer */}
        <Drawer
          anchor='left'
          classes={{ paper: classes.Drawer }}
          open={props.openDrawer}
          onClose={props.closeDrawer}>
          <List>
            <ListItem>
              <Typography className={classes.title} variant='h4'>
                My Shorter Link
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant='h5'>{userDatas.username}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant='p'>{userDatas.email}</Typography>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <AccountBox className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary='Change Account information' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Lock className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary='Change password' />
            </ListItem>
          </List>
        </Drawer>

        {/* for create link */}
        <Drawer
          anchor='right'
          open={props.openCreateLink}
          onClose={props.closeCreateLink}>
          <List>
            <ListItem>
              <Typography className={classes.title} variant='h4'>
                Create Link
              </Typography>
            </ListItem>
          </List>
          <Divider />
          <form autoComplete='off'>
            <List>
              <ListItem>
                <TextField
                  fullWidth
                  value={shorterDatas.full_link}
                  onChange={(event) => {
                    setshorterDatas({
                      ...shorterDatas,
                      full_link: event.target.value,
                    });
                  }}
                  error={isErrorCreate}
                  label='Full Link'
                  variant='outlined'
                />
              </ListItem>
              <ListItem>
                <TextField
                  fullWidth
                  value={shorterDatas.short_link}
                  onChange={(event) => {
                    setshorterDatas({
                      ...shorterDatas,
                      short_link: event.target.value,
                    });
                  }}
                  error={isErrorCreate}
                  label='Short Link'
                  variant='outlined'
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <Button
                  fullWidth
                  onClick={doCreate.bind(this)}
                  color='primary'
                  variant='contained'>
                  Submit
                </Button>
              </ListItem>
              <ListItem>
                <Typography variant='p'>
                  {errorDatas ? errorDatas : "Stack Here?"}
                </Typography>
              </ListItem>
            </List>
          </form>
        </Drawer>
      </Container>
    </div>
  );
};

export default Index;
