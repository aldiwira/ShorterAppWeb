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

const Index = (props) => {
  let datasLink = props.selectedData;
  const initValue = {
    _id: null,
    full_link: null,
    short_link: null,
    owner: null,
  };
  const [linkData, setlinkData] = useState(initValue);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Drawer
          anchor='right'
          open={props.openEdit}
          onClose={() => {
            setlinkData(initValue);
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
                value={
                  linkData.full_link ? linkData.full_link : datasLink.full_link
                }
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
                value={
                  linkData.short_link
                    ? linkData.short_link
                    : datasLink.short_link
                }
                variant='outlined'
                onChange={(event) => {
                  setlinkData({ ...linkData, short_link: event.target.value });
                }}
                label='short link'
              />
            </ListItem>
            <Divider />
            <List>
              <ListItem>
                <Button fullWidth color='primary' variant='contained'>
                  Edit
                </Button>
              </ListItem>
              <ListItem>
                <Typography variant='p'></Typography>
              </ListItem>
              <ListItem>
                <Typography variant='p'>{datasLink._id}</Typography>
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
