import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles/";
import { createTheme } from "@material-ui/core/styles/";
import AppBar from "@material-ui/core/appBar";


const theme = createTheme();

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <AppBar position="static">Success</AppBar>
          <h1>Thank you for your submission</h1>
          <p>You will get an email with further instructions.</p>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
