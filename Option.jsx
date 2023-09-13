import React, { Component } from "react";
// import Card from 'react-bootstrap/Card';
import "../css/Option.css";

class Option extends Component {
  render() {
    return (
      <div>
        <div className="card card1 col-6">
          <div className="cardTitle">Your Orders</div>
          <div className="cardImg"></div>
          <div className="content">Track or Order again</div>
        </div>
        <div className="card card2 col-6">
          <div className="cardTitle">Your Orders</div>
          <div className="content">Track or Order again</div>
        </div>
        <div className="card card3 col-6">
          <div className="cardTitle">Your Orders</div>
          <div className="content">Track or Order again</div>
        </div>
        <div className="card card4 col-6">
          <div className="cardTitle">Your Orders</div>
          <div className="content">Track or Order again</div>
        </div>
        <div className="card card5 col-6">
          <div className="cardTitle">Your Orders</div>
          <div className="content">Track or Order again</div>
        </div>
        
      </div>
    );
  }
}

export default Option;
