import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Divider,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SnackBar from "./SnackBar";
import Api, { uri } from "../../../Helper/Api";
import { LStorage, tokenKey } from "../../../Helper/LocalStorage";

const clipboardy = require("clipboardy");

const Index = (props) => {
  let datasLink = props.selectedData;
  const token = LStorage.getItem(tokenKey);
  useEffect(() => {
    setlinkData(datasLink);
  }, [datasLink]);

  const [linkData, setlinkData] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [isOpenSnack, setisOpenSnack] = useState(false);
  const [MassageSnack, setMassageSnack] = useState(null);

  const onEditClick = async () => {
    setisLoading(true);
    console.log(linkData);
    await Api.put(
      `shorter/${linkData._id}/update`,
      {
        full_link: linkData.full_link,
        short_link: linkData.short_link,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        setisLoading(false);
        props.fetchLink();
        props.closeEdit();
      })
      .catch((errors) => {
        setisLoading(false);
      });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SnackBar
        openSnack={isOpenSnack}
        closeSnack={() => setisOpenSnack(false)}
        massageSnack={MassageSnack}
      />
      <Container>
        <Drawer
          anchor='right'
          open={props.openEdit}
          onClose={() => {
            setlinkData({});
            props.closeEdit();
          }}>
          <List>
            <ListItem>
              <Typography className={classes.title} variant='h6'>
                Your data
              </Typography>
            </ListItem>
            <Divider />

            <ListItem>
              <TextField
                fullWidth
                value={linkData.full_link}
                variant='outlined'
                onChange={(event) => {
                  setlinkData({ ...linkData, full_link: event.target.value });
                }}
                label='full link'
              />
            </ListItem>
            <ListItem>
              <TextField
                fullWidth
                value={linkData.short_link}
                variant='outlined'
                onChange={(event) => {
                  setlinkData({ ...linkData, short_link: event.target.value });
                }}
                label='short link'
              />
            </ListItem>
            <ListItem>
              <Typography variant='h7'>
                Total visited : {linkData.click_count}
              </Typography>
            </ListItem>
            <Divider />
            <List>
              <ListItem>
                <Button
                  fullWidth
                  onClick={onEditClick.bind(this)}
                  disabled={isLoading}
                  color='primary'
                  variant='contained'>
                  {isLoading ? "Loading" : "Edit"}
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  onClick={() => {
                    let link = `${uri}/${linkData.short_link}`;
                    clipboardy.write(link);
                    setisOpenSnack(true);
                    setMassageSnack("Success copy to your clipboard");
                    props.closeEdit();
                  }}
                  color='inherit'
                  variant='outlined'>
                  Copy Your Short Link
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  disabled={isLoading}
                  color='secondary'
                  variant='outlined'>
                  {isLoading ? "Loading" : "Delete"}
                </Button>
              </ListItem>
            </List>
          </List>
        </Drawer>
      </Container>
    </div>
  );
};

export default Index;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontWeight: "bold",
  },
}));
