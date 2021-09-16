import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles/";
import { createTheme } from "@material-ui/core/styles/";
import AppBar from "@material-ui/core/appBar";
import TextField from "@material-ui/core/TextField";
import RaisedButton from "@material-ui/core/Button";

const theme = createTheme();

export class FormUserDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <>
          <AppBar position="static">Enter User Details Here</AppBar>
          <TextField
            placeholder="Enter your first name"
            label="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            placeholder="Enter your last name"
            label="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            placeholder="Enter your email"
            label="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          >
            Continue
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
