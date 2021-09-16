import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles/";
import { createTheme } from "@material-ui/core/styles/";
import AppBar from "@material-ui/core/appBar";
import TextField from "@material-ui/core/TextField";
import RaisedButton from "@material-ui/core/Button";

const theme = createTheme();

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <>
          <AppBar position="static">Enter Personal Details Here</AppBar>
          <TextField
            placeholder="Enter your Occupation"
            label="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
            autoComplete="new-password"
          />
          <br />
          <TextField
            placeholder="Enter your City"
            label="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
            autoComplete="new-password"
          />
          <br />
          <TextField
            placeholder="Enter your Bio"
            label="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
            autoComplete="new-password"
          />
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          >
            Back
          </RaisedButton>
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

export default FormPersonalDetails;
