import React, { Component } from "react";
import Navbar from "./Navbar";
import Options from "./Options";
import Footer from "./footer";
import Logout from './Logout';
class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Options />
        <Logout />
      </div>
    );
  }
}

export default Profile;
