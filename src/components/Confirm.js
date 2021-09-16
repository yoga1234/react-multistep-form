import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles/";
import { createTheme } from "@material-ui/core/styles/";
import AppBar from "@material-ui/core/appBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import RaisedButton from "@material-ui/core/Button";

const theme = createTheme();

export class FormUserDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    // process form //
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <>
          <AppBar position="static">Confirm User Data</AppBar>
          <List>
            <ListItem primary="First Name" secondary={firstName}>Firstname</ListItem>
            <ListItem primary="last Name" secondary={lastName}>Lastname</ListItem>
            <ListItem primary="Email" secondary={email}>Email</ListItem>
            <ListItem primary="Occupation" secondary={occupation}>Occupation</ListItem>
            <ListItem primary="City" secondary={city}>City</ListItem>
            <ListItem primary="Bio" secondary={bio}>Bio</ListItem>
          </List>
          <br />
          <RaisedButton label="Back" style={styles.button} onClick={this.back}>
            Back
          </RaisedButton>
          <RaisedButton
            label="Confirm & Continue"
            style={styles.button}
            onClick={this.continue}
          >
            Confirm & Continue
          </RaisedButton>
        </>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetail;
