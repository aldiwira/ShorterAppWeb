import React from "react";
import { Snackbar } from "@material-ui/core";
const Index = (props) => {
  return (
    <Snackbar
      autoHideDuration={1200}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={props.openSnack}
      onClose={props.closeSnack}
      message={props.massageSnack}
      key={{ vertical: "top", horizontal: "right" }}
    />
  );
};

export default Index;
