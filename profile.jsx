import React, { Component } from "react";
import Navbar from "./Navbar";
import Options from "./Options";
class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Options/>
      </div>
    );
  }
}

export default Profile;
