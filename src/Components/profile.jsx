import React, { Component } from "react";
import Navbar from "./Navbar";
import Options from "./Options";
import Footer from "./footer";
import Logout from './Logout';
import '../css/profile.css';
class Profile extends Component {
  render() {
    return (
      <div>
        
        <Navbar />
        <h1>Hello, Kushagra</h1>
        <Options />
        <Logout />
      </div>
    );
  }
}

export default Profile;
