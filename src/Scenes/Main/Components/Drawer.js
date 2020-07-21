import React from "react";
import myColors from "../../../Config/Colors";
import { AccountBox, Lock } from "@material-ui/icons";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
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
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
            <Typography variant='h5'>Aldi Wirawan</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='p'>aldiwira@gmaail.com</Typography>
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
    </div>
  );
};

export default Index;
